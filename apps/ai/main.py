from fastapi import FastAPI
from pydantic import BaseModel
from typing import List, Optional
import numpy as np
import pandas as pd

app = FastAPI(title="AI Analytics & Matching Service")

class AnalyticsInput(BaseModel):
    platform: str
    metrics: dict

class CampaignRequirements(BaseModel):
    min_followers: int = 0
    min_engagement_rate: float = 0.0
    niche: Optional[str] = None
    platforms: Optional[List[str]] = None

class CreatorProfile(BaseModel):
    followers: int
    engagement_rate: float
    niches: List[str]
    platforms: List[str]

@app.get("/health")
async def health():
    return {"ok": True}

@app.post("/analytics/summary")
async def analytics_summary(payload: List[AnalyticsInput]):
    # trivial example aggregation
    df = pd.DataFrame([{"platform": p.platform, **p.metrics} for p in payload])
    summary = {
        "platforms": df.platform.unique().tolist(),
        "means": df.groupby("platform").mean(numeric_only=True).to_dict(),
    }
    # a simple insight
    insight = "Engagement appears higher on "
    if "engagement" in df.columns:
        means = df.groupby("platform")["engagement"].mean().sort_values(ascending=False)
        if len(means) > 0:
            top = means.index[0]
            insight += f"{top}."
        else:
            insight = "Not enough data for engagement insights."
    else:
        insight = "No engagement field present in metrics."

    return {"summary": summary, "insight": insight}

@app.post("/match/score")
async def match_score(creator: CreatorProfile, campaign: CampaignRequirements):
    # Simple scoring heuristic 0-100
    score = 0.0
    score += min(100, (creator.followers / max(1, campaign.min_followers)) * 40) if campaign.min_followers > 0 else 20
    score += 40 if creator.engagement_rate >= campaign.min_engagement_rate else max(0, 40 * (creator.engagement_rate / max(1e-6, campaign.min_engagement_rate)))

    if campaign.niche:
        niche_match = 10 if campaign.niche in creator.niches else 0
        score += niche_match

    if campaign.platforms:
        overlap = len(set(campaign.platforms).intersection(set(creator.platforms)))
        score += min(10, overlap * 5)
    else:
        score += 5

    return {"score": round(float(min(100.0, score)), 2)}

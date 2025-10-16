export type UserType = 'creator' | 'business';

export interface User {
  _id?: string;
  email: string;
  type: UserType;
  followers?: number;
  engagementRate?: number; // 0-1
  platforms?: string[];
  niches?: string[];
}

export interface Campaign {
  _id?: string;
  name: string;
  budget: number;
  niche?: string;
  platforms?: string[];
  minFollowers?: number;
  minEngagementRate?: number; // 0-1
}

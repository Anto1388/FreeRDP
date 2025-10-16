export const config = {
  port: Number(process.env.PORT ?? 4000),
  mongoUrl: process.env.MONGO_URL ?? 'mongodb://localhost:27017/yalipa',
  stripeKey: process.env.STRIPE_SECRET_KEY ?? '',
  flutterwaveKey: process.env.FLW_SECRET_KEY ?? '',
};

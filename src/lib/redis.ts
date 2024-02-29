import { Redis } from "ioredis";


export const redis = process.env.ENVIRONMENT === "production" ? new Redis() : new Redis(process.env.KV_URL as string);
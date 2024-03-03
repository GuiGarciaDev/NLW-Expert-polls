import { Redis } from "ioredis";

export const redis = !process.env.REDIS_URL ? new Redis() : new Redis(process.env.REDIS_URL as string, {
    username: process.env.REDIS_USERNAME,
    password: process.env.REDIS_PASSWORD
});
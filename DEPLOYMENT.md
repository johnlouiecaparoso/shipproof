# Deployment Guide

## Prerequisites

- Vercel account (for Next.js web app)
- Railway account (for NestJS API)
- Supabase account (for PostgreSQL database)

## Database Setup (Supabase)

1. Create a new project in Supabase
2. Get your DATABASE_URL from project settings
3. Add it to your environment variables

## API Deployment (Railway)

1. Connect your GitHub repository to Railway
2. Select the `apps/api` directory
3. Add environment variables:
   - `DATABASE_URL` (from Supabase)
   - Other required env vars (see .env.example)
4. Deploy

## Web Deployment (Vercel)

1. Connect your GitHub repository to Vercel
2. Select the root directory
3. Configure:
   - Framework Preset: Next.js
   - Root Directory: `apps/web`
   - Build Command: `pnpm --filter web build`
   - Output Directory: `.next`
4. Add environment variables
5. Deploy

## Database Migrations

After deploying the API:

1. Get the Railway SSH URL
2. SSH into the Railway container
3. Run: `cd packages/db && pnpm prisma migrate deploy`

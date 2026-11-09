# NOVA KEY STORE — starter project

This is a **development starter**, not a deployed or production-ready store.

## 1. Add Supabase environment values
Copy `.env.example` to `.env.local` and fill in:
- `NEXT_PUBLIC_SUPABASE_URL`: your Supabase Project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: your Supabase Publishable Key (`sb_publishable_...`)

The Publishable Key is intended for browser use. Never put a Supabase Secret Key or Google OAuth client secret in frontend code or a public repository.

## 2. Run locally
Install Node.js, then run:
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## 3. Current status
Included: Next.js scaffold, Supabase client initialization, package display, social links, environment template.

Not yet implemented: Google sign-in UI, order creation, private receipt upload UI, customer order history, admin dashboard, secure admin assignment, server-side order validation, seller notifications, and email delivery of Nova Keys. Do not accept real payments through this starter yet.

## 4. Existing Supabase project
The project should be connected to the Supabase project you already created. Before production, review and test all Row Level Security policies and admin permissions. Assign admin privileges only from a trusted Supabase SQL Editor session; never allow customers to set their own `is_admin` value.

## 5. Deployment
Deploy only after the missing order, receipt, admin, and email workflows are implemented and tested. Add the Vercel domain to Supabase Authentication URL Configuration and Google OAuth authorized redirect settings.

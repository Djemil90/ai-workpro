# AI WorkPro Switzerland – Version 2 (MVP source code)

Trilingual (German, Albanian, Italian) Next.js app with Supabase email auth, server-side AI description generation, document storage, browser PDF export and Stripe subscription checkout.

## Start locally
1. Install Node.js 20+.
2. Run `npm install`.
3. Create Supabase project; execute `supabase/schema.sql` in SQL editor. Configure email verification.
4. Copy `.env.example` to `.env.local` and enter your own credentials. **Never commit secrets or put service role / Stripe secret / OpenAI key in NEXT_PUBLIC variables.**
5. Create a recurring CHF 9.90/month Stripe Price, set `STRIPE_PRICE_ID`.
6. Configure Stripe Billing customer portal and webhook URL `https://YOUR_DOMAIN/api/webhook` with events `checkout.session.completed`, `customer.subscription.updated`, `customer.subscription.deleted`. Set signing secret. For local testing use Stripe CLI to forward webhook.
7. Run `npm run dev`; visit http://localhost:3000.
8. For deployment, deploy to Vercel or another Next.js host, set the environment variables and update site URL, Supabase auth redirect URLs, Stripe webhook.

## Important limitations before public launch
- This is an **MVP starter**, not a production-ready billing/accounting system. No domain, cloud deployment, external account, or live payment has been configured.
- PDF is generated on-device with jsPDF standard fonts; Swiss accented and Albanian characters may not render perfectly. Embed a licensed Unicode font before launch. PDF is a basic document, not a Swiss QR-bill.
- Documents currently support one service line; saved records are stored server-side but the UI does not yet list/edit old documents.
- Subscription entitlement follows Stripe webhook status; ensure Stripe webhook is configured, and test payment, cancellation, duplicate events, and failed payments before launch.
- AI quota: free 3/month; paid 50/month. Basic database quota is enforced, but more operational protections (bot abuse, monitoring, spam prevention, privacy policy, backups, account deletion, data retention, error logging) are required.
- Check Swiss VAT registration, invoicing rules, privacy requirements (including sensitive customer details) and payment/terms compliance with a qualified professional. Do not select MWST unless the issuer is entitled/required to charge it.
- AI only drafts descriptive text; it does not generate legally verified invoices or invent tax details.

# IVAN — Next.js + Supabase

## Local setup
Requires Node.js 20.9+.

```bash
npm install
cp .env.example .env.local
npm run dev
```
Add your Supabase project URL and publishable/anon key to `.env.local`.

## Supabase setup
1. Create a Supabase project and enable Email/Password authentication.
2. Run `supabase/schema.sql` in the Supabase SQL Editor.
3. Create the two co-founder users under Authentication → Users.
4. Promote only those two users with this SQL, replacing the example addresses:

```sql
update public.profiles set role='admin'
where email in ('PARTNER_ONE_EMAIL','PARTNER_TWO_EMAIL');
```

5. Set the local Auth Site URL to `http://localhost:3000`.

## Connected modules in this version
- `/admin/login`: password login plus server-side database role check.
- `/admin`: protected admin page, paid revenue summary, order status updates, custom request status updates and private partner notes.
- `/account`: customer registration and login.
- `/custom-studio`: authenticated custom design submissions and private reference upload (8MB max).
- `supabase/schema.sql`: profiles, products, orders, order items, custom requests, conversations, messages, partner notes, brand settings, RLS and private reference storage.

## Still to finish before production
Customer chat inbox/reply UI and realtime notifications; checkout and verified payment webhooks; live product CRUD and product catalog connection; in-dashboard logo upload; order creation/checkout integration. The current shop catalog/cart remains demo data. Never set `payment_status='paid'` from the browser. Use a verified server-side payment webhook. Never expose service-role credentials in client code.

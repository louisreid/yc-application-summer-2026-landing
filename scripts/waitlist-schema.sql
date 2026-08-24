-- Run once in Vercel Postgres (Storage ? Query) or Neon console
CREATE TABLE IF NOT EXISTS waitlist_signups (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  name TEXT,
  company TEXT,
  role TEXT,
  interest TEXT DEFAULT 'early-access',
  mcp_url TEXT,
  source TEXT DEFAULT 'direct',
  consented_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  privacy_version TEXT NOT NULL DEFAULT '2026-08-24',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE waitlist_signups
  ADD COLUMN IF NOT EXISTS consented_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  ADD COLUMN IF NOT EXISTS privacy_version TEXT NOT NULL DEFAULT '2026-08-24';

CREATE INDEX IF NOT EXISTS waitlist_signups_created_at ON waitlist_signups (created_at DESC);

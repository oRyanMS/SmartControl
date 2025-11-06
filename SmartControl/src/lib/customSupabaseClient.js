// src/lib/customSupabaseClient.js
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://gnbtobvkrwdbdgovtchg.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImduYnRvYnZrcndkYmRnb3Z0Y2hnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIxOTYxMzAsImV4cCI6MjA3Nzc3MjEzMH0.VQTsHMyNiDroLeefJWfGbsz1OgWpuub1emOPgqez3Tg";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ptbfjttenneatebubsvo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB0YmZqdHRlbm5lYXRlYnVic3ZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA2MDcwMTgsImV4cCI6MjAzNjE4MzAxOH0.wRxRRXn3aacwQZnarIsfu1PLgNPpO7wz1Gpn6OkpQ2Y";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

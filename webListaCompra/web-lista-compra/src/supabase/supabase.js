import { createClient } from "@supabase/supabase-js/dist/index.cjs";

const supabaseConexion = createClient(
    "https://rqefkqpdwdddtjdvybeh.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxZWZrcXBkd2RkZHRqZHZ5YmVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg4MDQ3NjQsImV4cCI6MjA4NDM4MDc2NH0.In2E0K9POIzBP4Rwf5YNM1SXcmclevczz_kSoZfRiXc"
);

export {supabaseConexion};
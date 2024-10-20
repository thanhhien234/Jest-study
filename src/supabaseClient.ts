import dotenv from 'dotenv';
import { createClient, SupabaseClient } from "@supabase/supabase-js";
dotenv.config();

const supabaseUrl: string = process.env.VITE_SUPABASE_URL as string;
const supabaseKey: string = process.env.VITE_SUPABASE_URL as string;

const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);

export default supabase;

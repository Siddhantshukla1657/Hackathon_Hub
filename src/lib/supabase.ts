import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let supabase;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables.');
  console.log('Required variables:');
  console.log('- VITE_SUPABASE_URL');
  console.log('- VITE_SUPABASE_ANON_KEY');
  
  // Only use fallback values in development
  if (import.meta.env.DEV) {
    console.warn('Using fallback values for development. Authentication will not work until you provide real Supabase credentials.');
    const fallbackUrl = 'https://placeholder.supabase.co';
    const fallbackKey = 'placeholder-key';
    supabase = createClient(fallbackUrl, fallbackKey);
  } else {
    // In production, throw an error if credentials are missing
    throw new Error('Supabase credentials are required in production');
  }
} else {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
}

export { supabase };
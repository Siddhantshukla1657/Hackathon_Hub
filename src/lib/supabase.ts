import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let supabase;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables. Please check your .env file.');
  console.log('Required variables:');
  console.log('- VITE_SUPABASE_URL');
  console.log('- VITE_SUPABASE_ANON_KEY');
  
  // Provide fallback values for development to prevent crashes
  const fallbackUrl = 'https://placeholder.supabase.co';
  const fallbackKey = 'placeholder-key';
  
  console.warn('Using fallback values. Authentication will not work until you provide real Supabase credentials.');
  
  supabase = createClient(fallbackUrl, fallbackKey);
} else {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
}

export { supabase };
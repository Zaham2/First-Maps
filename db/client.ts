import { SupabaseClient } from '@supabase/supabase-js';
import { createClient } from './config';

const supabase: SupabaseClient = createClient();
export default supabase

import {createClient} from "@supabase/supabase-js"

const supabaseURL = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonymKey = import.meta.env.VITE_SUPABASE_ANONYM_KEY

const supabase = createClient(supabaseURL, supabaseAnonymKey)

export default supabase
import { createClient } from "@supabase/supabase-js"
import { UUID } from "crypto";

export const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string
    ,process.env.SUPABASE_SECRET_KEY as string
)

export interface iMasterTasks {
    id?: number;
    task: string;
    type: string;
    order: number;
    status?: string;
    note?: string;
    created_at?: string;
    created_by?: string;
    secure_id: string;
}
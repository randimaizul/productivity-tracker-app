import { getUserData } from '@/utils/clerk';
import { supabase } from '@/utils/supabase';

const ITEMS_PER_PAGE = 10;

export const getMasterTasks = async(query: string, currentPage: number) => {
    const { email } = await getUserData();
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;

    // await new Promise((resolve) => setTimeout(resolve, 1000));

    const { data, error } = await supabase
        .from('m_tasks')
        .select()
        .order('order', { ascending: true })
        .is('deleted_at', null)
        .eq('created_by',email)
        .eq('status','A')
        .or(`task.ilike.%${query}%,type.ilike.%${query}%,note.ilike.%${query}%`)
        .range(offset, offset + ITEMS_PER_PAGE);
        // .textSearch('task', query, {
        //     type: 'websearch',
        //     config: 'english',
        // });

    if(error) throw new Error(error?.message)
    return data
};

export const getMasterTasksPages = async(query: string) => {
    const { email } = await getUserData();

    const { data, error, count } = await supabase
        .from('m_tasks')
        .select('*',{count: 'exact'})
        .order('order', { ascending: true })
        .is('deleted_at', null)
        .eq('created_by',email)
        .eq('status','A')
        .or(`task.ilike.%${query}%,type.ilike.%${query}%,note.ilike.%${query}%`);
        
    if(error) throw new Error(error?.message)

    const totalPages = Math.ceil(Number(count) / ITEMS_PER_PAGE);
    return totalPages
};


export const getMasterTasksById = async( secure_id: string ) => {
    const { email } = await getUserData();
    
    const { data, error } = await supabase
        .from('m_tasks')
        .select()
        .is('deleted_at', null)
        .eq('created_by', email)
        .eq('secure_id', secure_id)
        .eq('status','A')
        .single();

    if(error) throw new Error(error?.message)

    return data
}
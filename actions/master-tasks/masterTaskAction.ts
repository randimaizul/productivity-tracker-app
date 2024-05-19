"use server";
import { iMasterTasks, supabase } from '@/utils/supabase';
import { z } from 'zod';
import { getUserData } from '../../utils/clerk';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const TaskSchema = z.object({
    task: z.string().min(2),
    type: z.string().min(4), 
    order: z.string().optional(),
    note: z.string().optional(),  
})

export const createMasterTaskAction = async (prevState: any ,formData: FormData) => {
    const validatedFields = TaskSchema.safeParse(Object.fromEntries(formData.entries()));

    if(!validatedFields.success){
        return {
            Error: validatedFields.error.flatten().fieldErrors
        }
    }

    try {
        const { email } = await getUserData();
        await supabase.from('m_tasks').insert({
            task: validatedFields.data.task,
            type: validatedFields.data.type,
            order: validatedFields.data.order,
            note: validatedFields.data.note,
            status: 'A',
            created_by: email,
        });
    } catch (error) {
        return {message: 'Failed to create master task!'}
    }

    revalidatePath("/master/tasks-master");
    redirect("/master/tasks-master");
    
}

export const updateMasterTaskAction = async (secure_id: string, prevState: any ,formData: FormData) => {
    const validatedFields = TaskSchema.safeParse(Object.fromEntries(formData.entries()));

    if(!validatedFields.success){
        return {
            Error: validatedFields.error.flatten().fieldErrors
        }
    }

    try {
        const { email } = await getUserData();
        await supabase.from('m_tasks').update({
            task: validatedFields.data.task,
            type: validatedFields.data.type,
            order: validatedFields.data.order,
            note: validatedFields.data.note,
            updated_at: ((new Date()).toISOString()),
            updated_by: email,
        })
        .eq('secure_id',secure_id);
    } catch (error) {
        return {message: 'Failed to udpate master task!'}
    }

    revalidatePath("/master/tasks-master");
    redirect("/master/tasks-master");
    
}

export const deleteMasterTaskAction = async (secure_id: string) => {
    try {
        const { email } = await getUserData();
        // await supabase.from('m_tasks')
        // .delete()
        // .match({ 'secure_id': secure_id });

        await supabase.from('m_tasks').update({          
            status: 'D',  
            deleted_at: (new Date()),
            updated_at: (new Date()),
            updated_by: email,
        })
        .eq('secure_id',secure_id);
    } catch (error) {
        return {message: 'Failed to delete master task!'}
    }

    revalidatePath("/master/tasks-master");
    
}
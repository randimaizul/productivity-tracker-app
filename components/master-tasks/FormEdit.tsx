"use client";

import Link from 'next/link'
import React from 'react'
import { useFormState } from 'react-dom'
import Button from '../global/Button'
import { updateMasterTaskAction } from '@/actions/master-tasks/masterTaskAction'
import { iMasterTasks } from '@/utils/supabase';

const FormEdit = ({ task }: {task: iMasterTasks}) => {
	
	const updateMasterTaskWithId = updateMasterTaskAction.bind(null, task.secure_id)
    const [state, formAction] = useFormState(updateMasterTaskWithId, null)

    return (
      	<div>
			<form action={formAction}>
				<div className='flex flex-col gap-4'>
					<label className="input input-bordered flex items-center gap-2">
						Task
						<input type="text"  
                            name='task' 
                            className="grow" 
                            placeholder="Shalat Berjamaah" 
                            required 
                            defaultValue={task.task}
                        />
					</label>
					<div id="task-error" aria-live="polite" aria-atomic="true">
						<p className='mt-2 text-sm text-red-500'>{ state?.Error?.task }</p>
					</div>

					<label className="input input-bordered flex items-center gap-2">
						Type
						<input type="text" 
                            name='type' 
                            className="grow" 
                            placeholder="daily" 
                            required
                            defaultValue={task.type} />
					</label>
					<div id="type-error" aria-live="polite" aria-atomic="true">
						<p className='mt-2 text-sm text-red-500'>{ state?.Error?.type }</p>
					</div>

					<label className="input input-bordered flex items-center gap-2">
						Order
						<input type="number"  
                            name='order' 
                            className="grow" 
                            placeholder="1"
                            defaultValue={task.order} />
					</label>
					<div id="order-error" aria-live="polite" aria-atomic="true">
						<p className='mt-2 text-sm text-red-500'>{ state?.Error?.order }</p>
					</div>

					<textarea name='note' className="textarea textarea-bordered" placeholder="Note">
                        {task.note}
                    </textarea>

					<div id="message-error" aria-live="polite" aria-atomic="true">
						<p className='mt-2 text-sm text-red-500'>{ state?.message }</p>
					</div>

					<div className='flex justify-end gap-2'>
						<Link href="/master/tasks-master" className="btn btn-outline">Back</Link>
						<Button type="update" />
					</div>
				</div>
			</form>
		</div>
    )

}

export default FormEdit
"use client"

import { createMasterTaskAction } from '@/actions/master-tasks/masterTaskAction'
import Link from 'next/link'
import React from 'react'
import { useFormState } from 'react-dom';
import Button from '../global/Button';

const FormCreate = (): React.ReactElement => {
	const [state, formAction] = useFormState(createMasterTaskAction, null)

    return (
      	<div>
			<form action={formAction}>
				<div className='flex flex-col gap-4'>
					<label className="input input-bordered flex items-center gap-2">
						Task
						<input type="text" name='task' className="grow" placeholder="Shalat Berjamaah" required />
					</label>
					<div id="task-error" aria-live="polite" aria-atomic="true">
						<p className='mt-2 text-sm text-red-500'>{ state?.Error?.task }</p>
					</div>

					<label className="input input-bordered flex items-center gap-2">
						Type
						<input type="text"  name='type' className="grow" placeholder="daily" required />
					</label>
					<div id="type-error" aria-live="polite" aria-atomic="true">
						<p className='mt-2 text-sm text-red-500'>{ state?.Error?.type }</p>
					</div>

					<label className="input input-bordered flex items-center gap-2">
						Order
						<input type="number"  name='order' className="grow" placeholder="1" />
					</label>
					<div id="order-error" aria-live="polite" aria-atomic="true">
						<p className='mt-2 text-sm text-red-500'>{ state?.Error?.order }</p>
					</div>

					<textarea name='note' className="textarea textarea-bordered" placeholder="Note"></textarea>

					<div id="message-error" aria-live="polite" aria-atomic="true">
						<p className='mt-2 text-sm text-red-500'>{ state?.message }</p>
					</div>

					<div className='flex justify-end gap-2'>
						<Link href="/master/tasks-master" className="btn btn-outline">Back</Link>
						<Button type="save" />
					</div>
				</div>
			</form>
		</div>
    )
}

export default FormCreate
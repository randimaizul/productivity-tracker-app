"use client";

import Link from 'next/link'
import React from 'react'
import { IoAddSharp, IoPencil, IoTrashBinOutline } from 'react-icons/io5';
import clsx from "clsx";
import { useFormStatus } from 'react-dom';
import { deleteMasterTaskAction } from '@/actions/master-tasks/masterTaskAction';

type ParamsProps = {
    path?: any;
    name?: string;
    type: string;
    secure_id: string;
    module?: string;
}
const Button = ({ path, name, type, secure_id, module } : ParamsProps): React.ReactElement => {

    const { pending } = useFormStatus();
    const className = clsx(
        "btn btn-primary btn-wide",
        {
            "opacity-50 cursor-progress": pending,
        }
    );

    // const deleteWithId = null;
    // if(type === 'delete') {
    //     if(module === 'm_tasks') {
    //         const deleteWithId = deleteMasterTaskAction.bind(null, secure_id);
    //     } else {
    //         const deleteWithId = deleteMasterTaskAction.bind(null, secure_id);
    //     }
    // } else {
    //     const deleteWithId = deleteMasterTaskAction.bind(null, secure_id);
    // }

    const deleteWithId = deleteMasterTaskAction.bind(null, secure_id);
    

    return (
        (type === 'create') ?
            // <Link href={path} className="inline-flex items-center space-x-1 text-white bg-blue-700 hover:bg-blue-800 px-5 py-[9px] rounded-sm text-sm">
            <Link href={path} className="inline-flex items-center space-x-1 btn btn-primary px-5">
                <IoAddSharp size={20} />
                {name}
            </Link>
        :
        (type === 'edit') ?
            <Link href={path} className="btn btn-sm btn-outline btn-square btn-primary">
                <IoPencil size={20} />
            </Link>
        :
        (type === 'delete') ?
            <form action={deleteWithId}>
                <button className="btn btn-sm btn-outline btn-square btn-error">
                    <IoTrashBinOutline size={20} />
                </button>
            </form>
        :
        (type === 'save') ?
            <button 
                type='submit'
                className={className}
                disabled={pending}
            >
                <span>{pending ? "Saving..." : "Save"}</span>
            </button>
        : 
        (type === 'update') ?
            <button 
                type='submit'
                className={className}
                disabled={pending}
            >
                <span>{pending ? "Updating..." : "Update"}</span>
            </button>
        : 
        <div></div>
    
    )
}

export default Button
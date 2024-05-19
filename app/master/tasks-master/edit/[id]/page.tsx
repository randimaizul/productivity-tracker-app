import Wrapper from '@/components/global/Wrapper'
import FormEdit from '@/components/master-tasks/FormEdit'
import React from 'react'
import { getMasterTasksById } from '@/lib/data';
import { notFound } from 'next/navigation';

type ParamProps = {
    params: {
        id: string,
    }
}

const page = async ({ params }: ParamProps) => {
    const task = await getMasterTasksById(params.id);

    if(!task){
        notFound();
    }

    return (
        <Wrapper title="Update Tasks Master">
            <div className='max-w-md mx-auto mt-5'>
                <FormEdit task={task} />
            </div>
        </Wrapper>
    )
}

export default page
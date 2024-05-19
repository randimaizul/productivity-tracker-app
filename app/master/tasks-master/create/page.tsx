import Wrapper from '@/components/global/Wrapper'
import FormCreate from '@/components/master-tasks/FormCreate'
import React from 'react'

const page = () => {
    return (
        <Wrapper title="Add New Tasks Master">
            <div className='max-w-md mx-auto mt-5'>
                <FormCreate />
            </div>
        </Wrapper>
    )
}

export default page
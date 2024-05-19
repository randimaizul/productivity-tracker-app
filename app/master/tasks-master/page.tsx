import React from 'react'
import Wrapper from '@/components/global/Wrapper'
import TasksMasterTable from '@/components/master-tasks/TasksMasterTable'
import Search from '@/components/global/table/Search'
import Button from '@/components/global/Button'
import { getMasterTasksPages } from '@/lib/data';
// import { Pagination } from '@/components/global/table/Pagination';
import Pagination from '@/components/global/table/Pagination';
import { Suspense } from 'react'
import { Skeleton }  from '@/components/master-tasks/Skeleton';

type ParamProps = {
    searchParams : {
        query?: string,
        page?: string
    }
}

const page = async ({ searchParams }: ParamProps) => {

    const query = searchParams?.query || "";
    const currentPage = Number(searchParams?.page) || 1;

    const totalPages = await getMasterTasksPages(query);

    return (
        <Wrapper title="Tasks Master">
            <div>
                <div className='flex items-center justify-between gap-1 mb-5'>
                    <Search />   
                    <Button path="/master/tasks-master/create" name="Create" type='create' secure_id='' /> 
                </div>
                <Suspense key={query + currentPage} fallback={ <Skeleton /> }>
                    <TasksMasterTable query={query} currentPage={currentPage} />
                </Suspense>
                <div className='flex justify-center mt-4'>
                    <Pagination totalPages={totalPages} />
                </div>
            </div>
        </Wrapper>
    )
}

export default page
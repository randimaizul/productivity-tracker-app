import { getMasterTasks } from '@/lib/data'
import { formatDate } from '@/utils/global';
import React from 'react'
import Button from '../global/Button';

type ParamProps = {
    query: string,
    currentPage: number
}

const TasksMasterTable = async({ query, currentPage }: ParamProps): Promise<React.ReactElement> => {
    const tasks = await getMasterTasks(query, currentPage);
    
    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                <thead>
                <tr>
                    <th>No</th> 
                    <th>Task</th> 
                    <th>Type</th> 
                    <th>Order</th> 
                    <th>Note</th> 
                    <th>Created</th> 
                    <th className='text-center'>#</th>
                </tr>
                </thead> 
                <tbody>
                    {
                        (tasks?.length) ? (
                            tasks?.map((task,index) => (
                                <tr key={task.id}>
                                    <td>{index+1}</td> 
                                    <td>{task.task}</td> 
                                    <td>{task.type}</td> 
                                    <td>{task.order}</td> 
                                    <td>{task.note}</td> 
                                    <td>{ formatDate(task.created_at.toString()) }</td> 
                                    <td className='flex justify-center gap-1 py-3'>
                                        <Button path={`/master/tasks-master/edit/${task.secure_id}`} type='edit' />
                                        <Button type='delete' secure_id={task.secure_id} module="m_tasks" />
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={7}>Empty data</td>
                            </tr>
                        )
                    }
                    
                </tbody> 
            </table>
        </div>
    )
}

export default TasksMasterTable
export const Skeleton = () => {
    return (
        <div className="overflow-x-auto">
            <table className="table">
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
                <tbody className='aimated-pulse'>
                    <tr className='bg-white border-b border-gray-50'>
                        <td>
                            <div className='h-4 w-4 rounded bg-gray-100'></div>
                        </td> 
                        <td>
                            <div className='h-4 w-32 rounded bg-gray-100'></div>    
                        </td> 
                        <td>
                            <div className='h-4 w-20 rounded bg-gray-100'></div>    
                        </td> 
                        <td>
                            <div className='h-4 w-32 rounded bg-gray-100'></div>    
                        </td> 
                        <td>
                            <div className='h-4 w-32 rounded bg-gray-100'></div>    
                        </td> 
                        <td>
                            <div className='h-4 w-32 rounded bg-gray-100'></div>    
                        </td> 
                        <td className='flex justify-center gap-1 py-3'>
                            <div className='h-7 w-7 rounded-sm bg-gray-100'></div>
                            <div className='h-7 w-7 rounded-sm bg-gray-100'></div>
                        </td>
                    </tr>
                    <tr className='bg-white border-b border-gray-50'>
                        <td>
                            <div className='h-4 w-4 rounded bg-gray-100'></div>
                        </td> 
                        <td>
                            <div className='h-4 w-32 rounded bg-gray-100'></div>    
                        </td> 
                        <td>
                            <div className='h-4 w-20 rounded bg-gray-100'></div>    
                        </td> 
                        <td>
                            <div className='h-4 w-32 rounded bg-gray-100'></div>    
                        </td> 
                        <td>
                            <div className='h-4 w-32 rounded bg-gray-100'></div>    
                        </td> 
                        <td>
                            <div className='h-4 w-32 rounded bg-gray-100'></div>    
                        </td> 
                        <td className='flex justify-center gap-1 py-3'>
                            <div className='h-7 w-7 rounded-sm bg-gray-100'></div>
                            <div className='h-7 w-7 rounded-sm bg-gray-100'></div>
                        </td>
                    </tr>
                    <tr className='bg-white border-b border-gray-50'>
                        <td>
                            <div className='h-4 w-4 rounded bg-gray-100'></div>
                        </td> 
                        <td>
                            <div className='h-4 w-32 rounded bg-gray-100'></div>    
                        </td> 
                        <td>
                            <div className='h-4 w-20 rounded bg-gray-100'></div>    
                        </td> 
                        <td>
                            <div className='h-4 w-32 rounded bg-gray-100'></div>    
                        </td> 
                        <td>
                            <div className='h-4 w-32 rounded bg-gray-100'></div>    
                        </td> 
                        <td>
                            <div className='h-4 w-32 rounded bg-gray-100'></div>    
                        </td> 
                        <td className='flex justify-center gap-1 py-3'>
                            <div className='h-7 w-7 rounded-sm bg-gray-100'></div>
                            <div className='h-7 w-7 rounded-sm bg-gray-100'></div>
                        </td>
                    </tr>
                </tbody> 
            </table>
        </div>
    )
}
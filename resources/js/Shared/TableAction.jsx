import React from 'react'

const TableAction = ({children})=>{
    return (
        <td className='border border-[#eee] py-5 px-4 dark:border-strokedark'>
            <div className="flex items-center gap-4 justify-end">
                {children}
            </div>
        </td>
    );
}

export default TableAction

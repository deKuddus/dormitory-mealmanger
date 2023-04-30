import React from 'react'


const TableData = ({value, className='text-black dark:text-white',colSpan=0}) => {
    return (
        <td className='border border-[#eee] p-4 dark:border-strokedark' colSpan={colSpan}>
            <p className={className}>
                {value}
            </p>
        </td>
    );
}

export default TableData;

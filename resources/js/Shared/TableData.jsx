import React from 'react'


const TableData = ({value, className='text-black dark:text-white',colSpan=0}) => {
    return (
        <td className='border border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11' colSpan={colSpan}>
            <p className={className}>
                {value}
            </p>
        </td>
    );
}

export default TableData;

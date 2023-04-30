import React from 'react'


const TableHeader = ({rows = []}) => {
    return (
        <thead>
        <tr className='bg-gray-2 text-left dark:bg-meta-4'>
            {rows.map((row,key) => (
                <th key={key} className='border border-[#eee] p-4 font-medium text-black dark:text-white'>
                    {row}
                </th>
            ))}
        </tr>
        </thead>
    );
}

export default TableHeader;

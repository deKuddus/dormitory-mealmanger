import React from 'react'


const TableHeader = ({rows = []}) => {
    return (
        <thead>
        <tr className='bg-gray-2 text-left dark:bg-meta-4'>
            {rows.map((row,key) => (
                <th key={key} className='border border-[#eee] py-4 px-4 font-medium text-black dark:text-white xl:pl-11'>
                    {row}
                </th>
            ))}
        </tr>
        </thead>
    );
}

export default TableHeader;

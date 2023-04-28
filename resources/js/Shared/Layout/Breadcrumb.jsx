import React from 'react';
import { Link } from '@inertiajs/react'

const Breadcrumb = ({pageName,link,action}) => {
    return (
        <div className='mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
            <nav>
                <ol className='flex items-center gap-2'>
                    <li className='text-title-md2 font-semibold text-black dark:text-white'>
                        <Link href={link}>{pageName}</Link>
                    </li>
                    {action && <li className='text-primary'>/ {action}</li>}
                </ol>
            </nav>
        </div>
    )
}

export default Breadcrumb;

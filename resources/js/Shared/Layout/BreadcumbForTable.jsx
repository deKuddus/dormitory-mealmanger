import React from 'react';
import {Link} from '@inertiajs/react';

const BreadcrumbForTable = (
    {
        name, link, text, isShowButton, type, clickHandler
    }
) => {
    return (
        <div className='mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
            <h2 className='text-title-md2 font-semibold text-black dark:text-white'>
                {name}
            </h2>

            {isShowButton && (
                <>
                    {type === 'link' ? (
                        <Link href={link}
                              className="rounded-md inline-flex items-center justify-center bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10">
                            {text}
                        </Link>
                    ) : (
                        <button type="button" onClick={clickHandler}
                                className="rounded-md inline-flex items-center justify-center bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10">
                            {text}
                        </button>
                    )}
                </>
            )}
        </div>
    )
}

export default BreadcrumbForTable;

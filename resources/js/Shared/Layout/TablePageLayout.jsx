import React from "react";
import Pagination from "@/Shared/Pagination";
import BreadcrumbForTable from "@/Shared/Layout/BreadcumbForTable";

const TablePageLayout = (
    {
        children,
        pagination_links = null,
        breadcumb_link = '',
        breadcumb_name = '',
        breadcumb_action = '',
        isShowButton = false,
        additionalComponent = null,
        type = 'link',
        clickHandler = () => {
        }
    }
) => {
    return (
        <>
            <BreadcrumbForTable name={breadcumb_name} link={breadcumb_link} text={breadcumb_action}
                                isShowButton={isShowButton} type={type} clickHandler={clickHandler}/>
            <div
                className='rounded-lg border border-stroke bg-white p-5 shadow-default dark:border-strokedark dark:bg-boxdark'>
                {additionalComponent}
                <div className='max-w-full overflow-x-auto'>
                    <table className='w-full table-auto'>
                        {children}
                    </table>
                </div>

            </div>
            {pagination_links && <Pagination links={pagination_links}/>}
        </>
    );
}

export default TablePageLayout;

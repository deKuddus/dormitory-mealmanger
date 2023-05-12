import React from "react";
import {Link, usePage} from "@inertiajs/react";
import Layout from "@/Shared/Layout/AuthenticatedLayout";

const Index = () => {
    const {usersAndMeal, daysInMonth} = usePage().props;


    return (
        <>
            <div className='mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
                <h2 className='text-title-md2 font-semibold text-black dark:text-white'>
                    Meal Calendar View
                </h2>
            </div>
            <div
                className='rounded-lg border border-stroke bg-white p-5 shadow-default dark:border-strokedark dark:bg-boxdark'>
                <div className='max-w-full overflow-x-auto'>
                    <table className='w-full table-auto divide-y divide-gray-200'>
                        <thead>
                        <tr className='bg-gray-2 text-left dark:bg-meta-4'>
                            <th className='sticky left-0 z-1 bg-gray-2 border border-[#eee] p-4 font-medium text-black dark:text-white'>
                                Member
                            </th>
                            {Array(31).fill(0).map((v, key) => (
                                <th key={key}
                                    className='w-24 border border-[#eee] p-4 font-medium text-black text-center dark:text-white'>
                                    <p className="w-full border-b border-[#eee]">{key + 1}</p>

                                    <table className="w-full table-auto">
                                        <thead>
                                        <tr className='bg-gray-2 text-center dark:bg-meta-4'>
                                            <th className="text-sm font-normal border-r-2 p-2 border-[#eee]">Lunch</th>
                                            <th className="text-sm font-normal p-2">Dinner</th>
                                        </tr>
                                        </thead>
                                    </table>
                                </th>
                            ))}
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                        {usersAndMeal && usersAndMeal.map((row, index) => {
                            return (
                                <tr
                                    key={index}
                                    className="text-center"
                                >
                                    <td className='sticky left-0 z-1 bg-gray-2 border border-[#eee] p-4 dark:border-strokedark'>
                                        <Link href={route('meals.show',row.id)}>
                                            {row.full_name}
                                        </Link>
                                    </td>
                                    {row.meals.map((meal, meal_index) => (
                                        <td key={meal_index}
                                            className='border border-[#eee] text-center p-4 dark:border-strokedark'>
                                            <table className="w-full table-auto">
                                                <tbody>
                                                <tr>
                                                    <td className=" p-4 border-r border-[#eee] dark:border-strokedark">{meal.lunch}</td>
                                                    <td className=" p-4 dark:border-strokedark">{meal.dinner}</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    ))}
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    );
};

Index.layout = (page) => <Layout title="Meals" children={page}/>;

export default Index;

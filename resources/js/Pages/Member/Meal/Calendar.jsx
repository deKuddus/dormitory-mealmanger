import React from "react";
import {Link, usePage} from "@inertiajs/react";
import Layout from "@/Shared/Layout/AuthenticatedLayout";
import moment from "moment";

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
                        <tr className=' text-left dark:bg-meta-4'>
                            <th className='sticky left-0 z-1 bg-[#f2f3fa] dark:bg-meta-4 border border-[#eee] font-medium p-0'>
                            <span className='w-full h-20 ring-1 ring-[#eee] p-4 flex items-center justify-center'>
                                Member
                            </span>
                            </th>
                            {Array(parseInt(daysInMonth, 10)).fill(0).map((v, key) => {
                                    let isToday = moment().date() === key + 1;
                                    return (
                                        <th key={key}
                                            className={`w-24 border border-[#eee] font-medium  text-center ${isToday ? 'bg-green-600' : ''}`}>
                                            <p className={`w-full border-b border-[#eee] py-2 ${isToday ? 'text-white font-bold' : ''}`}>{key + 1}</p>

                                            <table className="w-full table-auto py-2">
                                                <thead>
                                                <tr className='dark:bg-meta-4 text-center'>
                                                    <th className={`text-sm border-r-2 p-2 border-[#eee] ${isToday ? 'text-white font-bold' : 'font-normal'}`}>L</th>
                                                    <th className={`text-sm  p-2 ${isToday ? 'text-white font-bold' : 'font-normal'}`}>D</th>
                                                </tr>
                                                </thead>
                                            </table>
                                        </th>
                                    )
                                }
                            )}
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                        {usersAndMeal && usersAndMeal.map((row, index) => {
                            return (
                                <tr
                                    key={index}
                                    className="text-center"
                                >
                                    <td className='sticky left-0 z-1 bg-[#f2f3fa] dark:bg-meta-4 border border-[#eee] p-0'>
                                        <span
                                            className='w-full h-16 ring-1 ring-[#eee] px-2 flex items-center justify-center'>
                                            <Link href={route('meals.show', row.id)}>
                                                {row.display_name}
                                            </Link>
                                        </span>
                                    </td>
                                    {row.meals.map((meal, meal_index) => {
                                            let isToday = moment().date() === meal_index + 1;
                                            return (
                                                <td key={meal_index}
                                                    className={`border border-[#eee] text-center p-2 dark:border-strokedark ${isToday ? 'bg-green-600' : ''}`}>
                                                    <table className="w-full table-auto">
                                                        <tbody>
                                                        <tr>
                                                            <td className={`p-2 border-r border-[#eee] dark:border-strokedark ${isToday ? 'text-white font-bold' : ''}`}>{meal.lunch}</td>
                                                            <td className={`p-2 dark:border-strokedark ${isToday ? 'text-white font-bold' : ''}`}>{meal.dinner}</td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            )
                                        }
                                    )}
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

import React, {Fragment, useRef} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import TextInput from "@/Shared/TextInput";
import moment from "moment";

export default function MealEditModal({mealData, setMealData, handleConfirm, open, setOpen}) {

    const handleModalClose = () => {
        setMealData({
            break_fast: 0,
            lunch: 0,
            dinner: 0
        });
        setOpen(false);
    }

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={handleModalClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel
                                className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="sm:items-start">
                                        <Dialog.Title as="h3"
                                                      className="text-lg font-medium leading-6 text-gray-900 border-b mb-4 ">
                                            Update Meal of <span className="text-xxl font-bold">{mealData.user}</span> for {moment(mealData.created_at).format('Do MMM YYYY')}
                                        </Dialog.Title>
                                        <div className="grid grid-cols-1 items-end gap-y-7">


                                            <TextInput
                                                className="w-full pb-2"
                                                label="Breakfast"
                                                type="number"
                                                name="breakfast"
                                                placeholder="Breakfast"
                                                value={mealData.break_fast}
                                                onChange={(e) => {
                                                    if(e.target.value >= 0){
                                                        setMealData((prevState) => ({
                                                            ...prevState,
                                                            break_fast: parseInt(e.target.value,10)
                                                        }))
                                                    }else{
                                                        setMealData((prevState) => ({
                                                            ...prevState,
                                                            lunch: 0
                                                        }))
                                                    }
                                                }}
                                            />

                                            <TextInput
                                                className="w-full pb-2"
                                                label="Lunch"
                                                type="number"
                                                name="lunch"
                                                placeholder="Lunch"
                                                value={mealData.lunch}
                                                onChange={(e) => {
                                                    if(e.target.value >= 0){
                                                        setMealData((prevState) => ({
                                                            ...prevState,
                                                            lunch: parseInt(e.target.value,10)
                                                        }))
                                                    }else{
                                                        setMealData((prevState) => ({
                                                            ...prevState,
                                                            lunch: 0
                                                        }))
                                                    }
                                                }}
                                            />

                                            <TextInput
                                                className="w-full pb-2"
                                                label="Dinner"
                                                type="number"
                                                name="dinner"
                                                placeholder="Dinner"
                                                value={mealData.dinner}
                                                onChange={(e) => {
                                                    if(e.target.value >= 0){
                                                        setMealData((prevState) => ({
                                                            ...prevState,
                                                            dinner: parseInt(e.target.value,10)
                                                        }))
                                                    }else{
                                                        setMealData((prevState) => ({
                                                            ...prevState,
                                                            dinner: 0
                                                        }))
                                                    }
                                                }}
                                            />

                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                                        onClick={handleConfirm}
                                    >
                                        Submit
                                    </button>
                                    <button
                                        type="button"
                                        className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                        onClick={handleModalClose}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

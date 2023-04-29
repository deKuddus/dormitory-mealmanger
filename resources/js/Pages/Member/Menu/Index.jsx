import React, { useState } from "react";
import { router, usePage } from "@inertiajs/react";
import MemberLayout from "@/Shared/Layout/AuthenticatedLayout";
import Icon from "@/Shared/Icon";
import moment from "moment/moment";
import Modal from "@/Shared/Modal";
import TablePageLayout from "@/Shared/Layout/TablePageLayout";
import TableHeader from "@/Shared/TableHeader";
import TableData from "@/Shared/TableData";
import TableAction from "@/Shared/TableAction";

const Index = () => {
    const tableHeading = ['No', 'Day', 'Breakfast', 'Lunch', 'Dinner', 'Action'];
    const { menus } = usePage().props;
    const [open, setOpen] = useState(false);
    const initialData = {
        break_fast: "",
        lunch: "",
        dinner: "",
        id: "",
    };
    const [menuData, setMeuData] = useState(initialData);

    const handleMenuUpdate = (break_fast, lunch, dinner, id) => {
        setMeuData({ ...menuData, break_fast, lunch, dinner, id });
        setOpen(true);
    };

    const handleSubmitConfirm = () => {
        setOpen(false);
        router.post(route("user.menu.update"), {
            ...menuData,
        });
    };

    const handleModalClose = () => {
        setMeuData(initialData);
        setOpen(false);
    };

    const weekDay = {
        6: "Saturday",
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
    };

    return (
        <>
            {open && (
                <Modal
                    handleModalClose={handleModalClose}
                    setMenuData={setMeuData}
                    menuData={menuData}
                    handleConfirm={handleSubmitConfirm}
                    open={open}
                    setOpen={setOpen}
                />
            )}

            <TablePageLayout
                breadcumb_name={'Menus'}
            >
                <TableHeader rows={tableHeading}/>
                <tbody>
                {menus && menus.length ? (
                    menus.map(
                        (
                            {
                                id,
                                break_fast,
                                lunch,
                                dinner,
                                menu_date,
                            },
                            key
                        ) => {
                            if( weekDay[moment().day()] === menu_date){
                                return (
                                    <tr
                                        key={id}
                                        className="bg-success font-bold text-xl shadow-2xl"
                                    >
                                        <TableData value={key + 1} className="text-white "/>
                                        <TableData value={menu_date} className="text-white "/>
                                        <TableData value={break_fast || 'N/A'} className="text-white"/>
                                        <TableData value={lunch || 'N/A'} className="text-white "/>
                                        <TableData value={dinner || 'N/A'} className="text-white"/>

                                        <TableAction>
                                            <button
                                                onClick={() =>
                                                    handleMenuUpdate(
                                                        break_fast,
                                                        lunch,
                                                        dinner,
                                                        id
                                                    )
                                                }
                                                className="inline-flex items-center justify-center gap-0.5 text-white"
                                            >
                                                <Icon
                                                    name="FaEdit"
                                                    className="w-6 h-4 text-gray-400 fill-current"
                                                />
                                            </button>
                                        </TableAction>
                                    </tr>
                                );
                            }
                            return (
                                <tr
                                    key={id}
                                >
                                    <TableData value={key + 1}/>
                                    <TableData value={menu_date}/>
                                    <TableData value={break_fast || 'N/A'}/>
                                    <TableData value={lunch || 'N/A'}/>
                                    <TableData value={dinner || 'N/A'}/>

                                    <TableAction>
                                        <button
                                            onClick={() =>
                                                handleMenuUpdate(
                                                    break_fast,
                                                    lunch,
                                                    dinner,
                                                    id
                                                )
                                            }
                                            className="inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline"
                                        >
                                            <Icon
                                                name="FaEdit"
                                                className="w-6 h-4 text-gray-400 fill-current"
                                            />
                                        </button>
                                    </TableAction>
                                </tr>
                            );
                        }
                    )
                ) : (
                    <tr>
                        <TableData value={'No Data Found'} colSpan={tableHeading.length}
                                   className="text-center text-black dark:text-white"/>
                    </tr>
                )}
                </tbody>
            </TablePageLayout>
        </>
    );
};

Index.layout = (page) => <MemberLayout title="Menus" children={page} />;

export default Index;

import React, {useState} from "react";
import { router, usePage} from "@inertiajs/react";
import MemberLayout from "@/Shared/Member/MemberLayout";
import Icon from "@/Shared/Icon";
import MenuEditModal from "@/Pages/Member/Menu/Edit";
import moment from "moment/moment";

const Index = () => {
    const {menus} = usePage().props;
    const [open, setOpen] = useState(false);
    const initialData = {
        break_fast: '',
        lunch: '',
        dinner: '',
        id: ''
    };
    const [menuData, setMeuData] = useState(initialData)

    const handleMenuUpdate = (break_fast, lunch, dinner, id) => {
        setMeuData({...menuData, break_fast, lunch, dinner, id})
        setOpen(true);
    }

    const handleSubmitConfirm = () => {
        setOpen(false);
        router.post(route('user.menu.update'), {
            ...menuData
        })
    }

    const handleModalClose = () =>{
        setMeuData(initialData);
        setOpen(false);
    }

    const weekDay = {
        6: 'Saturday',
        0: 'Sunday',
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
    };

    return (
        <div>
            {open && <MenuEditModal handleModalClose={handleModalClose} setMenuData={setMeuData} menuData={menuData} handleConfirm={handleSubmitConfirm}
                                    open={open} setOpen={setOpen}/>}
            <h1 className="mb-8 text-3xl font-bold">Menus</h1>
            <div className="overflow-x-auto bg-white rounded shadow p-3">
                <table className="w-full whitespace-wrap">
                    <thead>
                    <tr className="font-bold text-left">
                        <th className="px-6 pt-5 pb-4">No</th>
                        <th className="px-6 pt-5 pb-4">Day</th>
                        <th className="px-6 pt-5 pb-4">Breakfast</th>
                        <th className="px-6 pt-5 pb-4">Lunch</th>
                        <th className="px-6 pt-5 pb-4">Dinner</th>
                        <th className="px-6 pt-5 pb-4">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {menus && menus.map(
                        ({id, break_fast, lunch, dinner, menu_date}, key) => {
                            return (
                                <tr
                                    key={id}
                                    className={`${weekDay[moment().day()] === menu_date ? 'bg-green-500 text-white font-bold text-xl shadow-2xl' : 'hover:bg-gray-100 opacity-40'}`}
                                >
                                    <td className="border">
                                        <p
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            {key + 1}
                                        </p>
                                    </td>
                                    <td className="border">
                                        <p
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            {menu_date}
                                        </p>
                                    </td>
                                    <td className="border">
                                        <p
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            {break_fast || 'N/A'}
                                        </p>
                                    </td>
                                    <td className="border">
                                        <p
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            {lunch || 'N/A'}
                                        </p>
                                    </td>
                                    <td className="border">
                                        <p
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            {dinner || 'N/A'}
                                        </p>
                                    </td>
                                    <td className="w-px border p-3 whitespace-nowrap">
                                        <div className="flex items-center gap-4 justify-center">
                                            <button
                                                onClick={() => handleMenuUpdate(break_fast, lunch, dinner, id)}
                                                className="inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline"
                                            >
                                                <Icon
                                                    name="FaEdit"
                                                    className="w-6 h-4 text-gray-400 fill-current"
                                                />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        }
                    )}
                    {!menus || menus.length === 0 && (
                        <tr>
                            <td className="px-6 py-4 border" colSpan="6">
                                No Menu found.
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

Index.layout = (page) => <MemberLayout title="Menu" children={page}/>;

export default Index;

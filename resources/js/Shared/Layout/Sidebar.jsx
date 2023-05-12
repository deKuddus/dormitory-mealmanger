import React, {useEffect, useRef, useState} from 'react'
import {Link, usePage} from "@inertiajs/react";
import SidebarLinkGroup from './SidebarLinkGroup'
import Logo from '../../../../public/Logo.svg'
import Icon from "@/Shared/Icon";

const Sidebar = ({sidebarOpen, setSidebarOpen}) => {
    const {url} = usePage();
    const {routePrefix} = usePage().props;

    const routes = routePrefix ?
        [
            {
                name: "Dashboard",
                link: route("dashboard"),
                uri_root: "dashboard",
                icon: "FaRegClock",
                canShow: "access::dashboard-show",
                has_child: false
            },
            {
                name: "Members",
                link: route("user.index"),
                uri_root: "member",
                icon: "FaUsers",
                canShow: "access::user-show",
                has_child: false
            },
            {
                name: "Meals",
                link: route("meals.index"),
                uri_root: "meal",
                icon: "FaHamburger",
                canShow: "access::meal-show",
                has_child: false
            },
            {
                name: "Deposit",
                link: route("deposit.index"),
                uri_root: "deposit",
                icon: "FaMoneyBillAlt",
                canShow: "access::deposit-show",
                has_child: false
            },
            {
                name: "Bazar",
                link: route("bazar.index"),
                uri_root: "bazar",
                icon: "FaShoppingCart",
                canShow: "access::bazar-show",
                has_child: false
            },
            {
                name: "Additional",
                link: route("additional.index"),
                uri_root: "additional",
                icon: "FaRegMoneyBillAlt",
                canShow: "access::additional-show",
                has_child: false
            },
            {
                name: "Menu",
                link: route("menu.index"),
                uri_root: "menu",
                icon: "FaRegListAlt",
                has_child: false
            },
            {
                name: "Bazar Schedule",
                link: route("bazar-schedule.index"),
                uri_root: "bazar-schedule",
                icon: "FaPeopleCarry",
                canShow: "access::bazarschedule-show",
                has_child: false
            },
            {
                name: 'Report',
                uri: 'report',
                has_child: true,
                icon: 'FaRegChartBar',
                children: [
                    {
                        name: "Expenses",
                        link: route("expense.index"),
                        uri_root: "expense",
                        icon: "FaMoneyBillWave",
                        canShow: "access::expense-show",
                        has_child: false
                    },

                    {
                        name: "Report",
                        link: route("report.index"),
                        uri_root: "reports",
                        icon: "FaRegChartBar",
                        canShow: "access::report-show",
                        has_child: false
                    },
                    {
                        name: "Closings",
                        link: route("report.closed.index"),
                        uri_root: "closings",
                        icon: "FaCalculator",
                        canShow: "access::closing-show",
                        has_child: false
                    },
                ]
            },
            {
                name: 'Important',
                uri: 'important',
                has_child: true,
                icon: 'FaHome',
                children: [
                    {
                        name: "Issues",
                        link: route("issue.index"),
                        uri_root: "issue",
                        icon: "FaPoll",
                        canShow: "access::issue-show",
                        has_child: false
                    },
                    {
                        name: "Notices",
                        link: route("notice.index"),
                        uri_root: "notice",
                        icon: "FaWpforms",
                        canShow: "access::notice-show",
                        has_child: false
                    },
                    {
                        name: "Rules",
                        link: route("rule.index"),
                        uri_root: "rule",
                        icon: "FaSignal",
                        canShow: "access::rule-show",
                        has_child: false
                    },
                ]
            },
            {
                name: "Dormitory",
                uri_root: "dormitory",
                has_child: true,
                icon: 'FaHome',
                children: [
                    {
                        name: "Dormitory",
                        link: route("dormitory.index"),
                        uri_root: "dormitory",
                        icon: "FaHome",
                        canShow: "access::dormitory-show",
                        has_child: false
                    },
                    {
                        name: "Room",
                        link: route("room.index"),
                        uri_root: "room",
                        icon: "FaBorderAll",
                        canShow: "access::room-show",
                        has_child: false
                    },
                    {
                        name: "Seat",
                        link: route("seat.index"),
                        uri_root: "seat",
                        icon: "FaBed",
                        canShow: "access::seat-show",
                        has_child: false
                    },
                    {
                        name: "Asset",
                        link: route("asset.index"),
                        uri_root: "asset",
                        icon: "FaNetworkWired",
                        canShow: "access::asset-show",
                        has_child: false
                    },
                    {
                        name: "Chef",
                        link: route("chef.index"),
                        uri_root: "chef",
                        icon: "FaDiagnoses",
                        canShow: "access::chef-show",
                        has_child: false
                    }
                ]
            },
            {
                name: "Settings",
                uri_root: "settings",
                has_child: true,
                icon: 'FaTools',
                children: [
                    {
                        name: "Token",
                        link: route("tokens.index"),
                        uri_root: "tokens",
                        icon: "FaCoins",
                        canShow: "access::token-show",
                    },
                    {
                        name: "Roles",
                        link: route("role.index"),
                        uri_root: "role",
                        icon: "FaFingerprint",
                        canShow: "access::role-show",
                    },
                    {
                        name: "Permissions",
                        link: route("permissions.index"),
                        uri_root: "permissions",
                        icon: "FaGlasses",
                        canShow: "access::permission-show",
                    },
                ]
            }
        ]
        :
        [
            {
                name: "Dashboard",
                link: route("user.dashboard"),
                uri_root: "dashboard",
                icon: "FaRegClock",
            },
            {
                name: "Deposits",
                link: route("user.deposits.index"),
                uri_root: "deposit",
                icon: "FaMoneyBillAlt",
            },
            {
                name: "Bazar",
                link: route("user.bazar.index"),
                uri_root: "bazar",
                icon: "FaShoppingCart",
            },
            {
                name: "Menu",
                link: route("user.menu.index"),
                uri_root: "menu",
                icon: "FaRegListAlt",
            },
            {
                name: "Schedule",
                link: route("user.schedule.index"),
                uri_root: "schedule",
                icon: "FaPeopleCarry",
            },
            {
                name: "Notices",
                link: route("user.notices.index"),
                uri_root: "notice",
                icon: "FaWpforms",
            },
            {
                name: "Issues",
                link: route("user.issue.index"),
                uri_root: "issue",
                icon: "FaPoll",
            },
            {
                name: "Term & C",
                link: route("user.rules.index"),
                uri_root: "rule",
                icon: "FaCogs",
            },
        ]
    ;

    const pathname = '';

    const trigger = useRef(null)
    const sidebar = useRef(null)

    const storedSidebarExpanded = localStorage.getItem('sidebar-expanded')
    const [sidebarExpanded, setSidebarExpanded] = useState(
        storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
    )

    // close on click outside
    useEffect(() => {
        const clickHandler = ({target}) => {
            if (!sidebar.current || !trigger.current) return
            if (
                !sidebarOpen ||
                sidebar.current.contains(target) ||
                trigger.current.contains(target)
            )
                return
            setSidebarOpen(false)
        }
        document.addEventListener('click', clickHandler)
        return () => document.removeEventListener('click', clickHandler)
    })

    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({keyCode}) => {
            if (!sidebarOpen || keyCode !== 27) return
            setSidebarOpen(false)
        }
        document.addEventListener('keydown', keyHandler)
        return () => document.removeEventListener('keydown', keyHandler)
    })

    useEffect(() => {
        localStorage.setItem('sidebar-expanded', sidebarExpanded)
        if (sidebarExpanded) {
            document.querySelector('body').classList.add('sidebar-expanded')
        } else {
            document.querySelector('body').classList.remove('sidebar-expanded')
        }
    }, [sidebarExpanded])

    return (
        <aside
            ref={sidebar}
            className={`absolute left-0 top-0 z-9999 flex h-screen shadow-2 flex-col overflow-y-hidden bg-white duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
                sidebarOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >

            <div className='flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5'>
                <Link href='/'>
                    <img src={Logo} alt='Logo'/>
                </Link>

                <button
                    ref={trigger}
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    aria-controls='sidebar'
                    aria-expanded={sidebarOpen}
                    className='block lg:hidden'
                >
                    <svg
                        className='fill-current'
                        width='20'
                        height='18'
                        viewBox='0 0 20 18'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            d='M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z'
                            fill=''
                        />
                    </svg>
                </button>
            </div>


            <div className='no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear'>

                <nav className='mt-5 py-4 px-4 lg:mt-9 lg:px-6'>

                    <div>
                        <h3 className='mb-4 ml-4 text-sm  font-semibold text-black dark:text-white'>
                            MENU
                        </h3>

                        <ul className='mb-6 flex flex-col gap-1.5'>
                            {routes.map((row, index) => {
                                if (row.has_child) {
                                    return (
                                        <SidebarLinkGroup
                                            key={index}
                                            activeCondition={
                                                pathname === '/' || pathname.includes('dashboard')
                                            }
                                        >
                                            {
                                                (handleClick, open) => {
                                                    let current = url.startsWith(row.uri_root);
                                                    return (
                                                        <React.Fragment>
                                                            <Link
                                                                href='#'
                                                                className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium hover:text-white  duration-300 ease-in-out hover:bg-background-200 ${
                                                                    current &&
                                                                    'bg-background-200'
                                                                }`}
                                                                onClick={(e) => {
                                                                    e.preventDefault()
                                                                    sidebarExpanded
                                                                        ? handleClick()
                                                                        : setSidebarExpanded(true)
                                                                }}
                                                            >
                                                                <Icon name={row.icon} className='fill-current'/>
                                                                {row.name}
                                                                <svg
                                                                    className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                                                                        open && 'rotate-180'
                                                                    }`}
                                                                    width='20'
                                                                    height='20'
                                                                    viewBox='0 0 20 20'
                                                                    fill='none'
                                                                    xmlns='http://www.w3.org/2000/svg'
                                                                >
                                                                    <path
                                                                        fillRule='evenodd'
                                                                        clipRule='evenodd'
                                                                        d='M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z'
                                                                        fill=''
                                                                    />
                                                                </svg>
                                                            </Link>
                                                            {/* <!-- Dropdown Menu Start --> */}
                                                            <div
                                                                className={`translate transform overflow-hidden ${
                                                                    !open && 'hidden'
                                                                }`}
                                                            >
                                                                <ul className='mt-4 mb-5.5 flex flex-col gap-2.5 pl-6'>
                                                                    {row.children.map((item, key) => {
                                                                        let isActive = routePrefix ? url.startsWith(`${routePrefix}/${item.uri_root.toLowerCase()}`) : url.startsWith(`/${item.uri_root.toLowerCase()}`);
                                                                        return (<li key={key}>
                                                                            <Link
                                                                                href={item.link}
                                                                                className={`group relative flex items-center gap-2.5 rounded-md py-2 px-4 font-medium  duration-300 ease-in-out hover:text-white hover:bg-background-200 ${isActive ? '!text-white bg-background-200' : ''}`}
                                                                            >
                                                                                <Icon name={item.icon}
                                                                                      className={'fill-current'}/>
                                                                                {item.name}
                                                                            </Link>
                                                                        </li>);

                                                                    })}

                                                                </ul>
                                                            </div>

                                                        </React.Fragment>
                                                    )
                                                }
                                            }

                                        </SidebarLinkGroup>);
                                } else {
                                    let isActive = url.startsWith('/' + row.uri_root.toLowerCase());
                                    return (
                                        <li key={`${index}-${row.name}`}>
                                            <Link
                                                href={row.link}
                                                className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium dark:text-white hover:text-white duration-300 ease-in-out hover:bg-background-200 ${
                                                    isActive ?
                                                        'bg-background-200 text-white' : ''
                                                }`}
                                            >
                                                <Icon name={row.icon} className={'fill-current'}/>
                                                {row.name}
                                            </Link>
                                        </li>
                                    );
                                }
                            })}
                        </ul>
                    </div>
                    <div className="relative bottom-0 left-2 p-2 bg-gray-900">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Version 1.0 Beta</span>
                    </div>
                </nav>

            </div>
        </aside>
    )
}

export default Sidebar;

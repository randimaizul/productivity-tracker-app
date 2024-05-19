import React from 'react'
import { MdAnalytics, MdAttachMoney, MdDashboard, MdHelpCenter, MdShoppingBag, MdSupervisedUserCircle, MdWork, MdPeople, MdOutlineSettings, MdLogout } from 'react-icons/md'
import MenuLink from './MenuLink'

const menuItems = [
    {
        title: "Pages",
        list: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: <MdDashboard />,
            },
            {
                title: "Tasks",
                path: "/dashboard/my-task",
                icon: <MdSupervisedUserCircle />,
            },
            {
                title: "Budget & Expense",
                path: "/dashboard/budget-and-expense",
                icon: <MdAttachMoney />,
            },
        ],
    },
    // {
    //     title: "Analytics",
    //     list: [
    //         {
    //         title: "Revenue",
    //         path: "/dashboard/revenue",
    //         icon: <MdWork />,
    //         },
    //         {
    //         title: "Reports",
    //         path: "/dashboard/reports",
    //         icon: <MdAnalytics />,
    //         },
    //         {
    //         title: "Teams",
    //         path: "/dashboard/teams",
    //         icon: <MdPeople />,
    //         },
    //     ],
    // },
    {
        title: "Master",
        list: [
            {
            title: "Settings",
            path: "/dashboard/settings",
            icon: <MdOutlineSettings />,
            },
            {
            title: "Tasks Master",
            path: "/master/tasks-master",
            icon: <MdOutlineSettings />,
            },
            {
            title: "Budgets Master",
            path: "/dashboard/settings",
            icon: <MdOutlineSettings />,
            },
            {
            title: "Help",
            path: "/dashboard/help",
            icon: <MdHelpCenter />,
            },
        ],
    },
];


const Sidebar = (): React.ReactElement  => {
    return (
        <div>
            <ul className="list-none">
                {menuItems.map( (cat) => (
                    <li key={cat.title}>
                        <span className="font-bold font-size-sm mx-2">{cat.title}</span>
                        {
                            cat.list.map( (item) => (
                                <MenuLink key={item.title} item={item} />
                            ))
                        }
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar
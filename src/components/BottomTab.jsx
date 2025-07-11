import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { IoCallSharp, IoInformationCircle } from 'react-icons/io5';
import { MdDisplaySettings } from 'react-icons/md';
import { FaBookBookmark } from 'react-icons/fa6';

const BottomTab = () => {
    const location = useLocation();

    const navItems = [
        { path: '/', label: 'Home', icon: <FaHome /> },
        { path: '/courses', label: 'Courses', icon: <FaBookBookmark /> },
        { path: '/facilities', label: 'Facilities', icon: <MdDisplaySettings /> },
        { path: '/about', label: 'About', icon: <IoInformationCircle /> },
        { path: '/contact', label: 'Contact', icon: <IoCallSharp /> },
    ];
    return (
        <div>
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md md:hidden z-50 px-4 py-2">
                <div className="flex justify-between items-center">
                    {navItems.map(({ path, label, icon }) => {
                        const isActive = location.pathname === path;
                        return (
                            <Link
                                key={path}
                                to={path}
                                className={`flex flex-col items-center justify-center text-xs ${isActive ? 'text-blue-600 font-medium' : 'text-gray-500'
                                    } hover:text-blue-500 transition-all`}
                            >
                                <div className={`text-xl mb-0.5 ${isActive ? 'animate-bounce' : ''}`}>
                                    {icon}
                                </div>
                                {label}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default BottomTab

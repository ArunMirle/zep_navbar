import React, { useState } from 'react';
import Link from 'next/link';

interface MenuItem {
    name: string;
    href: string;
    subItems?: MenuItem[];
}

const LeftNavbar: React.FC = () => {
    const menuItems: MenuItem[] = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Dashboard', href: '/dashboard' },
        {
            name: 'Services',
            href: '#',
            subItems: [
                { name: 'Web Development', href: '/services/web-development' },
                { name: 'App Development', href: '/services/app-development' },
                { name: 'UI/UX Design', href: '/services/ui-ux' },
                { name: 'SEO', href: '/services/seo' },
                { name: 'Content Creation', href: '/services/content-creation' },
            ],
        },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav className="w-64 bg-gray-800 text-white h-full flex flex-col">
            <div className="p-6">
                <h2 className="text-2xl font-semibold">Left Menu</h2>
            </div>
            <ul className="flex flex-col gap-4 p-6">
                {menuItems.map((item, index) => (
                    <li key={index}>
                        {item.subItems && item.subItems.length > 4 ? (
                            <AccordionMenu item={item} />
                        ) : (
                            <Link href={item.href} className="hover:bg-gray-700 p-2 rounded block">
                                {item.name}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

const AccordionMenu: React.FC<{ item: MenuItem }> = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => setIsOpen(!isOpen);

    return (
        <div>
            <button
                onClick={toggleAccordion}
                className="hover:bg-gray-700 p-2 rounded w-full text-left flex justify-between items-center"
            >
                <span>{item.name}</span>
                <span>{isOpen ? '-' : '+'}</span>
            </button>
            {isOpen && (
                <ul className="ml-4 mt-2 space-y-2">
                    {item.subItems?.map((subItem, index) => (
                        <li key={index}>
                            <Link href={subItem.href} className="hover:bg-gray-700 p-2 rounded block">
                                {subItem.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default LeftNavbar;

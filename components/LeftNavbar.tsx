import React from 'react';
import Link from 'next/link';

const LeftNavbar: React.FC = () => {
    return (
        <nav className="w-64 bg-gray-800 text-white h-full flex flex-col">
            <div className="p-6">
                <h2 className="text-2xl font-semibold">Left Menu</h2>
            </div>
            <ul className="flex flex-col gap-4 p-6">
                <li>
                    <Link href="/" className="hover:bg-gray-700 p-2 rounded">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/about" className="hover:bg-gray-700 p-2 rounded">
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/dashboard" className="hover:bg-gray-700 p-2 rounded">
                        Dashboard
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default LeftNavbar;

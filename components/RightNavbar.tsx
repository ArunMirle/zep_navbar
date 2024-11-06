import React from 'react';
import Link from 'next/link';

const RightNavbar: React.FC = () => {
    return (
        <nav className="w-64 bg-gray-700 text-white h-full flex flex-col p-6 gap-4">
            <h2 className="text-2xl font-semibold mb-4">Right Menu</h2>

            <div className="flex flex-col gap-4">
                <Link href="/settings" className="bg-gray-800 hover:bg-gray-600 text-white p-4 rounded shadow-md border border-gray-600">
                    <div className="text-center">Settings</div>
                </Link>

                <Link href="/profile" className="bg-gray-800 hover:bg-gray-600 text-white p-4 rounded shadow-md border border-gray-600">
                    <div className="text-center">Profile</div>
                </Link>

                <Link href="/logout" className="bg-gray-800 hover:bg-gray-600 text-white p-4 rounded shadow-md border border-gray-600">
                    <div className="text-center">Logout</div>
                </Link>
            </div>
        </nav>
    );
};

export default RightNavbar;

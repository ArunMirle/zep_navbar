import React from 'react';
import LeftNavbar from './LeftNavbar';
import RightNavbar from './RightNavbar';
import Topbar from './TopBar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="flex flex-col h-screen">
            {/* Topbar stays fixed at the top */}
            <div className="fixed w-full top-0 z-10">
                <Topbar />
            </div>

            <div className="flex flex-1 pt-16 overflow-hidden">
                {/* Left Navbar stays fixed on the left */}
                <div className="fixed left-0 top-16 w-64 h-[calc(100vh-4rem)] z-10">
                    <LeftNavbar />
                </div>

                {/* Main content area in the middle (scrollable) */}
                <main className="ml-64 mr-64 flex-1 p-6 bg-gray-100 overflow-y-auto h-[calc(100vh-4rem)]">
                    {children}
                </main>

                {/* Right Navbar stays fixed on the right */}
                <div className="fixed right-0 top-16 w-64 h-[calc(100vh-4rem)] z-10">
                    <RightNavbar />
                </div>
            </div>
        </div>
    );
};

export default Layout;

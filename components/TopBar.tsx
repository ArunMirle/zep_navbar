import React from 'react';

const Topbar: React.FC = () => {
    return (
        <header className="w-full h-16 bg-blue-600 text-white flex items-center justify-between px-6">
            <h1 className="text-xl font-bold">My App</h1>
            <div>Arun M Mirle</div>
        </header>
    );
};

export default Topbar;

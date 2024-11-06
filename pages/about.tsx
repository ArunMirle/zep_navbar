

import React from 'react';
import { useSectionStore } from './store/useSectionStore';

const TotalSections: React.FC = () => {
  const totalSections = useSectionStore((state: { totalSections: any; }) => state.totalSections);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-4 bg-gray-100 rounded shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4">Total Sections</h1>
        <p className="text-2xl">{totalSections}</p>
      </div>
    </div>
  );
};

export default TotalSections;

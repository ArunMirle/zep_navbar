
import React from 'react';
import { useSectionStore } from './store/useSectionStore';
import Section from '@/components/Section';

const Home: React.FC = () => {
    const { sections } = useSectionStore();

    return (
        <div className="scrollbar-hide h-screen overflow-y-auto">
            <h2 className="text-2xl mb-4">Welcome to the homepage!</h2>

            {/* Render each section from the Zustand store */}
            {sections.map((section) => (
                <Section
                    key={section.id}
                    id={section.id}
                    title={section.title}
                    content={section.content}
                />
            ))}
        </div>
    );
};

export default Home;

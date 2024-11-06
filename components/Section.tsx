// src/components/Section.tsx

import React, { useState } from 'react';
import { useSectionStore } from '../pages/store/useSectionStore';

interface SectionProps {
    id: number;
    title: string;
    content: string;
}

const Section: React.FC<SectionProps> = ({ id, title, content }) => {
    const { deleteSection, updateSection } = useSectionStore();
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(title);
    const [newContent, setNewContent] = useState(content);

    const handleSave = () => {
        updateSection(id, { title: newTitle, content: newContent });
        setIsEditing(false);
    };

    return (
        <div className="mb-4 p-4 bg-white rounded shadow-md">
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        className="w-full mb-2 p-2 border rounded"
                    />
                    <textarea
                        value={newContent}
                        onChange={(e) => setNewContent(e.target.value)}
                        className="w-full mb-2 p-2 border rounded"
                    />
                    <button onClick={handleSave} className="bg-green-500 px-4 py-2 rounded text-white">
                        Save
                    </button>
                </>
            ) : (
                <>
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p>{content}</p>
                    <button
                        onClick={() => setIsEditing(true)}
                        className="mr-2 bg-yellow-500 px-4 py-2 rounded text-white"
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => deleteSection(id)}
                        className="bg-red-500 px-4 py-2 rounded text-white"
                    >
                        Delete
                    </button>
                </>
            )}
        </div>
    );
};

export default Section;

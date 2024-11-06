import { create } from 'zustand';

const sectionsData = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    title: `Section ${i + 1}`,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut bibendum mauris. Quisque accumsan dolor vel lacus eleifend, sit amet fermentum justo consectetur. In hac habitasse platea dictumst. Aenean aliquet purus ut orci scelerisque, ut facilisis mi vulputate. Integer malesuada nisi eget semper sodales.`,
}));

interface Section {
    id: number;
    title: string;
    content: string;
}

interface SectionStore {
    sections: Section[];
    totalSections: number;
    addSection: (section: Section) => void;
    updateSection: (id: number, updatedSection: Partial<Section>) => void;
    deleteSection: (id: number) => void;
}

export const useSectionStore = create<SectionStore>((set, get) => ({
    sections: sectionsData,

    // Initialize totalSections
    totalSections: sectionsData.length,

    addSection: (newSection) =>
        set((state) => ({
            sections: [...state.sections, newSection],
            totalSections: state.sections.length + 1, // Increment totalSections
        })),

    updateSection: (id, updatedSection) =>
        set((state) => ({
            sections: state.sections.map((section) =>
                section.id === id ? { ...section, ...updatedSection } : section
            ),
        })),

    deleteSection: (id) =>
        set((state) => {
            const newSections = state.sections.filter((section) => section.id !== id);
            return {
                sections: newSections,
                totalSections: newSections.length, 
            };
        }),
}));

export interface EducationEntry {
    year: number;
    start?: string;
    degree: string;
    gpa: number | string;
    place: string;
    description: string;
    name?: string;
    location?: string;
    degreePdfFileUrl?: string;
    thesisPdfFileUrl?: string;
}
//all times need to have the same length
const allEducation:EducationEntry[] = [
    { 
        year: 2017,
        degree: 'Abitur',
        gpa:2.0, 
        place: 'Werner von Siemens Gymnasium Berlin', 
        location:'Berlin, DE', 
        
        description:'With primary focus on mathmatics and physics, with 15points (the best) in computer science ;)',

    },
    { 
        year: 2020,
        degree: 'B.Sc.', 
        gpa:2.6, 
        place: 'Freie Universität Berlin', 
        location:'Berlin, DE', 
        name:'Computer Science', 
        description:'I wrote my bachelor thesis on improving useability of an email client.',
        degreePdfFileUrl: '/pdfs/hh_zeugnis_bachelor.pdf',
        thesisPdfFileUrl: '/pdfs/hh_thesis_bachelor.pdf',
    },
    { 
        year: 2023,
        degree: 'M.Sc.', 
        gpa:'expecting ~1.4', 
        place: 'Freie Universität Berlin', 
        location:'Berlin, DE', 
        name:'Computer Science', 
        description:'I\'ve not yet got my degree, but i\'ve already finished all my classes and my masters thesis called "Improved linear Cryptanalysis on Quantum Computers" with a 1.0, I therefor expect to graduate with a 1.4 very soon.',
        degreePdfFileUrl: '/pdfs/hh_zeugnis_master.pdf',
        thesisPdfFileUrl: '/pdfs/hh_thesis_master.pdf',
    },
];

const shownEducation = allEducation;

export const forpdf = shownEducation;

export default shownEducation;
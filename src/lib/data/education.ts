export interface EducationEntry {
    year: number;
    start?: string;
    degree: string;
    gpa: number | string;
    place: string;
    description: string;
    name?: string;
}
//all times need to have the same length
const options:EducationEntry[] = [
    { year: 2017, degree: 'Abitur', gpa:2.0, place: 'Werner von Siemens Gymnasium Berlin', description:'with primary focus on mathmatics and physics, with 15points (the best) in computer science ;)'},
    { year: 2020, degree: 'B.Sc.', gpa:2.6, place: 'Freie Universität Berlin', name:'Computer Science', description:'i wrote my bachelor thesis on improving useability of an email client'},
    { year: 2023, degree: 'M.Sc.', gpa:'expecting ~1.7', place: 'Freie Universität Berlin', name:'Computer Science',description:'i\'ve already finished all my classes since 2021, but i\'m still writing my master thesis on quantum computer algorithms, which i expect to finish 2023. It takes some time since im mostly occupied with my jobs as you can see in the next section.'}
];

export default options;
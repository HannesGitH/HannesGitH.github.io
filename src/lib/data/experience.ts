import shownProjects from "./projects";

export interface ExperienceEntry {
	year: number | string;
	start?: number;
	place: string;
	description: string[];
	name: string;
	location?: string;
	pdfFileUrl?: string;
}
//all times need to have the same length
const options: ExperienceEntry[] = [
	{
        start: 2019,
		year: 2020,
		place: 'Whats2doo / Leithold',
		location: 'Berlin, DE',
		name: 'Software Engineer (Internship)',
		description:
			[
                'Designed and built a new landing page for the company website, mostly using PHP and plain JS.',
                'Helping to build a new web app for the company using Nuxt.js (Vue.js) and MongoDB, though to be honest, i forgot most of that already..',
            ],
		pdfFileUrl: '/pdfs/hh_zeugnis_whats2doo.pdf'
	},
    {
        start: 2021,
		year: 2024,
		place: 'Fraunhofer AISEC ',
		location: 'Berlin, DE',
		name: 'Studentische Hilfskraft',
		description:
			[
				'Did a lot of research regarding quantum computing and quantum algorithms with a focus on quantum cryptanalysis, code wasn\'t really the main part of the job, but i did a bunch of python using IBM\'s qiskit framework.',
				'Worked on multiple large projects including QACI, BayQS and PoQuID'
                ],
	    pdfFileUrl: '/pdfs/hh_zeugnis_fraunhofer.pdf'
	    
	},
	{
        start: 2021,
		year: '2024',
		place: 'Mastbau FN GmbH',
		location: 'Berlin, DE',
		name: 'Lead Full-Stack Developer',
		description:
			[
                'Designed and built an internal application for managing the company\'s projects, using primarily Flutter.'
            ]
	},
	{
        start: 2024,
		year: '....',
		place: 'Bling.de',
		location: 'Berlin, DE',
		name: 'Frontend Engineer',
		description:
			[
                'Help building the best app for families in Europe: Pocket money, banking, chores, and more, all in one place. Frontend primarily build with Flutter.'
            ]
	},
	//TODO: sobald carii gegründet wird
	// {
	// 	start: 2023,
	// 	year: '....',
	// 	place: 'Carii GmbH',
	// 	name: 'CTO',
	// 	description:
	// 		[
    //             'leading the development and technological decisions of the company',
    //         ]
	// },
];

const allExperience = options;

const shownExperience = allExperience;

export const forpdf = shownExperience;

export default shownExperience;

export interface ExperienceEntry {
	year: number | string;
	start?: number;
	place: string;
	description: string[];
	name: string;
}
//all times need to have the same length
const options: ExperienceEntry[] = [
	{
        start: 2019,
		year: 2020,
		place: 'Whats2doo / Leithold',
		name: 'Software Engineer (Internship)',
		description:
			[
                'designed and built a new landing page for the company website, mostly using PHP and plain JS',
                'helping to build a new web app for the company using Nuxt.js (Vue.js) and MongoDB, though to be honest, i forgot most of that already',
            ]
	},
	{
        start: 2021,
		year: '....',
		place: 'Mastbau FN GmbH',
		name: 'lead Full-Stack Developer',
		description:
			[
                'designed and built an internal application for managing the company\'s projects, using Flutter and some JS'
            ]
	},
    {
        start: 2021,
		year:'....',
		place: 'Fraunhofer AISEC ',
		name: 'Studentische Hilfskraft',
		description:
			[
                'doing a lot of research regarding quantum computing and quantum algorithms, code wasn\'t really the main part of the job, but i did a bunch of python using IBM\'s qiskit framework',
            ]
	},
];

export default options;

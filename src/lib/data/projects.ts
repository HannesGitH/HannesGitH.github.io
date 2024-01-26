type Description = any //TO-DO: either HTML or even component?
export interface ProjectData {
	name: string;
	iconUrl: string;
    previewUrl: string;
	description: Description;
    link: string;
    relevantSkillNames: string[];
}


import passCheckDescriptionComponent from '$lib/components/projects/passcheck.svelte';
import passCheckIcon from '$lib/assets/projects/passcheck/icon.png';
import passCheckPreview from '$lib/assets/projects/passcheck/preview.png';

const passCheck = {
    name: 'passcheck', //later calls: $_('projects.passcheck.name')
    iconUrl: passCheckIcon,
    previewUrl: passCheckPreview,
    description: passCheckDescriptionComponent,
    link: 'https://play.google.com/store/apps/details?id=hannepps.tools.passwordchecker',
    relevantSkillNames: ['Android', 'Svelte', 'Git', 'GitHub', 'VS Code', 'TypeScript', 'Sass'], 
}


const shownProjects : ProjectData[] = [
    passCheck,
    passCheck,
    passCheck,
]

export default shownProjects;


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


import vibrationDescriptionComponent from '$lib/components/projects/vibration.svelte';
import vibrationIcon from '$lib/assets/projects/vibration/icon.png';
import vibrationPreview from '$lib/assets/projects/vibration/preview.png';

const vibration = {
    name: 'haptic pattern', //later calls: $_('projects.passcheck.name')
    iconUrl: vibrationIcon,
    previewUrl: vibrationPreview,
    description: vibrationDescriptionComponent,
    link: 'https://play.google.com/store/apps/details?id=hannepps.tools.vibrationtest',
    relevantSkillNames: ['Android', 'Flutter', 'Git', 'GitHub', 'VS Code', 'Dart', ], 
}


const shownProjects : ProjectData[] = [
    passCheck,
    vibration,
]

export default shownProjects;


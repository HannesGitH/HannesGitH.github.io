// type Description = any //TO-DO: either HTML or even component?
export interface ProjectData {
	name: string;
	iconUrl: string;
    previewUrl: string;
	// description: Description;
    link: string;
    relevantSkillNames: string[];
}


// import passCheckDescriptionComponent from '$lib/components/projects/passcheck.svelte';
import passCheckIcon from '$lib/assets/projects/passcheck/icon.png';
import passCheckPreview from '$lib/assets/projects/passcheck/preview.png';

const passCheck = {
    name: 'passcheck', //later calls: $_('projects.passcheck.name')
    iconUrl: passCheckIcon,
    previewUrl: passCheckPreview,
    // description: passCheckDescriptionComponent,
    link: 'https://play.google.com/store/apps/details?id=hannepps.tools.passwordchecker',
    relevantSkillNames: ['Android', 'Svelte', 'Git', 'GitHub', 'VS Code', 'TypeScript', 'Sass'], 
}


// import vibrationDescriptionComponent from '$lib/components/projects/vibration.svelte';
import vibrationIcon from '$lib/assets/projects/vibration/icon.png';
import vibrationPreview from '$lib/assets/projects/vibration/preview.png';

const vibration = {
    name: 'vibration',
    iconUrl: vibrationIcon,
    previewUrl: vibrationPreview,
    // description: vibrationDescriptionComponent,
    link: 'https://play.google.com/store/apps/details?id=hannepps.tools.vibrationtest',
    relevantSkillNames: ['Android', 'Flutter', 'Git', 'GitHub', 'VS Code', 'Dart', ], 
}

//inspector
import inspectionIcon from '$lib/assets/projects/inspector/icon.svg';
import inspectionPreview from '$lib/assets/projects/inspector/preview.jpg';

const inspection = {
    name: 'inspector',
    iconUrl: inspectionIcon,
    previewUrl: inspectionPreview,
    link: 'https://github.com/mastbau-fn/inspector',
    relevantSkillNames: ['Flutter', 'Git', 'GitHub', 'VS Code', 'PostgreSQL', 'TypeScript', 'Docker', ' Dart' ],
}


//carii
import cariiIcon from '$lib/assets/projects/carii/icon.png';
import cariiPreview from '$lib/assets/projects/carii/preview.jpg';

const carii = {
    name: 'carii',
    iconUrl: cariiIcon,
    previewUrl: cariiPreview,
    link: 'https://carii.de',
    relevantSkillNames: ['Flutter', 'Git', 'GitHub', 'VS Code', 'PostgreSQL', 'TypeScript', 'Docker', ' Dart', 'Supabase', 'Android', 'Linux', 'iOS', 'Apple',  ],
}


const shownProjects : ProjectData[] = [
    passCheck,
    vibration,
    inspection,
    carii,
]

export default shownProjects;


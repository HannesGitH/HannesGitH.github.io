// type Description = any //TO-DO: either HTML or even component?
export interface ProjectData {
	name: string;
	iconUrl: string;
    previewUrl: string;
	// description: Description;
    link: string;
    relevantSkillNames: string[];
    position?: string;
    pdfName: string;
    pdfDescription: string[];
}


// import passCheckDescriptionComponent from '$lib/components/projects/passcheck.svelte';
import passCheckIcon from '$lib/assets/projects/passcheck/icon.png';
import passCheckPreview from '$lib/assets/projects/passcheck/preview.png';
import { passCheckR, vibrationR, cariiR, inspectionR } from './projects-raw';

const passCheck = {
    name: 'passcheck', //later calls: $_('projects.passcheck.name')
    iconUrl: passCheckIcon,
    previewUrl: passCheckPreview,
    // description: passCheckDescriptionComponent,
    relevantSkillNames: ['Android', 'Svelte', 'Git', 'GitHub', 'VS Code', 'TypeScript', 'Sass'], 
    ... passCheckR,
}


// import vibrationDescriptionComponent from '$lib/components/projects/vibration.svelte';
import vibrationIcon from '$lib/assets/projects/vibration/icon.png';
import vibrationPreview from '$lib/assets/projects/vibration/preview.png';

const vibration = {
    name: 'vibration',
    iconUrl: vibrationIcon,
    previewUrl: vibrationPreview,
    // description: vibrationDescriptionComponent,
    relevantSkillNames: ['Android', 'Flutter', 'Git', 'GitHub', 'VS Code', 'Dart', ], 
    ... vibrationR,
}

//inspector
import inspectionIcon from '$lib/assets/projects/inspector/icon.svg';
import inspectionPreview from '$lib/assets/projects/inspector/preview.jpg';

const inspection = {
    name: 'inspector',
    iconUrl: inspectionIcon,
    previewUrl: inspectionPreview,
    relevantSkillNames: ['Flutter', 'Git', 'GitHub', 'VS Code', 'PostgreSQL', 'TypeScript', 'Docker', ' Dart' ],
    ... inspectionR,
}


//carii
import cariiIcon from '$lib/assets/projects/carii/icon.png';
import cariiPreview from '$lib/assets/projects/carii/preview.jpg';

const carii = {
    name: 'carii',
    iconUrl: cariiIcon,
    previewUrl: cariiPreview,
    relevantSkillNames: ['Flutter', 'Git', 'GitHub', 'VS Code', 'PostgreSQL', 'TypeScript', 'Docker', ' Dart', 'Supabase', 'Android', 'Linux', 'iOS', 'Apple',  ],
    ... cariiR,
}


const shownProjects : ProjectData[] = [
    passCheck,
    vibration,
    inspection,
    carii,
]

export const forpdf = shownProjects;

export default shownProjects;


import PassCheckD from '$lib/components/projects/passcheck.svelte';


type Icon = string; //TODO: image or similar
type Description = any //TODO: either HTML or even component?

export interface ProjectData {
	name: string;
	icon: Icon;
	description: Description;
    link: string
}

const passcheck = {
    name: 'passcheck', //later calls: $_('projects.passcheck.name')
    icon: 'TODO',
    description: PassCheckD,
    link: 'https://play.google.com/store/apps/developer?id=Hannepps"' //TODO
}


const shownProjects : ProjectData[] = [
    passcheck
]

export default shownProjects;


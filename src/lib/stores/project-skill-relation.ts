import shownProjects from "$lib/data/projects";
import { writable, derived } from "svelte/store";
import type { Writable, Readable } from "svelte/store";

const currentlySelectedProjectName : Writable<string | null> = writable(null);

const activeSkillNames : Readable<string[]> = derived(currentlySelectedProjectName, ($currentlySelectedProjectName) => {
    if ($currentlySelectedProjectName === null) return [];
    const activeProject = shownProjects.find((project) => project.name === $currentlySelectedProjectName);
    if (activeProject === undefined) return [];
    return activeProject.relevantSkillNames;
});

const isActive = (skillName: string) => derived(activeSkillNames, ($activeSkillNames) => $activeSkillNames.includes(skillName));

export { currentlySelectedProjectName, activeSkillNames, isActive };
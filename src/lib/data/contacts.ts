export interface ContactData {
	name: string;
	iconClass: string;
    link: string;
}

//linkedin
export const linkedin: ContactData = {
    name: 'LinkedIn',
    iconClass: 'devicon-linkedin-plain',
    link: 'https://www.linkedin.com/in/hannes-hattenbach/'
};

//github
export const github: ContactData = {
    name: 'GitHub',
    iconClass: 'devicon-github-plain',
    link: 'https://github.com/HannesGitH'
};

//email
export const email: ContactData = {
    name: 'Email',
    iconClass: 'fa-solid fa-envelope',
    link: 'mailto:contact@h-h.win'
};

//telegram//TODO


const contacts: ContactData[] = [linkedin, github, email];

export default contacts;

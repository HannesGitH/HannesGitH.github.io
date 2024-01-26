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
    iconClass: 'fa fa-envelope',
    link: 'mailto:contact@h-h.win'
};

//telegram
export const telegram: ContactData = {
    name: 'Telegram',
    iconClass: 'fa-brands fa-telegram',
    link: 'https://t.me/hannepps'
}


const contacts: ContactData[] = [linkedin, github, email, telegram];

export default contacts;

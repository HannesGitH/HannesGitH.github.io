// print filenames in .data directory
const fs = require('fs');
const path = require('path');
const dir = './.data';
fs.readdir(dir, (err : any, files : any) => {
  files.forEach((file: any)=> {
    console.log(file);
  });
});

import { forpdf as experience } from '../.data/experience'
import type { ExperienceEntry } from '../.data/experience';
import { forpdf as education } from '../.data/education'
import type { EducationEntry } from '../.data/education';
import { forpdf as projects } from '../.data/projects-raw'
import type { ProjectData as ProjectEntry } from '../.data/projects-raw';

const base_href = process.argv[2]

const parseCVEntry = (entry: ExperienceEntry | EducationEntry | ProjectEntry) => {

    let { year , start, place, name, description, location} = {location:'', year: '', start: '', place: '', name: '', description: '', ...entry, };
    //in case of education we also have a degree
    if ((entry as EducationEntry).degree) {
        let { degree, grade } = entry as EducationEntry;
        name = (name ? `${degree} in ${name}` : degree) + (grade ? ` (grade: ${grade})` : '');
    }
    if ((entry as ProjectEntry).pdfName) {
        const {pdfName, link, pdfDescription } = (entry as ProjectEntry);
        place = `{\\href{${link}}{${pdfName} \\ExternalLink }\\hfill}`;
        description = pdfDescription;
    }

    if((entry as ExperienceEntry).pdfFileUrl) {
        let fileUrl = base_href+(entry as ExperienceEntry).pdfFileUrl;
        place = `{${place} \\tiny (\\href{${fileUrl}}{\\color{gray} review \\ExternalLink})}`;
    }
    if((entry as EducationEntry).degreePdfFileUrl || (entry as EducationEntry).thesisPdfFileUrl) {
        let { degreePdfFileUrl, thesisPdfFileUrl } = entry as EducationEntry;
        if (degreePdfFileUrl && thesisPdfFileUrl) {
            place = `{${place} \\tiny (\\href{${base_href}${degreePdfFileUrl}}{\\color{gray} certificate \\ExternalLink }, \\href{${base_href}${thesisPdfFileUrl}}{\\color{gray} thesis \\ExternalLink })}`;
        }
        else if (degreePdfFileUrl) {
            place = `{${place} \\tiny (\\href{${base_href}${degreePdfFileUrl}}{\\color{gray} certificate \\ExternalLink }})}`;
        }
        else if (thesisPdfFileUrl) {
            place = `{${place} \\tiny (\\href{${base_href}${thesisPdfFileUrl}}{\\color{gray} thesis \\ExternalLink }})}`;
        }
    }

    const parseDescription = (description: string[] | string) => {
        description = Array.isArray(description) ? description : [description];
        return '\\begin{cvitems}' 
        +   description.map((d) => {
                return `
                \\item ${d}`
            }).join('')
        +   `
            \\end{cvitems}`;
    }

    return `
    \\cventry
        {${name}}
        {${place}}
        {${location}}
        {${start ? `${start} - ${year}` : year}}
        {
            ${parseDescription(description)}
        }
    `
};

const parseCVEntries = (entries: ExperienceEntry[] | EducationEntry[] | ProjectEntry[] ) => {
    return `\n\\begin{cventries}\n`
    +   entries.map(parseCVEntry).join('')
    +   `\n\\end{cventries}\n`;
}

fs.writeFileSync('out/experience.tex', '\\cvsection{Experience}\n'+parseCVEntries(experience));
fs.writeFileSync('out/education.tex', '\\cvsection{Education}\n'+parseCVEntries(education));
fs.writeFileSync('out/projects.tex', '\\cvsection{Projects}\n'+parseCVEntries(projects));

import { tools,  languages, frameworks, miscSkills } from '../.data/skills';
fs.writeFileSync('out/skills.tex', '\\cvsection{Skills}\n'+
    `
    \\begin{cvskills}
        \\cvskill{Languages}{${languages.map(({name}) => name).join(', ')}}
        \\cvskill{Frameworks}{${frameworks.map(({name}) => name).join(', ')}}
        \\cvskill{Tools}{${tools.map(({name}) => name).join(', ')}}
        \\cvskill{Misc}{${miscSkills.join(', ')}}
    \\end{cvskills}
    `
);

// type Description = any //TO-DO: either HTML or even component?
export interface ProjectData {
    link: string;
    position?: string;
    pdfName: string;
    pdfDescription: string[];
    name: string;
}

export const passCheckR = {
    // year: '2022',
    name: 'Solo Project',
    pdfName: 'Passwort Checker',
    pdfDescriptionDE: ['Überprüft die Stärke von Passwörtern mithilfe wissenschaftlich erprüfter Methoden','Ein einfacher Passwort Checker für Android als TWA', 'Geschrieben in Svelte und TypeScript'],
    pdfDescription: ['Checks the strength of passwords using scientifically proven methods', 'A simple password checker for Android as TWA', 'Written in Svelte and TypeScript  '],
    link: 'https://play.google.com/store/apps/details?id=hannepps.tools.passwordchecker',
}

export const vibrationR = {
    // year: '2022',
    name: 'Solo Project',
    pdfName: 'Custom Vibration',
    pdfDescriptionDE: ['Erstelle eigene Vibrations-Muster', 'Primär geschrieben in Flutter'],
    pdfDescription: ['Create custom vibration patterns', 'Primarily written in Flutter'],
    link: 'https://play.google.com/store/apps/details?id=hannepps.tools.vibrationtest',
}

export const inspectionR = {
    // year: '2023',
    name: 'Mastbau-FN GmbH, Team of 2',
    pdfName: 'Inspector',
    pdfDescriptionDE: ['Ein Inspektions-Tool für Baustellen', 'Speziell entwickelt für die Mastbau-FN GmbH' ,'Geschrieben in Flutter und TypeScript'],
    pdfDescription: ['An inspection tool for construction sites', 'Specially developed for Mastbau-FN GmbH', 'Written using Flutter and TypeScript'],
    link: 'https://github.com/mastbau-fn/inspector',
}

export const cariiR = {
    // year: '2024',
    pdfName: 'Carii',
    pdfDescriptionDE: ['Eine DiPA, WIP', 'Primär geschrieben in Flutter, mit supabase und postgresql als Backend'],
    pdfDescription: ['A DiPA, WIP', 'Primarily written using Flutter, with supabase and postgresql as backend'],
    link: 'https://carii.de',
    name: 'Group of ~5',
}

export const letterBoxR = {
    // year: '2021',
    pdfName: 'LetterBox',
    pdfDescriptionDE: ['Ein Mail-Client für iOS, zum Versenden und Empfangen von PGP/S-MIME-verschlüsselten Emails, geschrieben mit Swift'],
    pdfDescription: ['A mail client for iOS, for sending and receiving PGP/S-MIME encrypted emails, written with Swift'],
    link: 'https://git.imp.fu-berlin.de/enzevalos/enzevalos_iphone',
    name: 'Group of ~15',
}


export const forpdf : ProjectData[] = [
    passCheckR,
    vibrationR,
    inspectionR,
    cariiR,
    letterBoxR,
]


// type Description = any //TO-DO: either HTML or even component?
export interface ProjectData {
    link: string;
    position?: string;
    pdfName: string;
    pdfDescription: string[];
}

export const passCheckR = {
    pdfName: 'passwort Checker',
    pdfDescription: ['Überprüft die Stärke von Passwörtern mithilfe wissenschaftlich erprüfter Methoden','Ein einfacher Passwort Checker für Android als TWA', 'Geschrieben in Svelte und TypeScript'],
    link: 'https://play.google.com/store/apps/details?id=hannepps.tools.passwordchecker',
}

export const vibrationR = {
    pdfName: 'Custom Vibration',
    pdfDescription: ['Erstelle eigene Vibrations-Muster', 'Primär geschrieben in Flutter'],
    link: 'https://play.google.com/store/apps/details?id=hannepps.tools.vibrationtest',
}

export const inspectionR = {
    pdfName: 'Inspector',
    pdfDescription: ['Ein Inspektions-Tool für Baustellen', 'Speziell entwickelt für die Mastbau-FN GmbH' ,'Geschrieben in Flutter und TypeScript'],
    link: 'https://github.com/mastbau-fn/inspector',
}

export const cariiR = {
    pdfName: 'Carii',
    pdfDescription: ['Eine DiPA, WIP', 'Primär geschrieben in Flutter, mit supabase und postgresql als Backend'],
    link: 'https://carii.de',
}

export const letterBoxR = {
    pdfName: 'LetterBox',
    pdfDescription: ['Ein Mail-Client für iOS, zum Versenden und Empfangen von PGP/S-MIME-verschlüsselten Emails, geschrieben mit Swift'],
    link: 'https://git.imp.fu-berlin.de/enzevalos/enzevalos_iphone',
}


export const forpdf : ProjectData[] = [
    passCheckR,
    vibrationR,
    inspectionR,
    cariiR,
]


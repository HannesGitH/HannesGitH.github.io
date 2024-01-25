export interface SkillData {
	name: string;
	level: number;
	iconClass: string;
}

const vscode : SkillData = {
    name: "VS Code",
    level: 10,
    iconClass: "devicon-vscode-plain",
}

const git : SkillData = {
    name: "Git",
    level: 9,
    iconClass: "devicon-git-plain",
}

const github : SkillData = {
    name: "GitHub",
    level: 10,
    iconClass: "devicon-github-plain",
}

const ts : SkillData = {
    name: "TypeScript",
    level: 5,
    iconClass: "devicon-typescript-plain",
}

const python : SkillData = {
    name: "Python",
    level: 6,
    iconClass: "devicon-python-plain",
}

const flutter : SkillData = {
    name: "Flutter",
    level: 10,
    iconClass: "devicon-flutter-plain",
}

const dart : SkillData = {
    name: "Dart",
    level: 10,
    iconClass: "devicon-dart-plain",
}

const svelte : SkillData = {
    name: "Svelte",
    level: 6,
    iconClass: "devicon-svelte-plain",
}

const android : SkillData = {
    name: "Android",
    level: 5,
    iconClass: "devicon-android-plain",
}

//arduino, bash, c++, sass, linux, postgresql, nodejs, swift, vue, unity, latex, rust

const arduino : SkillData = {
    name: "Arduino",
    level: 8,
    iconClass: "devicon-arduino-plain",
}

const bash : SkillData = {
    name: "Bash",
    level: 4,
    iconClass: "devicon-bash-plain",
}

const cpp : SkillData = {
    name: "C++",
    level: 5,
    iconClass: "devicon-cplusplus-plain",
}

const sass : SkillData = {
    name: "Sass",
    level: 7,
    iconClass: "devicon-sass-original",
}

const linux : SkillData = {
    name: "Linux",
    level: 5,
    iconClass: "devicon-linux-plain",
}

const postgresql : SkillData = {
    name: "PostgreSQL",
    level: 4,
    iconClass: "devicon-postgresql-plain",
}

const nodejs : SkillData = {
    name: "NodeJS",
    level: 9,
    iconClass: "devicon-nodejs-plain",
}

const swift : SkillData = {
    name: "Swift",
    level: 4,
    iconClass: "devicon-swift-plain",
}

const vue : SkillData = {
    name: "Vue",
    level: 2,
    iconClass: "devicon-vuejs-plain",
}

const unity : SkillData = {
    name: "Unity",
    level: 4,
    iconClass: "devicon-unity-original",
}

const latex : SkillData = {
    name: "LaTeX",
    level: 9,
    iconClass: "devicon-latex-plain",
}

const rust : SkillData = {
    name: "Rust",
    level: 4,
    iconClass: "devicon-rust-plain",
}

export const tools : SkillData[] = [
    vscode,
    git,
    github,
];

const allSkills : SkillData[] = [
    vscode,
    git,
    github,
    ts,
    python,
    flutter,
    dart,
    svelte,
    android,
    arduino,
    bash,
    cpp,
    sass,
    linux,
    postgresql,
    nodejs,
    swift,
    vue,
    unity,
    latex,
    rust,
]


const shownSkills : SkillData[] = [
    git,
    github,
    ts,
    python,
    flutter,
    // dart,
    svelte,
    android,
    // arduino,
    bash,
    // cpp,
    sass,
    linux,
    postgresql,
    // nodejs,
    // swift,
    // vue,
    // unity,
    latex,
    rust,
    vscode,
]

export default shownSkills;


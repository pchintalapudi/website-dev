interface Class {
    name: string;
    id: string;
    tags: Array<"cs" | "bio">;
}

interface Work {
    id: string;
    company: string;
    role: string;
    start: string;
    end: string;
    description: string;
    tags: Array<"cs" | "bio" | "research" | "internship">;
    supervisors: Array<{ name: string, title: string }>;
}

interface Project {
    id: string;
    name: string;
    description: string;
    tags: string[];
    start: string;
    end: string;
    github?: string;
    link?: string;
}

export interface State {
    courses: Class[];
    work: Work[];
    projects: Project[];
}
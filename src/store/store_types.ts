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
    tags: Array<"cs"|"bio"|"research"|"internship">;
    supervisors: Array<{name:string, title:string}>;
}

export interface State {
    courses: Class[];
    work: Work[];
}
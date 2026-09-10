import type React = require("react");

export type SVG = React.ComponentType<
  React.SVGProps<SVGSVGElement> & {
    title?: string;
  }
>;

export const SkillKey = {
  Angular: "Angular",
  Bash: "Bash",
  C: "C",
  Cpp: "Cpp",
  CMake: "CMake",
  Docker: "Docker",
  GitHub: "GitHub",
  GitLab: "GitLab",
  Go: "Go",
  Helm: "helm",
  Java: "Java",
  JavaScript: "JavaScript",
  Kotlin: "Kotlin",
  Kubernetes: "kubernetes",
  MatLab: "MatLab",
  MongoDB: "MongoDB",
  MySQL: "MySQL",
  PHP: "PHP",
  PostgreSQL: "PostgreSQL",
  ProtoBuf: "ProtoBuf",
  Python: "Python",
  React: "React",
  SystemVerilog: "SystemVerilog",
  TailwindCSS: "TailwindCSS",
  TypeScript: "TypeScript",
  Verilog: "Verilog",
} as const;

export type SkillKey = (typeof SkillKey)[keyof typeof SkillKey];

export interface Skill {
  key: SkillKey;
  title: string;
  icon: SVG;
  darkIcon?: SVG;
}

export interface Project {
  header: string;
  content: string | React.ReactNode[];
  skills: SkillKey[];
  github?: string;
  gitlab?: string;
}

export interface Job {
  startDate: Date;
  endDate: Date;
  role: string;
  achievements: string[];
}

export interface Workplace {
  employer: string;
  jobs: Job[];
}

export interface Course {
  code: string;
  title: string;
  percentageGrade: number;
}

export interface CourseLoad {
  year: string;
  courses: Array<Course>;
}

export interface NavBarItem {
  title: string;
  hash: string;
}

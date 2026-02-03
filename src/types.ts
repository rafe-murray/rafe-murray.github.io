import type React = require("react");

export type SVG = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & {
    title?: string;
  }
>;

export type SkillKey =
  | "Python"
  | "MySQL"
  | "PostgreSQL"
  | "PHP"
  | "Bash"
  | "Java"
  | "C"
  | "C++"
  | "Git"
  | "GitHub"
  | "GitLab"
  | "HTML"
  | "CSS"
  | "Tailwind CSS"
  | "JavaScript"
  | "React"
  | "Angular"
  | "MatLab";

export interface Skill {
  title: SkillKey;
  icon: SVG;
}

export interface Project {
  header: string;
  content: string;
  skills: Array<SkillKey>;
}

export interface Job {
  startDate: Date;
  endDate: Date;
  role: string;
  achievements: Array<string>;
}

export interface Workplace {
  employer: string;
  jobs: Array<Job>;
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

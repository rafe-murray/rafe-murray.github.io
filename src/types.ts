import type React = require('react');

export type SVG = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & {
    title?: string;
  }
>;

export type SkillKey =
  | 'Angular'
  | 'Bash'
  | 'C'
  | 'C++'
  | 'CMake'
  | 'CSS'
  | 'Docker'
  | 'Git'
  | 'GitHub'
  | 'GitLab'
  | 'HTML'
  | 'Java'
  | 'JavaScript'
  | 'Kotlin'
  | 'MatLab'
  | 'MongoDB'
  | 'MySQL'
  | 'PHP'
  | 'PostgreSQL'
  | 'ProtoBuf'
  | 'Python'
  | 'React'
  | 'SystemVerilog'
  | 'Tailwind CSS'
  | 'TypeScript'
  | 'Verilog';

export interface Skill {
  title: SkillKey;
  icon: SVG;
  darkIcon?: SVG;
}

export interface Project {
  header: string;
  content: string | React.ReactNode[];
  skills: SkillKey[];
  github?: string;
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

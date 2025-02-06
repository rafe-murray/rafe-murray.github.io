import {ReactComponent as Angular} from '../assets/tech/angular.svg';
import {ReactComponent as Bash} from '../assets/tech/bash.svg';
import {ReactComponent as C} from '../assets/tech/c.svg';
import {ReactComponent as Cpp} from '../assets/tech/cpp.svg';
import {ReactComponent as Css} from '../assets/tech/css.svg';
import {ReactComponent as Git} from '../assets/tech/git.svg';
import {ReactComponent as Github} from '../assets/tech/github.svg';
import {ReactComponent as GithubWhite} from '../assets/tech/github-white.svg';
import {ReactComponent as Gitlab} from '../assets/tech/gitlab.svg';
import {ReactComponent as Html} from '../assets/tech/html.svg';
import {ReactComponent as Java} from '../assets/tech/java.svg';
import {ReactComponent as Js} from '../assets/tech/js.svg';
import {ReactComponent as Matlab} from '../assets/tech/matlab.svg';
import {ReactComponent as Mysql} from '../assets/tech/mysql.svg';
import {ReactComponent as Php} from '../assets/tech/php.svg';
import {ReactComponent as Postgresql} from '../assets/tech/postgresql.svg';
import {ReactComponent as Python} from '../assets/tech/python.svg';
import {ReactComponent as React} from '../assets/tech/react.svg';
import {ReactComponent as Tailwind} from '../assets/tech/tailwind.svg';

export const skills = [
    {title: "Python", Icon: Python},
    {title: "MySQL", Icon: Mysql},
    {title: "PostgreSQL", Icon: Postgresql},
    {title: "PHP", Icon: Php},
    {title: "Bash", Icon: Bash},
    {title: "Java", Icon: Java},
    {title: "C", Icon: C},
    {title: "C++", Icon: Cpp},
    {title: "Git", Icon: Git},
    {title: "GitHub", Icon: Github, dark: GithubWhite},
    {title: "GitLab", Icon: Gitlab},
    {title: "HTML", Icon: Html},
    {title: "CSS", Icon: Css},
    {title: "Tailwind CSS", Icon: Tailwind},
    {title: "JavaScript", Icon: Js},
    {title: "React", Icon: React},
    {title: "Angular", Icon: Angular},
    {title: "MatLab", Icon: Matlab},   
];

const skillsList = {};
skills.forEach(skill => {
    skillsList[skill.title] = skill
})
export {skillsList}

export const projects = [
    {header: "Image processing", content: "Implemented a variety of image processing methods on an abstract data type in Java", skills:["Java"]},
    {header: "Scrapers", content: "Reimplemented Django Python scrapers of Canadian elected officials’ information on 75 websites and stored it in a database for later use by a petition service", skills: ["Python", "PostgreSQL"], github:"https://github.com/search?q=org%3Aopencivicdata+is%3Apr+author%3Arafe-murray+is%3Amerged&type=pullrequests"},
    {header: "Candidate Dashboard", content: "Developed displays of candidate information in PHP for an online educational certification system for the Construction Industry Licensing Board of Florida", skills: ["JavaScript", "PHP", "MySQL", "HTML","Angular"]},
    {header: "Waitlist Functionality", content: "Created functionality using a low code framework and PHP to manage counselling waitlists and scheduling appointments for the Sexual Assault Centre of Edmonton", skills: ["PHP","MySQL"]},
    {header: "JMA Website", content: "Implemented responsive designs from figma on a wordpress site using HTML and CSS", skills:["CSS", "HTML"]},
    {header: "Patching Script", content: "Created an internal company gitlab CI/CD pipeline on code pushes that runs my bash script to reapply patches to site files and if there are conflicts notify an administrator otherwise merge the changes to the repo without triggering the same pipeline", skills: ["Bash", "Git", "GitLab"]},
    {header: "Mechanical Claw", content: "Wrote an Arduino C++ program to read a sensor indicating when an item was in range of a claw, and then controlled a servo motor to gradually close the claw on the item", skills: ["C", "C++"]},
    {header: "Tic-Tac-Toe Bot", content: "Developed a bot in C to read player inputs and implements strategies to always win or draw a Tic-Tac-Toe game", skills: ["C"], github: "https://github.com/rafe-murray/tictactoe-bot"},
    {header: "Memory Game", content: "Created a game in C++ where a player would press buttons in the order that corresponding lights had randomly flashed, with each round increasing speed. Arduino button presses and light activation were simulated with TinkerCAD", skills: ["C", "C++"]},
    {header: "Portfolio Website", content: "Built a responsive website showcasing personal skills and accomplishments using React and Tailwind CSS, hosted through GitHub Pages", skills: ["React", "JavaScript", "Tailwind CSS", "CSS", "HTML", "Git", "GitHub"], github: "https://github.com/rafe-murray/rafe-murray.github.io"},
]

export const work = [
    {employer: "JMA Consulting", jobs: [
        {date: "May 2024 – August 2024", role: "Junior Software Developer", achievements: <ul className='list-disc ps-4'><li>Reimplemented Django Python scrapers of Canadian elected officials’ information on 75 websites and stored it in a database for later use by a petition service</li><li>Created functionality using a low code framework and PHP to manage counselling waitlists and scheduling appointments for the Sexual Assault Centre of Edmonton</li><li>Developed displays of candidate information in PHP for an online educational certification system for the Construction Industry Licensing Board of Florida</li><li>Custom responsive styling of Bootstrap based theme for new company website</li><li>Created an internal company gitlab CI/CD pipeline on code pushes that runs my bash script to reapply patches to site files and if there are conflicts notify an administrator otherwise merge the changes to the repo without triggering the same pipeline</li></ul>},
        {date: "July 2023 – August 2023", role: "Junior Software Developer", achievements: <ul className='list-disc ps-4'><li>Developed a client management application for a software company specializing in building websites and constituent relationship management systems for nonprofits</li><li>Implemented custom entities to represent contracts, servers, clients, websites</li><li>Created PHP script to import Excel data into MySQL database</li><li>Created form in PHP to on-board new clients and create relevant entities</li></ul>},
    ]},
]

export const courses = [
    {year: "Second year", courses: [
        {code: "MATH 253", title: "Multivariable Calculus", mark: "N/A"},
        {code: "CPEN 281", title: "Technical Communication", mark: "N/A"},
        {code: "CPEN 221", title: "Software Construction I (A)", mark: "N/A"},
        {code: "CPEN 211", title: "Computing Systems I", mark: "N/A"},
        {code: "MATH 220", title: "Mathematical Proof", mark: "N/A"},
        {code: "ELEC 201", title: "Circuit Analysis I", mark: "N/A"},
        {code: "MATH 256", title: "Differential Equations", mark: "N/A"},
        {code: "CPSC 221", title: "Basic Algorithms and Data Structures", mark: "N/A"},
        {code: "CPEN 212", title: "Computing Systems II", mark: "N/A"},
        {code: "KIN\u2002 150"/** en-space to preserve alignment of second column of text */, title: "Sport and Exercise Psychology", mark: "N/A"},
    ]},
    {year: "First year", courses: [
        {code: "APSC 100", title: "Introduction to Engineering I", mark: "85%"},
        {code: "APSC 101", title: "Introduction to Engineering II", mark: "82%"},
        {code: "APSC 160", title: "Introduction to Computation in Engineering Design", mark: "98%"},
        {code: "CHEM 154", title: "Chemistry for Engineering", mark: "87%"},
        {code: "GERN 101", title: "Learning German 1", mark: "94%"},
        {code: "MATH 100", title: "Differential Calculus with Applications", mark: "93%"},
        {code: "MATH 101", title: "Integral Calculus with Applications", mark: "96%"},
        {code: "MATH 152", title: "Linear Systems", mark: "94%"},
        {code: "PHYS 157", title: "Introductory Physics for Engineers I", mark: "91%"},
        {code: "PHYS 158", title: "Introductory Physics for Engineers II", mark: "95%"},
        {code: "PHYS 159", title: "Introductory Physics Laboratory for Engineers", mark: "92%"},
        {code: "PHYS 170", title: "Mechanics I", mark: "97%"},
        {code: "WRDS 150", title: "Writing and Research in the Disciplines", mark: "80%"},
    ]},
    {year: "Grade 12", courses: [
        {code: "AMR 4M1", title: "Repertoire", mark: "97%"},
        {code: "ENG 4U1", title: "English", mark: "97%"},
        {code: "FEF 4U1", title: "Extended French", mark: "99%"},
        {code: "MHF 4U1", title: "Advanced Functions", mark: "99%"},
        {code: "SPH 4U1", title: "Physics", mark: "100%"},
        {code: "AMV 4M1", title: "Music - Vocal/Choral", mark: "98%"},
        {code: "HRE 4M1", title: "Religious Education", mark: "93%"},
        {code: "MCV 4U1", title: "Calculus and Vectors", mark: "99%"},
        {code: "SCH 4U1", title: "Chemistry", mark: "98%"},
    ]},
    {year: "Grade 11", courses: [
        {code: "AMV 3M1", title: "Music - Vocal/Choral", mark: "96%"},
        {code: "FEF 3U1", title: "Extended French", mark: "99%"},
        {code: "HSP 3U1", title: "Introduction to Anthropology, Psychology, and Sociology", mark: "96%"},
        {code: "SBI 3U1", title: "Biology", mark: "98%"},
        {code: "SCH 3U1", title: "Chemistry", mark: "98%"},
        {code: "AMR 3M1", title: "Repertoire", mark: "98%"},
        {code: "ENG 3U1", title: "English", mark: "97%"},
        {code: "HRT 3M1", title: "World Religions and Belief Traditions: Perspectives, Issues, and Challenges", mark: "93%"},
        {code: "MCR 3U1", title: "Functions", mark: "99%"},
        {code: "SPH 3U1", title: "Physics", mark: "99%"},
    ]},
    {year: "Grade 10", courses: [
        {code: "CHC 2DF", title: "Canadian History Since World War I", mark: "96%"},
        {code: "SNC 2D1", title: "Science", mark: "97%"},
        {code: "AMV 2O1", title: "Music - Vocal/Choral", mark: "95%"},
        {code: "FEF 2D1", title: "Extended French", mark: "98%"},
        {code: "HRE 2O1", title: "Religious Education", mark: "93%"},
        {code: "CHV 2OF", title: "Civics and Citizenship", mark: "98%"},
        {code: "ENG 2D1", title: "English", mark: "96%"},
        {code: "GLC 2OF", title: "Career Studies", mark: "99%"},
        {code: "PPL 2O3", title: "Healthy Active Living Education", mark: "95%"},
        {code: "AMR 2O1", title: "Repertoire", mark: "99%"},
        {code: "AMU 2O3", title: "Music", mark: "100%"},
        {code: "MPM 2D1", title: "Principles of Mathematics", mark: "99%"},
    ]},
    {year: "Grade 9", courses: [
        {code: "AMR 1O1", title: "Repertoire", mark: "94%"},
        {code: "AMV 1O1", title: "Music - Vocal/Choral", mark: "97%"},
        {code: "CGC 1DF", title: "Issues in Canadian Geography", mark: "94%"},
        {code: "ENG 1D1", title: "English", mark: "94%"},
        {code: "FEF 1D1", title: "Extended French", mark: "93%"},
        {code: "GLS 1O1", title: "Learning Strategies I - Skills for Success in Secondary School", mark: "96%"},
        {code: "MPM 1D1", title: "Principles of Mathematics", mark: "100%"},
        {code: "PPL 1O3", title: "Healthy Active Living Education", mark: "97%"},
        {code: "SNC 1D1", title: "Science", mark: "98%"},
        {code: "AMU 1O3", title: "Music", mark: "95%"},
        {code: "HRE 1O1", title: "Religious Education", mark: "99%"},
    ]},
]
import resume from '../assets/Rafe_Murray_Resume.pdf';

export default function Resume(){
    return (
        <a href={resume} title="View my resume" className="bg-zinc-800 dark:bg-gray-100 text-white dark:text-black p-3 rounded-md font-bold text-lg hover:scale-105">My Resume</a>
    );
}
import About from "../components/About";
import Skills from "../components/Skills";
import Work from "../components/Work";
import Projects from "../components/Projects";
import Education from "../components/Education";

import { useCustomScroll } from "../useCustomScroll.js";
import darkmode from "../darkmode";

export default function Home(){
    useCustomScroll();
    return(
        <>
            <script async={true} src={darkmode}/>
            <About />
            <Skills />
            <Work />
            <Education />
            <Projects />
        </>
    );
}

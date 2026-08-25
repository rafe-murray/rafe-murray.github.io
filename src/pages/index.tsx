import About from '../components/About';
import Skills from '../components/Skills';
import Work from '../components/Work';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Layout from '@theme/Layout';

import { useCustomScroll } from '../useCustomScroll';
// import darkmode from '../darkmode';

export default function Home() {
  useCustomScroll();
  return (
    <>
      <Layout>
        <div className="tw:pt-4 tw:px-8" >
          <About />
          <Skills />
          <Work />
          <Education />
          <Projects />
        </div>
      </Layout>
    </>
  );
}

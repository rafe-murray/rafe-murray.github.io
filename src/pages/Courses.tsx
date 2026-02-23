import { courseLoads } from '../constants';
import Section from '../components/Section';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCustomScroll } from '../useCustomScroll';
import CourseLoadElement from '../components/CourseLoad';

export default function Courses() {
  useCustomScroll();
  const content = (
    <>
      <div className="grid sm:grid-cols-2 sm:gap-x-5 grid-cols-1">
        {courseLoads.map(courseLoad => <CourseLoadElement courseLoad={courseLoad}/>)}
      </div>
    </>
  );
  return (
    <>
      <div className="max-w-7xl items-top mx-auto place-content-center px-4 pt-24">
        <Link
          to=".."
          className="py-4 pr-6 pl-2 hover:bg-gray-100 dark:hover:bg-dark-800 rounded-md text-zinc-800 dark:text-gray-50"
        >
          <FontAwesomeIcon icon="chevron-left" />
          <span> Return to main site</span>
        </Link>
      </div>
      <Section header="Courses" content={content} />
    </>
  );
}

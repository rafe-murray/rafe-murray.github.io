import { courseLoads } from '../constants';
import Section from '../components/Section';
import Link from '@docusaurus/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCustomScroll } from '../useCustomScroll';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import CourseLoadElement from '../components/CourseLoad';
import Layout from '@theme/Layout';

export default function Courses() {
  useCustomScroll();
  const content = (
    <>
      <div className="tw:grid tw:sm:grid-cols-2 tw:sm:gap-x-5 tw:grid-cols-1">
        {courseLoads.map(courseLoad => <CourseLoadElement courseLoad={courseLoad} />)}
      </div>
    </>
  );
  return (
    <Layout>
      <div className="tw:pt-4 tw:px-8" >
        <div className="tw:max-w-7xl tw:items-top tw:mx-auto tw:place-content-center tw:pt-16">
          <Link
            to=".."
            className="tw:py-4 tw:pr-6 tw:hover:bg-gray-100 tw:dark:hover:bg-dark-800 tw:rounded-md tw:text-zinc-800 tw:dark:text-gray-50"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
            <span> Return to main site</span>
          </Link>
        </div>
        <Section header="Courses" content={content} />
      </div>
    </Layout>
  );
}

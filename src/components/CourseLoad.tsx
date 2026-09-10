import { card } from "../styles";
import { CourseLoad } from "../types";
import CourseElement from "./CourseElement";

export default function CourseLoadElement({ courseLoad }: { courseLoad: CourseLoad }) {
  return (
    <div className={card}>
      <h3 className="tw:text-3xl tw:font-semibold tw:text-zinc-800 tw:dark:text-gray-50 tw:pb-8">
        {courseLoad.year}
      </h3>
      <table className="tw:w-full">
        <tbody>
          {courseLoad.courses.map(course => (
            <CourseElement course={course} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

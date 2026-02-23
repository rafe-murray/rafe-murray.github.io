import { card } from "../styles";
import { CourseLoad } from "../types";
import CourseElement from "./CourseElement";

export default function CourseLoadElement({courseLoad}:{courseLoad: CourseLoad}){
  return (
    <div className={card}>
      <h3 className="text-3xl font-semibold text-zinc-800 dark:text-gray-50 pb-8">
        {courseLoad.year}
      </h3>
      <table className="w-full">
        <tbody>
          {courseLoad.courses.map(course => (
            <CourseElement course={course}/>
          ))}
        </tbody>
      </table>
    </div>
);
}

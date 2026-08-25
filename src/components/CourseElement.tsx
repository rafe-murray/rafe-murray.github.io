import { Course } from "../types"
import { td } from '../styles';

export default function CourseCard({ course }: { course: Course }) {
  return (
    <tr className="tw:bg-inherit! tw:border-b-2 tw:dark:border-gray-500">
      <td className={td + ' tw:pr-10 tw:font-mono tw:whitespace-nowrap'}>
        {course.code}
      </td>
      <td className={td}>{course.title}</td>
      <td className={td + ' tw:w-[15%]'}>{course.percentageGrade + "%"}</td>
    </tr>);
}

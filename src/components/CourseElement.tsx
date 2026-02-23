import { Course} from "../types"
import { p } from '../styles';

export default function CourseCard({course}: {course: Course}){
	return (
            <tr className="border-b-2 dark:border-gray-500">
              <td className={p + ' pr-10 py-2 font-mono whitespace-nowrap'}>
                {course.code}
              </td>
              <td className={p + ' py-2'}>{course.title}</td>
              <td className={p + ' w-[15%] py-2'}>{course.percentageGrade + "%"}</td>
            </tr>);
}

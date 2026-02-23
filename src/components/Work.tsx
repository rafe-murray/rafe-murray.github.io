import Section from "./Section";
import { work } from "../constants";
import { card, h3, h4, p } from "../styles";
import { dateToMonthYearString } from "../utils";

export default function Work() {
  const content = work.map(work =>
    <div className={card}>
      <h3 className={h3}>{work.employer}</h3>
      {work.jobs.map(job =>
        <div className="pb-10">
          <div className="flex flex-col sm:flex-row justify-between">
            <h4 className={h4}>{job.role}</h4>
            <h4 className={h4}>{dateToMonthYearString(job.startDate) + " - " + dateToMonthYearString(job.endDate)}</h4>
          </div>
          <p className={p}>
            <ul className="list-disc ps-4">
              {job.achievements.map(achievement => <li>{achievement}</li>)}
            </ul>
          </p>
        </div>
      )}
    </div>
  );

  return (
    <Section header="Work Experience" content={content} />
  );
}

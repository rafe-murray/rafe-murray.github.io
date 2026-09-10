import Section from "./Section";
import { work } from "../constants";
import { card, h3, h4, p, ul } from "../styles";
import { dateToMonthYearString } from "../utils";

export default function Work() {
  const content = work.map(work =>
    <div key={work.employer} className={card}>
      <h3 className={h3}>{work.employer}</h3>
      {work.jobs.map(job =>
        <div key={job.startDate.toISOString()}>
          <div className="tw:flex tw:flex-col tw:sm:flex-row tw:justify-between">
            <h4 className={h4}>{job.role}</h4>
            <h4 className={h4}>{dateToMonthYearString(job.startDate) + " - " + dateToMonthYearString(job.endDate)}</h4>
          </div>
          <div className={p}>
            <ul className={ul}>
              {job.achievements.map((achievement, index) => <li key={index}>{achievement}</li>)}
            </ul>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <Section header="Work Experience" content={content} />
  );
}

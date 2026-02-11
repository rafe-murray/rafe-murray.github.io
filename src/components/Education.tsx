import Section from './Section';
import { card, h3, h4, p } from '../styles';
import CallToAction from './CallToAction';

export default function Education() {
  const content = (
    <>
      <div className={card}>
        <h3 className={h3}>The University of British Columbia</h3>
        <div className="pb-10">
          <div className="flex flex-col sm:flex-row justify-between">
            <h4 className={h4}>BASc in Computer Engineering</h4>
            <h4 className={h4}>September 2023 – May 2027</h4>
          </div>
          <p className={p}>
            I am currently entering my second year of Computer Engineering at
            UBC. In first year, I achieved a 91% average, placing on the Dean’s
            list. In addition, I earned 98% in Introduction to Computation in
            Engineering Design (APSC 160) and received the Trek Excellence
            Scholarship for first-year marks in top 5% of program. I am excited
            to continue to learn more about computer engineering in the coming
            years of my degree.
          </p>
        </div>
      </div>
      <div className={card}>
        <h3 className={h3}>Saint Michael’s Choir School</h3>
        <div className="pb-10">
          <div className="flex flex-col sm:flex-row justify-between">
            <h4 className={h4}>High School Diploma</h4>
            <h4 className={h4}>September 2019 – June 2023</h4>
          </div>
          <p className={p}>
            <ul className="list-disc ps-4">
              <li>
                Received the Governor General’s Academic Medal for the highest
                average in the graduating class at a consistently academically
                top-ranked school, Extended French Certificate and Ontario
                Scholar
              </li>
              <li>
                Graduated with subject awards in Advanced Functions, Calculus
                and Vectors, Chemistry, French, Physics and Vocal Music
              </li>
              <li>
                First place in school in University of Waterloo mathematics
                contests for grades 9 through 12 (Pascal, Cayley, Fermat, Euclid
                and Senior Mathematics)
              </li>
              <li>
                Participated in the Lloyd Auckland Invitational in 2022, an
                invite-only week long event held for 70 top students in
                Waterloo’s Fermat contest
              </li>
            </ul>
          </p>
        </div>
      </div>
      <CallToAction path="/courses" label="See all my courses" />
    </>
  );

  return <Section header="Education" content={content} />;
}

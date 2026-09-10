import profilePicture from '../assets/rafe-murray.jpg';
import Button from './Button';
import { h1, p } from '../styles';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

export default function About() {
  return (
    <div id="About">
      <div className="tw:max-w-7xl tw:flex tw:flex-col tw:sm:flex-row tw:items-center tw:mx-auto tw:place-content-center tw:pb-4 tw:min-h-screen">
        <div className="tw:sm:w-2/3 tw:sm:pr-6">
          <h1 className={h1}>Hi, I'm Rafe</h1>
          <p className={p + ' tw:text-lg'}>
            I'm an aspiring systems programmer, currently studying Computer
            Engineering at the University of British Columbia. I've received
            outstanding marks in school and evaluations at work - doing digital
            circuit design and software development. I'm interested how we can
            improve systems by building more performant hardware and leveraging
            it at a software level. In my free time, I enjoy competing on the
            UBC nordic skiing team, playing piano (especially romantic era and
            Jazz pieces), and running/going to the gym.
          </p>
          <div className="tw:items-center tw:flex tw:pb-8">
            <Button
              target="_blank"
              title="See my projects on Github"
              href="https://github.com/rafe-murray"
              icon={faGithub}
            />
            <Button
              target="_blank"
              title="View my profile on Linkedin"
              href="https://www.linkedin.com/in/rafe-murray"
              icon={faLinkedin}
            />
            <Button
              title="Email me"
              href="mailto:rafemurr@gmail.com"
              icon={faEnvelope}
            />
          </div>
        </div>
        <img
          src={profilePicture}
          className="tw:sm:max-w-[33.33333%] tw:rounded-lg"
          alt="Headshot of Rafe Murray"
        />
      </div>
    </div>
  );
}

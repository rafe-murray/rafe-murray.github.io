import Resume from "./Resume";
import profilePicture from "../assets/rafe-murray.jpg";
import Button from "./Button";
import { h1, p } from "../styles";

export default function About() {
  return (
    <div id="About">
      <div className="max-w-7xl flex flex-col sm:flex-row items-center mx-auto place-content-center p-4 pt-20 min-h-screen">
        <div className="sm:w-2/3 sm:pr-6">
          <h1 className={h1}>Hi, I'm Rafe</h1>
          <p className={p + " text-lg"}>
            I'm an aspiring systems programmer, currently studying Computer
            Engineering at the University of British Columbia. I've received
            outstanding marks in school and evaluations at work - doing digital
            circuit design and software development. I'm interested how we can
            improve systems by building more performant hardware and leveraging
            it at a software level. In my free time, I enjoy competing on the
            UBC nordic skiing team, playing piano (especially romantic era and
            Jazz pieces), and running/going to the gym.
          </p>
          <div className="items-center flex py-8">
            <Resume />
            <Button
              target="_blank"
              title="See my projects on Github"
              href="https://github.com/rafe-murray"
              icon="fa-brands fa-github"
            />
            <Button
              target="_blank"
              title="View my profile on Linkedin"
              href="https://www.linkedin.com/in/rafe-murray"
              icon="fa-brands fa-linkedin"
            />
            <Button
              title="Email me"
              href="mailto:rafemurr@gmail.com"
              icon="fa-regular fa-envelope"
            />
          </div>
        </div>
        <img
          src={profilePicture}
          alt="Headshot of Rafe Murray"
          className="sm:max-w-[33.33333%] rounded-lg"
        />
      </div>
    </div>
  );
}


import Section from "./Section";
import Skill from "./Skill";
import { projects } from "../constants";
import { card, h4, p } from "../styles";
import { skillsMap } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Projects() {
  const content = projects.map((project) => (
    <div className={card}>
      <h4 className={h4}>
        {project.header}
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            title="View GitHub repo"
            className="pl-6 text-2xl"
          >
            <FontAwesomeIcon
              icon="fa-brands fa-github"
              className="hover:scale-105"
            />
          </a>
        ) : (
          ""
        )}
      </h4>
      <p className={p + " pb-16"}>{project.content}</p>
      <div className="flex flex-row flex-wrap gap-6">
        {project.skills.map((skill) => {
          const skillObj = skillsMap.get(skill)!;
          return (
            <>
              <Skill
                title={skillObj.title}
                Icon={skillObj.icon}
                className={
                  (skillObj.darkIcon ? "flex dark:hidden " : "") +
                  "size-14 aspect-square"
                }
              />
              {skillObj.darkIcon ? (
                <Skill
                  title={skillObj.title}
                  Icon={skillObj.darkIcon}
                  className="hidden dark:flex size-14 aspect-square"
                />
              ) : (
                ""
              )}
            </>
          );
        })}
      </div>
    </div>
  ));
  return <Section header="Projects" content={content} />;
}

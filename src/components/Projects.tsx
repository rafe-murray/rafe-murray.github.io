import Section from "./Section";
import SkillElement from "./Skill";
import { projects } from "../constants";
import { card, h4, p } from "../styles";
import { skillsMap } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SkillKey, Skill } from "../types";
import { arrayIntersection } from "../utils";
import { useState } from "react";
import { Chip } from "@mui/material";

// TODO: move to own file
function SkillChip({ skill, onClick }: { skill: Skill, onClick: (skillKey: SkillKey) => void }) {
  const [isSelected, setIsSelected] = useState(false);
  return <Chip
    avatar={<skill.icon />}
    label={skill.title}
    onClick={() => { onClick(skill.title); setIsSelected(prevState => !prevState) }}
    className={isSelected ? "!bg-cyan-400" : "bg-slate-100"}
  />
}

export default function Projects() {
  const [selectedSkills, setSelectedSkills] = useState<SkillKey[]>([]);

  function toggleSkillSelected(skillKey: SkillKey): void {
    if (selectedSkills.includes(skillKey)) {
      setSelectedSkills(selectedSkills.filter(selectedSkill => selectedSkill !== skillKey));
    } else {
      setSelectedSkills(selectedSkills.concat(skillKey));
    }
  }

  const skillChips = [...skillsMap.values()].map(skill => (
    <SkillChip key={skill.title} skill={skill} onClick={toggleSkillSelected} />)
  );
  const content = projects.filter(project => arrayIntersection(selectedSkills, project.skills).length > 0).map((project) => (
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
              <SkillElement
                title={skillObj.title}
                Icon={skillObj.icon}
                className={
                  (skillObj.darkIcon ? "flex dark:hidden " : "") +
                  "size-12 aspect-square"
                }
              />
              {skillObj.darkIcon ? (
                <SkillElement
                  title={skillObj.title}
                  Icon={skillObj.darkIcon}
                  className="hidden dark:flex size-12 aspect-square"
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

  return <Section header="Projects" content={<>
    <p className={p}>Toggle one or more icons to see all associated projects</p>
    <div className="py-4">
      {skillChips}
    </div>
    {content}
  </>} />;
}

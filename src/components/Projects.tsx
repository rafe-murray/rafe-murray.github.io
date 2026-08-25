import Section from "./Section";
import SkillElement from "./Skill";
import { projects } from "../constants";
import { card, h4, p, skillElementCommon } from "../styles";
import { skillsMap } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDarkModeIcon } from "../utils";
import { SkillKey, Skill } from "../types";
import { arrayIntersection } from "../utils";
import { useState } from "react";
import { Chip } from "@mui/material";
import ThemedIcon from "./Icon";

// TODO: move to own file
function SkillChip({ skill, onClick }: { skill: Skill, onClick: (skillKey: SkillKey) => void }) {
  const [isSelected, setIsSelected] = useState(false);
  const DarkModeIcon = getDarkModeIcon(skill);
  return <Chip
    avatar={isSelected ? <DarkModeIcon /> : <ThemedIcon Icon={skill.icon} DarkIcon={skill.darkIcon} />
    }
    label={skill.title}
    onClick={() => { onClick(skill.title); setIsSelected(prevState => !prevState) }}
    sx={{
      m: 0.3,
      p: 0.5,
      color: "currentColor"
    }}
    className={isSelected ? "tw:text-zinc-800! tw:bg-cyan-400!" : "tw:dark:bg-slate-800! tw:bg-slate-100!"}
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
    <div className={card} key={project.header}>
      <h4 className={h4}>
        {project.header}
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            title="View GitHub repo"
            className="tw:pl-6 tw:text-2xl"
          >
            <FontAwesomeIcon
              icon={["fab", "github"]}
              className="tw:hover:scale-105"
            />
          </a>
        ) : (
          ""
        )}
      </h4>
      <p className={p}>{project.content}</p>
      <div className="tw:flex tw:flex-row tw:flex-wrap tw:gap-6">
        {project.skills.map((skill) => {
          const skillObj = skillsMap.get(skill)!;
          return (
            <>
              <SkillElement
                key={skillObj.title}
                title={skillObj.title}
                Icon={skillObj.icon}
                className={skillElementCommon}
                DarkIcon={skillObj.darkIcon}
              />
            </>
          );
        })}
      </div>
    </div>
  ));

  return <Section header="Projects" content={<>
    <p className={p}>Toggle one or more icons to see all associated projects</p>
    <div className="tw:pb-4">
      {skillChips}
    </div>
    {content}
  </>} />;
}

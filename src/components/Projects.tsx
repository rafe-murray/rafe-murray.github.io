import Section from "./Section";
import SkillElement from "./Skill";
import { projects } from "../constants";
import { card, h4, p, skillElementCommon } from "../styles";
import { skillsMap } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDarkModeIcon } from "../utils";
import { Skill, SkillKey } from "../types";
import { arrayIntersection } from "../utils";
import { useState } from "react";
import { Chip } from "@mui/material";
import ThemedIcon from "./Icon";
import ProjectSkills from "./ProjectSkills";

// TODO: move to own file
function SkillChip({ skill, numUses, onClick }: { skill: Skill, numUses: number, onClick: (skillKey: SkillKey) => void }) {
  const [isSelected, setIsSelected] = useState(false);
  const DarkModeIcon = getDarkModeIcon(skill);
  return <Chip
    avatar={isSelected ? <DarkModeIcon /> : <ThemedIcon Icon={skill.icon} DarkIcon={skill.darkIcon} />
    }
    label={<>
      {skill.title}
      <span className={'tw:inline-flex tw:justify-center tw:items-center tw:ml-1 tw:p-1 tw:w-6 tw:h-6 tw:rounded-full ' + (isSelected ? "tw:text-zinc-800 tw:bg-cyan-300" : "tw:bg-slate-200 tw:dark:bg-zinc-600")}>{numUses}</span>
    </>}
    onClick={() => { onClick(skill.key); setIsSelected(prevState => !prevState) }}
    sx={{
      m: 0.3,
      p: 0.5,
      color: "currentColor",
      '& .MuiChip-label': {
        // Reduce right padding since we already have padding on label text to show a circle
        paddingRight: '4px'
      }
    }}
    className={isSelected ? "tw:text-zinc-800! tw:bg-cyan-400!" : "tw:dark:bg-zinc-800! tw:bg-slate-100!"}
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

  const projectsPerSkill = new Map<SkillKey, number>;
  Object.values(projects).forEach(project => {
    project.skills.forEach(skillKey => {
      projectsPerSkill.set(skillKey, (projectsPerSkill.get(skillKey) || 0) + 1);
    })
  });
  const skillChips = [...skillsMap.values()].sort(
    (a, b) => (projectsPerSkill.get(b.key) || 0) - (projectsPerSkill.get(a.key) || 0)
  ).map(skill => (
    <SkillChip key={skill.key} skill={skill} numUses={projectsPerSkill.get(skill.key) || 0} onClick={toggleSkillSelected} />)
  );
  const content = Object.values(projects).filter(project => arrayIntersection(selectedSkills, project.skills).length > 0).map((project) => (
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
      <ProjectSkills project={project} />
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

import Section from "./Section";
import { skillsMap } from "../constants";
import SkillElement from "./Skill";
import { Skill } from "../types";

export default function Skills(){
  var skillsArr: Skill[] = [];
  skillsMap.forEach(el => {
    skillsArr.push(el)
  });
  const skillCards = skillsArr.map(skill =>
      <>
      <SkillElement title={skill.title} Icon={skill.icon} className={(skill.darkIcon ? "flex dark:hidden " : "") + "size-20 aspect-square"}/>
      {skill.darkIcon? 
          <SkillElement title={skill.title} Icon={skill.darkIcon} className="hidden dark:flex size-20 aspect-square" /> 
          : ""}
      </>
  );
  const content = <div className="flex flex-row flex-wrap gap-6 justify-center pb-12">{skillCards}</div>
  return (
      <Section header="Skills" content={content}/>
  );
}

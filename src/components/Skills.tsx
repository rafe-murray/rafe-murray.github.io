import Section from "./Section";
import { skillsMap } from "../constants";
import SkillElement from "./Skill";
import { Skill } from "../types";
import { skillCardsContainer, skillElementCommon } from "../styles";

export default function Skills() {
  var skillsArr: Skill[] = [];
  skillsMap.forEach(el => {
    skillsArr.push(el)
  });
  const skillCards = skillsArr.map(skill =>
    <SkillElement title={skill.title} Icon={skill.icon} DarkIcon={skill.darkIcon} className={skillElementCommon} />
  );
  const content = <div className={skillCardsContainer}>{skillCards}</div>
  return (
    <Section header="Skills" content={content} />
  );
}

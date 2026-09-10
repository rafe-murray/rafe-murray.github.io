import { type Project } from '../types';
import { skillsMap } from '../constants';
import SkillElement from './Skill';
import { skillElementCommon } from '../styles';
export default function ProjectSkills({ project }: { project: Project }) {
  return (
    <div className="tw:flex tw:flex-row tw:flex-wrap tw:gap-6">
      {project.skills.map((skill) => {
        const skillObj = skillsMap.get(skill);
        if (skillObj == null) {
          console.error(`Skill not found: ${skill}`);
          return <></>
        }
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
  )
}

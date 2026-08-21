import Tooltip from '@mui/material/Tooltip';
import { skillElementDark, skillElementLight } from '../styles';
import { SVG } from '../types';

export default function Skill({ title, Icon, DarkIcon, className }: { title: string, Icon: SVG, DarkIcon?: SVG | undefined, className: string }) {
  return (
    <Tooltip title={title} placement="top" arrow>
      <span>
        {
          DarkIcon
            ? <DarkIcon className={skillElementDark + " " + className} />
            : <Icon className={skillElementLight + " " + className} />
        }
      </span>
    </Tooltip>
  );
}

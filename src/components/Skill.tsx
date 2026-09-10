import Tooltip from '@mui/material/Tooltip';
import { iconBoth, iconDark, iconLight } from '../styles';
import { SVG } from '../types';
import ThemedIcon from './Icon';

export default function Skill({ title, Icon, DarkIcon, className }: { title: string, Icon: SVG, DarkIcon?: SVG | undefined, className: string }) {
  return (
    <Tooltip title={title} placement="top" arrow>
      <span>
        <ThemedIcon Icon={Icon} DarkIcon={DarkIcon} className={className} />
      </span>
    </Tooltip>
  );
}

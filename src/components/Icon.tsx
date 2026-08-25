import { iconBoth, iconDark, iconLight } from '../styles';
import { SVG } from '../types';
export default function ThemedIcon({ Icon, DarkIcon, className }: { Icon: SVG, DarkIcon?: SVG, className?: string }) {
  return (
    DarkIcon
      ? <><DarkIcon className={iconDark + " " + className} /><Icon className={iconLight + " " + className} /></>
      : <Icon className={iconBoth + " " + className} />
  );
}

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export default function Button({ title, href, icon, target }: { title: string, href: string, icon: IconDefinition, target?: string }) {
  return (
    <a target={target} href={href} title={title} className="tw:text-3xl tw:inline-block tw:p-2">
      <FontAwesomeIcon
        icon={icon}
        className="tw:h-12 tw:text-zinc-800 tw:dark:text-gray-100 tw:hover:scale-105"
      />
    </a>
  );
}


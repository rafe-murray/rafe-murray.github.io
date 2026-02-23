import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export default function Button({ title, href, icon, target }: { title: string, href: string, icon: IconDefinition, target?: string }) {
  return (
    <a target={target} href={href} title={title} className="inline-block p-2">
      <FontAwesomeIcon
        icon={icon}
        className="h-[3rem] text-zinc-800 dark:text-gray-100 hover:scale-105"
      />
    </a>
  );
}


export default function FileDownload({href, title, className, content}: {href: string, title: string, className?: string, content: string}) {
  return (
    <a
      href={href}
      title={title}
      className={"bg-zinc-800 dark:bg-gray-100 text-white dark:text-black p-3 rounded-md font-bold text-lg hover:scale-105 " + className}
      target="_blank" rel="noreferrer"
    >
      {content}
    </a>
  );
}


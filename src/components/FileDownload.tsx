export default function FileDownload({ href, title, className, content }: { href: string, title: string, className?: string, content: string }) {
  return (
    <a
      href={href}
      title={title}
      className={"tw:bg-zinc-800 tw:dark:bg-gray-100 tw:text-white tw:dark:text-black tw:p-3 tw:rounded-md tw:font-bold tw:text-lg tw:hover:scale-105 " + className}
      target="_blank" rel="noreferrer"
    >
      {content}
    </a>
  );
}


import Link from "@docusaurus/Link";

export default function CallToAction({ path, label }) {

  return (
    <div className="tw:pt-8 tw:flex tw:text-center tw:justify-center">
      <Link to={path} className="tw:bg-cyan-400 tw:hover:bg-cyan-500 tw:rounded-full tw:py-3 tw:block tw:w-64 tw:justify-items-center tw:text-xl tw:text-zinc-800" >{label}</Link>
    </div>
  );
}

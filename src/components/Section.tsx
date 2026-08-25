import { h2 } from "../styles";

export default function Section({ header, content }: { header: string, content: React.ReactElement | React.ReactElement[] }) {
  const id = (header.split(' ')[0] ?? header).toLowerCase();
  return (
    <div key={id} id={id}>
      <div className="tw:max-w-7xl tw:items-top tw:mx-auto tw:place-content-center">
        <h2 className={h2}>{header}</h2>
        {content}
      </div>
    </div>
  );
}

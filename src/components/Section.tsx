import { h2 } from "../styles";

export default function Section({header, content}: {header: string, content: React.ReactElement|React.ReactElement[]}){
    return(
        <div id={(header.split(' ')[0] ?? header).toLowerCase()} className="pt-16">
            <div className="max-w-7xl items-top mx-auto place-content-center px-4">
                <h2 className={h2}>{header}</h2>
                {content}
            </div>
        </div>
    );
}

import { Link } from "react-router-dom";

export default function CallToAction({path,label}){
    
    return (
        <div className="pt-8 flex text-center justify-center">
            <Link to={path} className="bg-cyan-400 hover:bg-cyan-500 rounded-full py-3 block w-64 justify-items-center text-xl text-zinc-800" >{label}</Link>
        </div>
    );
}

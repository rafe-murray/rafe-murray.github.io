import Tooltip from '@mui/material/Tooltip';
import { SVG } from '../types';

export default function Skill({title, Icon, className}: {title: string, Icon: SVG, className: string}){ 
    
    return(
        <Tooltip title={title} placement="top" arrow>
            <Icon className={className}/>
        </Tooltip>
    );
}

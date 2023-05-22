import './DropDown.css';
import SourceButton from './ResourceButton';
import { useState } from 'react';

export default function DropDown (props){
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <div
            className="dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}

            /*only css that must be changed */
            style={{
                backgroundColor: '#80605b',
                color: '#fff',
                maxHeight: isHovering ? '350px' : '25px',
                overflowY: isHovering ? 'scroll' : 'hidden',
                transition: 'max-height 0.3s, overflow-y 0.3s',
                display: 'flex',
                justifyContent: 'flex-start',
                flexWrap: 'wrap'
            }}
        >
            {/* create button with name and url */}
            <SourceButton name="1"/>  
            <SourceButton name="1"/>  
            <SourceButton name="1"/>  
            <SourceButton name="1"/>  
            <SourceButton name="1"/>  
            <SourceButton name="1"/>  
            <SourceButton name="1"/> 
            <SourceButton name="1"/>
            <SourceButton name="1"/>  
            <SourceButton name="1"/>  
            <SourceButton name="1"/>  
            <SourceButton name="1"/>  
            <SourceButton name="1"/>  
        </div>
    )
}

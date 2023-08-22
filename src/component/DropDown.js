import './DropDown.css';
import ResourceButton from './ResourceButton';
import { useState, useEffect } from 'react';
import { ResourceButtonService } from '../service/ResourceButtonService';
import { useParams } from 'react-router-dom';

export default function DropDown(props) {
    const { id } = useParams();
    const projectId = id;
    const [isHovering, setIsHovering] = useState(false);
    const [resourceButtons, setResourceButtons] = useState([]);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    useEffect(() => {
        const resourceButtonService = new ResourceButtonService();
        const fetchResourceButtonsByProjectId = async () => {
            // Fetch resource buttons using the project ID
            const buttons = await resourceButtonService.fetchByProjectId(projectId);
            setResourceButtons(buttons);
        };
        
        fetchResourceButtonsByProjectId();
    }, [projectId]);

    return (
        <div
            className="dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
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
            {/* Map through resourceButtons and create ResourceButton components */}
            {resourceButtons.map((button) => (
                <ResourceButton key={button.id} name={button.name} link={button.link} />
            ))}
        </div>
    );
}

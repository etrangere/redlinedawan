import './DropDown.css';
import ResourceButton from './ResourceButton';
import { useState, useEffect } from 'react';
import { ModalMenuService } from '../service/ModalMenuService';
import { useParams } from 'react-router-dom';


export default function DropDown(props) {
    const { id } = useParams();
    const projectId = id;
    const [isHovering, setIsHovering] = useState(false);
    const [resourceDataByProjectId, setResourceDataByProjectId] = useState([]);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    useEffect(() => {
        const modalMenuService = new ModalMenuService();
        const fetchResourceDataByProjectId = async () => {
            

            // Fetch resource data By Project Id
            const resourceDataByProjectId = await modalMenuService.fetchByProjectData(projectId);
            setResourceDataByProjectId(resourceDataByProjectId);
            console.log('resourceDataByProjectId', resourceDataByProjectId); 
        };
        
        fetchResourceDataByProjectId();
        
    }, []); 

    
      



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
           
            {resourceDataByProjectId.map(resource => (
                <ResourceButton resource={resource.name} />
            ))}
        </div>
    );
}

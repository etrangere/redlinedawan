import { useParams } from 'react-router-dom';
import EtapeButton from "./EtapeButton";
import { Link } from "react-router-dom";

export default function KanbanMethod (props){
    
    const { id } = useParams();
    console.log(id); 

    return (<>
               
              <Link to={`/projectvision/${id}`} className="nav-link" ><EtapeButton name="Project vision" /></Link>
              <Link to={`/projectroadmap/${id}`} className="nav-link"><EtapeButton name="Project Roadmap" /></Link>
              <Link to={`/ticketing/${id}`} className="nav-link" ><EtapeButton name="Ticketing" /></Link>             
              <Link to={`/developpement/${id}`} className="nav-link" ><EtapeButton name="Developpement" /></Link>
              
           </>)
}
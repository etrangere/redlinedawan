
import EtapeButton from "./EtapeButton";
import { Link } from "react-router-dom";

export default function KanbanMethod (props){
    

    return (<>
               
              <Link to="/projectvision" className="nav-link"><EtapeButton name="Project Vision" /></Link>
              <Link to="/projectroadmap" className="nav-link"><EtapeButton name="Project Roadmap" /></Link>
              <Link to="/ticketing" className="nav-link"><EtapeButton name="Ticketing" /></Link>
              <Link to="/developpement" className="nav-link"><EtapeButton name="Developpement" /></Link>
             
              
           </>)
}
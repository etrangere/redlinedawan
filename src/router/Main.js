import { Route,Routes } from "react-router-dom";
import ProjectVision from "../pages/ProjectVision";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import ProjectRoadmap from "../pages/ProjectRoadmap";
import Ticketing from "../pages/Ticketing";
import Developpement from "../pages/Developpement";

//import Frame from './component/Frame';
//import Modal from './component/Modal';


export default function Main(){
    return (
        <Routes>
           {/*  <Route index element = { <Home/>}/>  */}
           
            <Route path="/"   element= { <Home/>}/> 
            <Route path="projectvision"   element= { <ProjectVision/>}/> 
            <Route path="projectroadmap"   element= { <ProjectRoadmap/>}/> 
            <Route path="ticketing"   element= { <Ticketing/>}/> 
            <Route path="developpement"   element= { <Developpement/>}/> 
            <Route path="*"   element= { <NotFound/>}/> 
        </Routes>
        )
    
}
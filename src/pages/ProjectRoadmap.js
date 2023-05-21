import './ProjectRoadmap.css';
import image_calendar from "../img/calendar.png";
import image_etiquette from "../img/etiquette.png";
import image_cible from "../img/cible.png";
import image_star from "../img/star.png";
import image_graph from "../img/graph.png";
import EtapeButtonContainer from '../component/EtapeButtonContainer';
import DropDown from '../component/DropDown';


export default function ProjectRoadmap (){

   
    return (<>
   <EtapeButtonContainer/>
    <DropDown/>
   
   
    <h1>Project roadmap</h1>

    <button id="add" >Add Version</button>
    <div id="versions-container"></div>
    

    <div className="parentro">
        <div className="divro1"> <h3><img src={image_calendar} alt=''></img> DATE</h3>
            <p>The release date or timeframe</p></div>
        <div className="divro2"> <h3><img src={image_etiquette} alt=''></img> NAME</h3>
            <p>The name of the new release</p></div>
        <div className="divro3"> <h3><img src={image_cible} alt=''></img> GOAL</h3>
            <p>The benefit the product
                should offer</p></div>
        <div className="divro4"> <h3><img src={image_star} alt=''></img> FEATURES</h3>
            <p>The high-level features
                necessary to meet the goal</p></div>
        <div className="divro5"> <h3><img src={image_graph} alt=''></img> METRICS</h3>
            <p>The metrics to determine if the
                goal has been met</p></div>

        <div className="divro6"> Date or timeframe
            <textarea rows="2" cols="15"></textarea>
        </div>
        <div className="divro7"> Name/version
            <textarea rows="2" cols="15"></textarea>
        </div>
        <div className="divro8"> Goal
            <textarea rows="2" cols="15"></textarea>
        </div>
        <div className="divro9"> Features
            <textarea rows="2" cols="15"></textarea>
        </div>
        <div className="divro10"> Metrics
            <textarea rows="2" cols="15"></textarea>
        </div>
        <div className="divro11"> Date or timeframe
            <textarea rows="2" cols="15"></textarea>
        </div>
        <div className="divro12"> Name/version
            <textarea rows="2" cols="15"></textarea>
        </div>
        <div className="divro13"> Goal
            <textarea rows="2" cols="15"></textarea>
        </div>
        <div className="divro14"> Features
            <textarea rows="2" cols="15"></textarea>
        </div>
        <div className="divro15"> Metrics
            <textarea rows="2" cols="15"></textarea>
        </div>
        <div className="divro16"> Date or timeframe
            <textarea rows="2" cols="15"></textarea>
        </div>
        <div className="divro17"> Name/version
            <textarea rows="2" cols="15"></textarea>
        </div>
        <div className="divro18"> Goal
            <textarea rows="2" cols="15"></textarea>
        </div>
        <div className="divro19"> Features
            <textarea rows="2" cols="15"></textarea>
        </div>
        <div className="divro20"> Metrics
            <textarea rows="2" cols="15"></textarea>
        </div>
        <div className="divro21"> Date or timeframe
            <textarea rows="2" cols="15"></textarea>
        </div>
        <div className="divro22"> Name/version
            <textarea rows="2" cols="15"></textarea>
        </div>
        <div className="divro23"> Goal
            <textarea rows="2" cols="15"></textarea>
        </div>
        <div className="divro24"> Features
            <textarea rows="2" cols="15"></textarea>
        </div>
        <div className="divro25"> Metrics
            <textarea rows="2" cols="15"></textarea>
        </div>
        </div>

    </>)
}
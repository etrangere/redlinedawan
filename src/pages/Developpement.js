import DropDown from '../component/DropDown';
import EtapeButtonContainer from '../component/EtapeButtonContainer';
import './Developpement.css';

export default function Develppement (){


    return (<>
    <EtapeButtonContainer/>
    <DropDown/>
   
    
    {/* <!-- Create a container div for the textareas and the "Update" button --> */}
    <div id="textarea-container"> 
    {/* <!-- Create the "Update" button --> */}
    {/* <!-- <button id="update-button-all" >Update</button> --> */}

   <ul>
        <li><label htmlFor="conception">Validate</label><input id="conception" type="checkbox" ></input><label htmlFor="conception">Ignore</label><input id="conceptioni" type="checkbox" />Conseption MCD/MLD/UML</li>
        <li><label htmlFor="crud">Validate</label><input id="crud" type="checkbox" ></input><label htmlFor="crudi">Ignore</label><input id="crudi" type="checkbox" />CRUD/BDD</li>
        <li><label htmlFor="front">Validate</label><input id="front" type="checkbox" ></input><label htmlFor="fronti">Ignore</label><input id="fronti" type="checkbox" />FRONT-END</li>
        <li><label htmlFor="back">Validate</label><input id="back" type="checkbox" ></input><label htmlFor="backi">Ignore</label><input id="backi" type="checkbox" />BACK-END</li>
        <li><label htmlFor="test">Validate</label><input id="test" type="checkbox" ></input><label htmlFor="testi">Ignore</label><input id="testi" type="checkbox" />TESTING</li>
        <li><label htmlFor="correction">Validate</label><input id="correction" type="checkbox" ></input><label htmlFor="correctioni">Ignore</label><input id="correctioni" type="checkbox" />Correction/Code Refactor</li>
        <li><label htmlFor="documentation">Validate</label><input id="documentation" type="checkbox" ></input><label htmlFor="documentationi">Ignore</label><input id="documentationi" type="checkbox" />Documentation/Update</li>
    </ul>
    
    <textarea   rows="5" cols="110"></textarea>
  
     
</div>  
 
    </>)
}
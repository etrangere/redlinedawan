import { useParams } from 'react-router-dom';
import DropDown from '../component/DropDown';
import EtapeButtonContainer from '../component/EtapeButtonContainer';
import './Ticketing.css';
//import image_eye from "../img/eye.png";


export default function Ticketing (props){
    const { id } = useParams();
    console.log(id); 

    return (<>
    <EtapeButtonContainer/>
    <DropDown/>
   
    
    <div>  
    <h1>Ticketing</h1>
    </div> 
 
    </>)
}
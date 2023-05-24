import { useParams } from 'react-router-dom';
import EtapeButtonContainer from '../component/EtapeButtonContainer';
import DropDown from '../component/DropDown';
//import { useEffect } from 'react';


export default function Project (props,{ name, link }){
 
    const { id } = useParams();
    console.log(id); 
    
    return (<>
   
    <EtapeButtonContainer/>
    <DropDown/>
 
    <iframe name="frame1" src="" width="100%" height="100%" id="frame1" title="frame1" type="application/pdf"></iframe>
    </>)


}
import { useParams } from 'react-router-dom';
import EtapeButtonContainer from '../component/EtapeButtonContainer';
import DropDown from '../component/DropDown';
//import { useEffect } from 'react';


export default function Project (props){
 
    const { id } = useParams();
    console.log(id); 
    
    return (<>
   
    <EtapeButtonContainer/>
    <DropDown/>
    hello
    </>)


}
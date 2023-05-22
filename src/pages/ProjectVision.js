import './ProjectVision.css';
import image_eye from "../img/eye.png";
import image_group from "../img/group.png";
import image_needs from "../img/heart.png";
import image_product from "../img/product.png";
import image_dollar from "../img/dollar.png";
import EtapeButtonContainer from '../component/EtapeButtonContainer';
import DropDown from '../component/DropDown';
import { useParams } from 'react-router-dom';

export default function ProjectVision(props){
    const { id } = useParams();
    console.log(id); 

    return (<>
    <EtapeButtonContainer/>
    <DropDown/>
   
    
       
    <h1>Project vision</h1>
    
   {/*  <!-- Create a container div for the textareas and the "Update" button --> */}
    <div id="textarea-container"> 
    {/* <!-- Create the "Update" button --> */}
    {/* <!-- <button id="update-button-all" >Update</button> --> */}
    
     <div className="parentv" > 
         
    
    
        
      <div className="div1" >
            <h3><img src={image_eye} alt=''></img> VISION</h3>
            <p>
                What is the reason for creating the product?
                What positive change should it create?</p>
                <textarea  id="textarea1" rows="6" cols="110"></textarea>
        </div>
        <div className="div2" > 
            <h3><img src={image_group} alt=''></img>  TARGET GROUP</h3>
            <p>Which market or market segment does the
product address? Who are the target customers
and users?</p>
                <textarea id="textarea2" rows="15" cols="20"></textarea>   
        </div>
        <div className="div3">
            <h3><img src={image_needs} alt=''></img>NEEDS</h3>
            <p>
                What problem does the product solve or which
benefit does it offer? If you identify several
needs, prioritise them and move the most
important one to the top.</p>
                <textarea id="textarea3" rows="15" cols="20"></textarea>     
         </div>
        <div className="div4"> 
            <h3><img src={image_product} alt=''></img>PRODUCT</h3>
            <p>
                What product is it? What are its three to five
                stand-out features that set it apart from
                competing offering? Is it feasible to develop the
                product?</p>
                <textarea id="textarea4" rows="15" cols="20"></textarea>     
        </div>
        <div className="div5"> 
            <h3><img src={image_dollar} alt=''></img>BUSINESS GOALS</h3>
            <p>
                How will the product benefit the company that
develops and provides it? What are the desired
business benefits? Prioritise them and move
the most important one to the top. </p>
                <textarea id="textarea5" rows="15" cols="20"></textarea>
            
        </div>

        </div>
        </div>
    </>)
}
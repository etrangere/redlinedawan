import './Navbar.css';
import image from "../img/logo.png";
import { Link } from "react-router-dom";

export default function Navbar (){
   
        // const prefixraw = window.location.pathname;
		//const prefix = prefixraw.slice(0, -1);
		//const currentPath = window.location.pathname;
	    //const baseUrl = `http://localhost${currentPath}`;
		//alert(baseUrl); 

    return (
        <>
        <nav>
		<Link to="/" className="nav-link"><img src={image} alt=''></img></Link>
      
			{/* <a href=baseUrl+"/home.html" id="btnlogo" target="right"><img  src="./img/logo.png"></a>
			<!--dropdown--> */}
			<select className="projectselect" name="pets" id="pet-select">
				<option value="">--Please choose an option--</option>
				<option value="dog">Dog</option>
				<option value="cat">Cat</option>
				<option value="hamster">Hamster</option>
				<option value="parrot">Parrot</option>
				<option value="spider">Spider</option>
				<option value="goldfish">Goldfish</option>
			</select>

			  {/* dropdown */}
			<div>     
				{/* <!-- Trigger/Open The Modal --> */}	
				<button >Login</button>
			</div>
	</nav>	
        </>
    )

}
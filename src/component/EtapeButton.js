import './EtapeButton.css';


export default function EtapeButton (props){

    const name = props.name;

    return (<>
    
                <div id="custom-button-etape">{name}</div>
				{/* <div class="remove-container-etape" id="remove-container-etape"></div> */}
    </>)
}
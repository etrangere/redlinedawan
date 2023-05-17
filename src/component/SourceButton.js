import './SourceButton.css';


export default function SourceButton (props){

    const name = props.name;

    return (<>
    
                <div id="button-container"><div className="source-button">{name}</div></div>
				{/* <div class="remove-container-etape" id="remove-container-etape"></div> */}
    </>)
}
import './Frame.css';


export default function Dropdown (){
    return (<>
    <div id="" class="separatorContainer">
		<div id="panel1" class="panel">
			<div name="tt" class="iframe-wrapper">
				<iframe name="left" src="" type="application/pdf" title='lefttitle'></iframe>
			</div>
		</div>
		<div id="divider" class="dividerStyle"></div>
		<div id="panel2" class="panel">
			<div class="iframe-wrapper">
				<iframe width="100%"
				height="100%"
				 name="right" src="" type="application/pdf" title='righttitle'></iframe>
			</div>
		</div>
	</div>

    </>)
}
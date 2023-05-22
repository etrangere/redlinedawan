

export default function ResourceButtonContainer(){






    
    return (<>
    <form>
                    <label htmlFor="url">URL:</label>
                    <input type="text" id="url" name="url"></input><br></br>
                    <label htmlFor="text">Button Text:</label>
                    <input type="text" id="text" name="text" maxLength="26"></input><br></br>
                    <label htmlFor="color">Select file type:</label>
                    <select id="color" name="color">
                        <option value="PDF">PDF</option>
                        <option value="WORD">WORD</option>
                        <option value="PNG">PNG</option>
                        <option value="JPEG">JPEG</option>
                        <option value="SVG">SVG</option>
                        <option value="SITE_ADDRESS">URL</option>
                    </select><br></br>
                    
                    <label htmlFor="file">Selectfile to upload:</label>
                    <input type="file" id="file" name="file" disabled></input><br></br>
                    <input type="button" id="create" value="Create Resource Button" /* onclick="createButton()" */></input>
                </form>
                <div id="button-container"></div>
                <div className="remove-container" id="remove-container"></div>
                <hr></hr>
                <h1>Add Trello account</h1>
                <label htmlFor="urlapi">URL of API:</label>
                <input type="text" id="urlapi"></input><br></br>
                <label htmlFor="apikey">API key:</label>
                <input type="text" id="apikey"></input><br></br>
                <label htmlFor="apitoken">Token:</label>
                <input type="text" id="apitoken"></input>
                <input type="button" id="createapi" value="Create API and apply to Ticketing button" /* onclick="createAPIurl()" */></input>
    </>)
}
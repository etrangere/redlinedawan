
import KanbanMethod from "./KanbanMethod";
import './EtapeButtonContainer.css';
import React, { useState } from 'react';




export default function EtapeButtonContainer () {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
   
    <div className="button-container-for-etape">
      <div>
        <div className="methodflag"></div>
        <KanbanMethod />
        
      </div>

      <button className="btnconfig" onClick={handleShow}>
        Launch demo modal
      </button>
     
      {show && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleClose}>&times;</span>
                {/* body */}
                {/* <!-- The Modal --> */}            
                {/* <!--create button with name and url--> */}
            <h1>Add etape buttons set acording to the method</h1>
         
                <form>
                    <select id="method" name="method">
                        {/* <option value="Scrum">Scrum</option> */}
                        <option value="Kanban">Kanban</option>
                    </select><br></br>
                    <input type="button" id="btnselect" value="Create Button Set" /* onclick="createButtonset()" */></input>
                </form>
                
                <div className="remove-container-etape" id="remove-container-etape"></div>

                <hr></hr>
            <h1>Add resource button</h1>
                <form>
                    <label htmlFor="url">URL:</label>
                    <input type="text" id="url" name="url"></input><br></br>
                    <label htmlFor="text">Button Text:</label>
                    <input type="text" id="text" name="text" maxLength="26"></input><br></br>
                    <label htmlFor="color">Select color by theme:</label>
                    <select id="color" name="color">
                        <option value="#850606">Red  Java</option>
                        <option value="#3CB371">Green  PHP</option>
                        <option value="#B8860B">Marron  N/A</option>
                        <option value="#00008B">Blue ORM/DB</option>
                        <option value="orange">Orange  JavaScript</option>
                        <option value="#183A1D">Default</option>
                    </select>
                    <label htmlFor="target">Target:</label>
                    <select id="target" name="target">
                        <option value="left">Left Window</option>
                        <option value="right">Right Window</option>
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
                <hr></hr>
                
                               
            {/* body */}
            <div className="modal-buttons">
              <button onClick={handleClose}>Close</button>
              <button onClick={handleClose}>Save Changes</button>
            </div>
          </div>
        </div>
      )}
 


    </div>
  );
}

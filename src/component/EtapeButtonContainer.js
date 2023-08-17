
import KanbanMethod from "./KanbanMethod";
import './EtapeButtonContainer.css';
import React, { useState } from 'react';
import ModalMenu from "./ModalMenu";




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
                <ModalMenu/>
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

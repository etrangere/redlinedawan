import "./ResourceButtonContainer.css"
import { useEffect, useState } from 'react';
import { ResourceButtonService } from '../service/ResourceButtonService.js';
import { useParams } from 'react-router-dom';


export default function ResourceButtonContainer(props){
   
  const { id } = useParams();

  const projectId = id;

    const [resourcebutton, setResourcebutton] = useState([]);
    const [newData, setNewData] = useState({
      name: '',
      type: '',
      link: '',
      link_type: '',
      first_saving_date_time: '',
      last_update_date_time: '',
      version: '',
      projects: ''
    });
    const [editingId, setEditingId] = useState(null);
    const [showCreateForm, setShowCreateForm] = useState(false);
  
    useEffect(() => {
      const resourcebuttonservice = new ResourceButtonService();
  
      const fetchData = async () => {
        const data = await resourcebuttonservice.fetchData();
        setResourcebutton(data);
      };
  
      fetchData();
    }, []);
  
    const handleCreate = async () => {
      const resourcebuttonservice = new ResourceButtonService();
      // Create new data
      const result = await resourcebuttonservice.createData(newData);
      setResourcebutton((prevData) => [...prevData, result]);
      setNewData({
        name: '',
        type: '',
        link: '',
        link_type: '',
        first_saving_date_time: '',
        last_update_date_time: '',
        version: '',
        projects:''
      });
      setShowCreateForm(false);
      console.log(result)
    };
  
    

    const handleUpdate = async (id) => {
      const resourcebuttonservice = new ResourceButtonService();
      // Find the item being edited
      /* const itemToUpdate = projects.find((item) => item.id === id); */
      // Update data
      const result = await resourcebuttonservice.updateData(id, newData);
      setResourcebutton((prevData) =>
        prevData.map((item) => (item.id === id ? result : item))
      );
      setEditingId(null); // Reset editing state
    };
  
    const handleDelete = async (id) => {
      const resourcebuttonservice = new ResourceButtonService();
      // Delete data
      await resourcebuttonservice.deleteData(id);
      setResourcebutton((prevData) => prevData.filter((item) => item.id !== id));
    };
  
    const handleEdit = (id) => {
      setEditingId(id);
      const itemToEdit = resourcebutton.find((item) => item.id === id);
      setNewData({ ...itemToEdit });
    };
  
    const toggleCreateForm = () => {
      setShowCreateForm((prevValue) => !prevValue);
    };
  
    return (<>
      <div>
   
        {/* Create form */}
        <div className='div_home_add_new_project'>
            {showCreateForm ? (
             
              <form>
                {/* Add input fields for each required field */}
                
                <input
                      className="create-input"
                      type="text"
                      value={newData.name}
                      onChange={(e) => setNewData({ ...newData, name: e.target.value })}
                      placeholder='Name'
                      key="name" // Add key prop
                    />
                    <select
                          className="create-input"
                          value={newData.type}
                          onChange={(e) => setNewData({ ...newData, type: e.target.value })}
                          key="link_type" // Add key prop
                        >
                          <option value="">Select resource type</option>
                          <option value="PDF">PDF</option>
                          <option value="WORD">WORD</option>
                          <option value="PNG">PNG</option>
                          <option value="JPEG">JPEG</option>
                          <option value="SVG">SVG</option>
                          <option value="SITE_ADDRESS">URL</option>
                        </select>
                    <input
                      className="create-input"
                      type="text"
                      value={newData.link}
                      onChange={(e) => setNewData({ ...newData, link: e.target.value })}
                      placeholder='Link'
                      key="link" // Add key prop
                    />
                    <input
                      className="create-input"
                      type="text"
                      value={newData.link_type}
                      onChange={(e) => setNewData({ ...newData, link_type: e.target.value })}
                      placeholder='Link type'
                      key="link_type" // Add key prop
                    />
                    <input
                      type="date"
                      value={newData.first_saving_date_time}
                      onChange={(e) => setNewData({ ...newData, first_saving_date_time: e.target.value })}
                      placeholder='First Saving Date/Time'
                      key="first_saving_date_time" // Add key prop
                    />
                    <input
                      className="create-input"
                      type="date"
                      value={newData.last_update_date_time}
                      onChange={(e) => setNewData({ ...newData, last_update_date_time: e.target.value })}
                      placeholder='Last Update Date/Time'
                      key="last_update_date_time" // Add key prop
                    />
                    <input
                      className="create-input"
                      type="text"
                      value={newData.version}
                      onChange={(e) => setNewData({ ...newData, version: e.target.value })}
                      placeholder='Version'
                      key="version" // Add key prop
                    />
                    <input
                      className="create-input"
                      type="text"
                      value={newData.projects={id:projectId}}
                      onChange={(e) => setNewData({ ...newData, projects: e.target.value })}
                      placeholder={projectId}
                      key="projects" // Add key prop
                    />
  
                <button type="button" onClick={handleCreate}>
                  Create
                </button>
  
              </form>
             
              
            ) : (
              <button onClick={toggleCreateForm}>Add new resource button</button>
            )}
        </div>
        <div className='div_modal_resourcebutton_table'>
            {/* table with projects */}
            <table className='modal_resourcebutton_table'>
          
            <thead>
            <tr>
                  <th>ID</th>
                  <th>Name/Button text</th>
                  <th>Type</th>
                  <th>Link/URL</th>
                  <th>link_type</th>
                  <th>First Saving Date/Time</th>
                  <th>Last Update Date/Time</th>
                  <th>Version</th>
                  <th>#</th>
                  <th>Actions</th>
                </tr>
            </thead>
            <tbody>
              {resourcebutton.map((item) => (
                <tr key={item.id}>
                  {/* to send id over link to the project component */}
                  <td>{item.id}</td>
                  <td>
                    {editingId === item.id ? (
                      <input
                        className="edit-input"
                        type="text"
                        value={newData.name}
                        onChange={(e) => setNewData({ ...newData, name: e.target.value })}
                        key={item.id + '-name'} // Add key prop
                      />
                    ) : (
                      item.name
                    )}
                  </td>
                
                  <td>
                    {editingId === item.id ? (
                      <input
                        className="edit-input"
                        type="text"
                        value={newData.type}
                        onChange={(e) =>   setNewData({ ...newData, type: e.target.value })}
                          key={item.id + '-type'} // Add key prop
                      />
                    ) : (
                      item.type
                    )}
                  </td>
                  {/* ... */}
                 
                  <td>
                      {editingId === item.id ? (
                        <input
                          className="edit-input"
                          type="text"
                          value={newData.link}
                          onChange={(e) => setNewData({ ...newData, link: e.target.value })}
                          key={item.id + '-link'} // Add key prop
                        />
                      ) : (
                        item.link
                      )}
                    </td>

                    <td>
                        {editingId === item.id ? (
                          <select
                            className="edit-input"
                            value={newData.link_type}
                            onChange={(e) => setNewData({ ...newData, link_type: e.target.value })}
                            key={item.id + '-link_type'} // Add key prop
                          >
                            <option value="PDF">PDF</option>
                            <option value="WORD">WORD</option>
                            <option value="PNG">PNG</option>
                            <option value="JPEG">JPEG</option>
                            <option value="SVG">SVG</option>
                            <option value="SITE_ADDRESS">URL</option>
                          </select>
                        ) : (
                          item.link_type
                        )}
                      </td>
                  <td>
                    {editingId === item.id ? (
                      <input
                        className="edit-input"
                        type="date"
                        value={newData.first_saving_date_time}
                        onChange={(e) => setNewData({ ...newData, first_saving_date_time: e.target.value })}
                        key={item.id + '-first_saving_date_time'} // Add key prop
                      />
                    ) : (
                      item.first_saving_date_time
                    )}
                  </td>
                  <td>
                    {editingId === item.id ? (
                      <input
                        className="edit-input"
                        type="date"
                        value={newData.last_update_date_time}
                        onChange={(e) => setNewData({ ...newData, last_update_date_time: e.target.value })}
                        key={item.id + '-last_update_date_time'} // Add key prop
                      />
                    ) : (
                      item.last_update_date_time
                    )}
                  </td>
                  <td>
                    {editingId === item.id ? (
                      <input
                        className="edit-input"
                        type="text"
                        value={newData.version}
                        onChange={(e) => setNewData({ ...newData, version: e.target.value })}
                        key={item.id + '-version'} // Add key prop
                      />
                    ) : (
                      item.version
                    )}
                  </td>
                  <td>
                    {editingId === item.id ? (
                      <input
                        className="edit-input"
                        type="text"
                        value={newData.projects={id:projectId}}
                        onChange={(e) => setNewData({ ...newData, projects: e.target.value })}
                        key={item.id + '-version'} // Add key prop
                      />
                    ) : (
                      item.projects
                    )}
                  </td>
                
                  <td>
                    {editingId === item.id ? (
                      <button onClick={() => handleUpdate(item.id)}>Save</button>
                    ) : (
                      <>
                        <button onClick={() => handleEdit(item.id)}>Edit</button>
                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
    
        </div>
    </div>    
  




    
   
               
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
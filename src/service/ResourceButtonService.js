const BASE_URL = "http://localhost:8080";

export class ResourceButtonService {
  
  fetchData = async () => {
    const response = await fetch(`${BASE_URL}/resources`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
     
    });
    const data = await response.json();

    return data;
   
  };
/* ?projectId=${projectId} */
  createData = async (/* projectId, */ newData) => {
    const response = await fetch(`${BASE_URL}/resources`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    });
    const data = await response.json();
    return data;
  };
  
  updateData = async (id, updatedData) => {
    const response = await fetch(`${BASE_URL}/resources/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });
    const data = await response.json();
    return data;
  };

  deleteData = async (id) => {
    const response = await fetch(`${BASE_URL}/resources/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  };
}

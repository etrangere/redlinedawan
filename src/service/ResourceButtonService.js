//for server2
//const BASE_URL = "https://portfolio.gourgen-khachatrian.fr:8444";
//for dev
const BASE_URL = "http://localhost:8082";

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
  try {
    const response = await fetch(`${BASE_URL}/resources/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      // Handle error response here
      throw new Error('Failed to delete resources');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Handle fetch or JSON parsing errors here
    console.error('Error deleting resources:', error);
    throw error;
  }
};
}

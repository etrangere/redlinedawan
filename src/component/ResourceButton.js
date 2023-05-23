import './ResourceButton.css';
import React, { useEffect, useState } from 'react';

export default function ResourceButton({ name, link }) {
  const [loading, setLoading] = useState(true);
  const [resourceButtons, setResourceButtons] = useState([]);

  useEffect(() => {
    // Fetch resource buttons using the project ID
    const fetchResourceButtons = async () => {
      try {
        const response = await fetch(`http://localhost:8080/resources`); // Replace with your API endpoint
        const data = await response.json();
        setResourceButtons(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching resource buttons:', error);
      }
    };

    fetchResourceButtons();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Render the resource buttons
  return (
    <div id='button-container' >
      {resourceButtons.map((button) => (
        <a href={button.link} key={button.id} target="_blank" rel="noopener noreferrer">
          <div  className='source-button'>{button.name}</div>
        </a>
      ))}
    </div>
  );
}

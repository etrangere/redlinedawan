import { useParams } from 'react-router-dom';
import DropDown from '../component/DropDown';
import EtapeButtonContainer from '../component/EtapeButtonContainer';
import './Ticketing.css';
import { useEffect, useState } from 'react';

export default function Ticketing(props) {
  const { id } = useParams();
  console.log(id);
  const [loading, setLoading] = useState(true);
  const [ticketingButton, setTicketingButton] = useState({});

  useEffect(() => {
    // Fetch ticketing button using the appropriate API endpoint or service
    const fetchTicketingButton = async () => {
      try {
        const response = await fetch(`http://localhost:8080/ticketing`); // Replace with your API endpoint
        const data = await response.json();
        setTicketingButton({url:data[0].url });
      // console.log( data[0].url )
        setLoading(false);
      } catch (error) {
        console.error('Error fetching ticketing button:', error);
        setLoading(false);
      }
    };
  
    fetchTicketingButton();
   
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }



  return (
    <>
    <EtapeButtonContainer />
    <DropDown />
    <div>
      {ticketingButton.url ? (
        <iframe src={ticketingButton.url} title="Ticketing" height="900" width="1600" />
      ) : (
        <p>No ticketing URL available.</p>
      )}
    </div>
  </>
  );
}

import { useState, useEffect } from "react";
import Map from "./components/Map";
import Loader from "./components/Loader";
import Header from "./components/Header";

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  const nasaApi = "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events";

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch(nasaApi);
      const { events } = await res.json();
      setEventData(events);
      setLoading(false);
    };

    fetchEvents();
  }, []);

  return (
    <div className='App'>
      <Header />
      {!loading ? <Map eventData={eventData} /> : <Loader />}
    </div>
  );
}

export default App;

import React,{useState,useEffect} from "react";
import BotsPage from "./BotsPage";

function App() {
const [bots, setBots] = useState([]);

useEffect(() => {
  const fetchBots = async () => {
    const response = await fetch("http://localhost:8002/bots");
    if(!response.ok) {
      throw new Error("Failed to fetch bots");
    }
    const data = await response.json();
    setBots(data);
  };
  fetchBots();
}, []);
    
 console.log("fetching bots", bots);
  return (
    <div className="App">
      <BotsPage />
    </div>
  );
}

export default App;

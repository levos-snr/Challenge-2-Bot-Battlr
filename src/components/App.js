import React, { useState, useEffect } from "react";
import BotsPage from "./BotsPage";

function App() {
  const [bots, setBots] = useState([]);
  const [botArmy, setBotArmy] = useState([]);

  useEffect(() => {
    const fetchBots = async () => {
      const response = await fetch("http://localhost:8002/bots");
      if (!response.ok) {
        throw new Error("Failed to fetch bots");
      }
      const data = await response.json();
      setBots(data);
    };
    fetchBots();
  }, []);

  const addToArmy = (bot) => {
    if (!botArmy.find(b => b.id === bot.id)) {
      setBotArmy([...botArmy, bot]);
    }
  };

  const removeFromArmy = (bot) => {
    setBotArmy(botArmy.filter(b => b.id !== bot.id));
  };

  const dischargeBot = async (bot) => {
    await fetch(`http://localhost:8002/bots/${bot.id}`, {
      method: 'DELETE',
    });
    removeFromArmy(bot);
    setBots(bots.filter(b => b.id !== bot.id));
  };

  return (
    <div className="App">
      <BotsPage
        bots={bots}
        addToArmy={addToArmy}
        removeFromArmy={removeFromArmy}
        dischargeBot={dischargeBot}
        botArmy={botArmy}
      />
    </div>
  );
}

export default App;

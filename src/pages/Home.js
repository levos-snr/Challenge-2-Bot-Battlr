import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import YourBotArmy from "../components/YourBotArmy";
import BotCollection from "../components/BotCollection";

function BotsPage() {
  const [bots, setBots] = useState([]);
  const [botArmy, setBotArmy] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBots = async () => {
      const response = await fetch("https://server-vercel-vert.vercel.app/bots");
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
    await fetch(`https://server-vercel-vert.vercel.app/bots/${bot.id}`, {
      method: 'DELETE',
    });
    removeFromArmy(bot);
    setBots(bots.filter(b => b.id !== bot.id));
  };

  const viewBot = (bot) => {
    navigate(`/bot/${bot.id}`, { state: { bot } });
  };

  
  
  return (
    <div>
      <YourBotArmy
        botArmy={botArmy}
        removeFromArmy={removeFromArmy}
        dischargeBot={dischargeBot}
        viewBot={viewBot}
      />
      <BotCollection
        bots={bots}
        addToArmy={addToArmy}
        botArmy={botArmy}
        viewBot={viewBot}
      />
    </div>
  );
}

export default BotsPage;

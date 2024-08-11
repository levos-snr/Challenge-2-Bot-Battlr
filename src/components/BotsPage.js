import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage({ bots, addToArmy, removeFromArmy, dischargeBot, botArmy }) {
  return (
    <div>
      <YourBotArmy
        botArmy={botArmy}
        removeFromArmy={removeFromArmy}
        dischargeBot={dischargeBot}
      />
      <BotCollection
        bots={bots}
        addToArmy={addToArmy}
        botArmy={botArmy}
      />
    </div>
  );
}

export default BotsPage;

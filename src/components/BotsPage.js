import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage({ bots, addToArmy, removeFromArmy, dischargeBot, botArmy, viewBot }) {
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

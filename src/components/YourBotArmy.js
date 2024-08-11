import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ botArmy, removeFromArmy, dischargeBot }) {
  return (
    <div className="ui segment inverted olive bot-army p-6">
      <p className="text-2xl font-bold text-center mb-6">Your Bot Army</p>
      <div className="ui four column grid gap-4">
        {botArmy.map(bot => (
          <div className="ui column collection-card w-full md:w-1/3 lg:w-1/4 p-4" key={bot.id}>
            <BotCard
              bot={bot}
              onRemoveFromArmy={() => removeFromArmy(bot)}
              onDischarge={() => dischargeBot(bot)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;

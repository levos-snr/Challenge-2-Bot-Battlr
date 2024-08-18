import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, addToArmy, botArmy, viewBot }) {
  return (
    <div className="ui four column grid gap-4 p-6">
      <p className="text-2xl font-bold text-center mb-6">Your Bot Collection</p>
      <div className="row flex flex-wrap justify-center">
        {bots.map(bot => (
          <div className="ui column collection-card w-full md:w-1/3 lg:w-1/4 p-4" key={bot.id}>
            <BotCard
              bot={bot}
              onAddToArmy={() => addToArmy(bot)}
              isInArmy={botArmy.some(b => b.id === bot.id)}
              viewBot={() => viewBot(bot)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BotCollection;

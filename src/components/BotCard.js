import React from "react";
import { Button, Icon, Popup } from "semantic-ui-react";

const botTypeClasses = {
  Assault: "icon bomb",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotCard({ bot, onAddToArmy, onRemoveFromArmy, onDischarge, isInArmy, viewBot }) {
  return (
    <div className="ui card">
      <div className="image">
        <img alt="bot" src={bot.avatar_url} />
      </div>
      <div className="content header">
        <span className="header">Name: {bot.name}
        <i className={botTypeClasses[bot.bot_class]} />
        </span>
      </div>
      <div className="extra p-6 ">
        <div className="title">Phrase:</div>
        <Popup
          content={bot.catchphrase}
          trigger={
            <small className="overflow-hidden text-ellipsis whitespace-nowrap block">
              {bot.catchphrase}
            </small>
          }
        />
      </div>
      <div className="extra content flex items-center justify-between">
        <span className="flex items-center">
          <Icon name="heartbeat" /> <span className="ml-1">{bot.health}</span>
        </span>
        <span className="flex items-center">
          <Icon name="lightning" /> <span className="ml-1">{bot.damage}</span>
        </span>
        <span className="flex items-center">
          <Icon name="shield" /> <span className="ml-1">{bot.armor}</span>
        </span>
        </div>
          <div className= "content flex  items-center justify-center space-y-1 m-2">
            <Button animated="fade" primary onClick={() => viewBot(bot)} className="flex justify-center items-center">
              <Button.Content visible className="flex justify-center items-center">
                View more
              </Button.Content>
              <Button.Content hidden className="flex justify-center items-center">
                <Icon name="eye" />
              </Button.Content>
            </Button>
            {onAddToArmy && !isInArmy && (
              <Button animated="fade" primary onClick={onAddToArmy} className="flex justify-center items-center">
                <Button.Content visible className="flex justify-center items-center">
                  Add to Army
                </Button.Content>
                <Button.Content hidden className="flex justify-center items-center">
                  <Icon name="plus" />
                </Button.Content>
              </Button>
            )}
            {onRemoveFromArmy && isInArmy && (
              <Button animated="fade" secondary onClick={onRemoveFromArmy} className=" flex justify-center items-center">
                <Button.Content visible className="flex justify-center items-center">
                  Remove from Army
                </Button.Content>
                <Button.Content hidden className="flex justify-center items-center">
                  <Icon name="minus" />
                </Button.Content>
              </Button>
            )}
            {onDischarge && (
              <Button animated="fade" className="red flex justify-center items-center" onClick={onDischarge}>
                <Button.Content visible className="flex justify-center items-center">
                  Discharge
                </Button.Content>
                <Button.Content hidden className="flex justify-center items-center">
                  <Icon name="trash" />
                </Button.Content>
              </Button>
            )}
          </div>

    </div>
  );
}

export default BotCard;

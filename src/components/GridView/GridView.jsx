import React from "react";
import Card from "../shared/Card/Card";
export default function GridView(props) {
  const players = props.players_details;
  return (
    <div className={"card-main"}>
      {players.map((player, key) => {
        return <Card player={player} key={key} />;
      })}
    </div>
  );
}

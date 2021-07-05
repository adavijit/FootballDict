import React from "react";
import Card from "../shared/Card/Card";
export default function GridView(props) {
  return (
    <div className={"card-main"}>
      {props.players_details.map((player, key) => {
        return <Card player={player} key={key} />;
      })}
    </div>
  );
}

import React from "react";
import TableColumns from "../../constants/TableColumns";
import TableRow from "../shared/TableRow/TableRow";
export default function TableView(props) {
  const updateTable = () => {
    return props.players_details.map((player, key) => {
      return <TableRow player={player} key={key} />;
    });
  };
  return (
    <table className="rwd-table">
      <thead>
        <tr>
          {TableColumns.map((element, key) => {
            return <th key={key}>{element.name}</th>;
          })}
        </tr>
      </thead>
      <tbody>{updateTable()}</tbody>
    </table>
  );
}

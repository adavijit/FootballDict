import React from "react";

export default function ErrorComponent(props) {
  return <div className={"alert-div"}>{props.message}</div>;
}

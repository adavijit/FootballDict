import React from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import Button from "../Button/Button";
export default function CustomModal(props) {
  return (
    <Modal open={props.modal_open} onClose={() => props.onClose()} center>
      <h2>{props.message}</h2>
      <Button
        disabled={false}
        onButtonClick={() => {
          props.onButtonClick();
        }}
        className={"btn-modal"}
        name={"Okay"}
      />
    </Modal>
  );
}

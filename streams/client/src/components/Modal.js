import React from "react";
import ReactDOM from "react-dom";
import { Modal as Mdl } from "semantic-ui-react";

const Modal = props => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss}>
      <Mdl dimmer open onClick={e => e.stopPropagation()}>
        <Mdl.Header>{props.title}</Mdl.Header>
        <Mdl.Content>{props.content}</Mdl.Content>
        <Mdl.Actions>{props.actions}</Mdl.Actions>
      </Mdl>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;

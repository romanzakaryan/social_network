import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./MessageItem/MessageItem";
import style from "./Dialogs.module.css";

const Dialogs = props => {
  const state = props.dialogsPage;
  const { dialogs, messages } = state;

  let dialogsElement = dialogs.map(d => (
    <DialogItem key={d.id} name={d.name} id={d.id} avatar={d.avatar} />
  ));
  let messagesElements = messages.map(m => (
    <Message key={m.id} message={m.message} />
  ));

  let onSendMessageClick = () => {
    props.onSendMessageClick();
  };

  let onNewMessageChange = e => {
    let messageText = e.target.value;
    props.onNewMessageChange(messageText);
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogsElement}</div>
      <div className={style.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea
              value={state.newMessageText}
              onChange={onNewMessageChange}
              placeholder="Enter your message"
            />
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;

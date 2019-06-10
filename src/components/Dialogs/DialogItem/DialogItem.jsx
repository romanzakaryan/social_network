import React from "react";
import { NavLink } from "react-router-dom";

import style from "./../Dialogs.module.css";

const DialogItem = props => {
  let { name, id, avatar } = props;
  let path = "/dialogs/" + id;
  return (
    <div className={style.dialog}>
      <NavLink to={path}>
        <img className={style.avatar} alt="avatar" src={avatar} />
        <span className={style.name}>{name}</span>
      </NavLink>
    </div>
  );
};

export default DialogItem;

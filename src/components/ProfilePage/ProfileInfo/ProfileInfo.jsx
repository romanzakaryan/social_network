import React from "react";

import style from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div className={style.top_img}>
        <img alt="topImage" src="http://i.imgur.com/CMWTqJx.jpg?1" />
      </div>
      <div className={style.description_block}>img+description</div>
    </div>
  );
};

export default ProfileInfo;

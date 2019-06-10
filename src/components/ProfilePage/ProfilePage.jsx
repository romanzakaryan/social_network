import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

import style from "./ProfilePage.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const ProfilePage = props => {
  return (
    <div className={style.content}>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
};

export default ProfilePage;

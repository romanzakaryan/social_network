import React from "react";

import style from "./Post.module.css";

const Post = ({ message, likesCount }) => {
  return (
    <div className={style.item}>
      <img
        alt="avatar"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgAsGk-jQFgUVFSeEbInTtPPQbKgLj3ClhrrBFkJIEnUBvQJHT"
      />
      <span>{message}</span>
      <div className={style.like}>{`Like ${likesCount}`}</div>
    </div>
  );
};

export default Post;

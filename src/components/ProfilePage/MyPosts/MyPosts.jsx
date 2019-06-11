import React from "react";
import Post from "./Post/Post";

import style from "./MyPosts.module.css";

const MyPosts = props => {
  const { posts } = props;
  let postsElements = posts.map(p => {
    return <Post key={p.id} message={p.post} likesCount={p.likesCount} />;
  });

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostTextChange = () => {
    let text = newPostElement.current.value;
    props.changePostText(text);
  };

  return (
    <div className={style.posts_block}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            ref={newPostElement}
            placeholder="Write your post here..."
            value={props.newPostText}
            onChange={onPostTextChange}
          />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={style.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;

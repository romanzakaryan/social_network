import { connect } from "react-redux";
import {
  addPost,
  changePostText
} from "./../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const mapStateToProps = state => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  };
};

const mapDispatchToProps = {
  addPost,
  changePostText
};

const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);

export default MyPostsContainer;

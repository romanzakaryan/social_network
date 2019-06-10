import { connect } from "react-redux";
import {
  addPostActionCreator,
  changePostTextActionCreator
} from "./../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const mapStateToProps = state => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    onPostTextChange: text => {
      dispatch(changePostTextActionCreator(text));
    }
  };
};

const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);

export default MyPostsContainer;

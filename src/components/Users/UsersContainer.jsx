import Users from "./Users";
import { connect } from "react-redux";
import {
  followActionCreator,
  unfollowActionCreator,
  setUsersActionCreator,
  setUsersTotalCount,
  setCurrentPage
} from "./../../redux/users-reducer";

const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    totalCount: state.usersPage.totalCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    follow: userId => {
      dispatch(followActionCreator(userId));
    },
    unfollow: userId => {
      dispatch(unfollowActionCreator(userId));
    },
    setUsers: users => {
      dispatch(setUsersActionCreator(users));
    },
    setUsersTotalCount: totalCount => {
      dispatch(setUsersTotalCount(totalCount));
    },
    setCurrentPage: currentPage => {
      dispatch(setCurrentPage(currentPage))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);

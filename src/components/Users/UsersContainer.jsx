import React from 'react'
import Users from "./Users";
import { connect } from "react-redux";
import * as axios from "axios";
import {
  follow,
  unfollow,
  setUsers,
  setUsersTotalCount,
  setCurrentPage,
  setIsFetching
} from "./../../redux/users-reducer";
import Preloader from '../../common/Preloader/Preloader';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true)
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setIsFetching(false)
        this.props.setUsers(response.data.items);
        this.props.setUsersTotalCount(response.data.totalCount)
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    this.props.setIsFetching(true)
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setIsFetching(false)
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> :
          <Users
            totalCount={this.props.totalCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
          />}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    totalCount: state.usersPage.totalCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  };
};

const mapDispatchToProps = {
  follow,
  unfollow,
  setUsers,
  setUsersTotalCount,
  setCurrentPage,
  setIsFetching
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainer);

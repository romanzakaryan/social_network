import React from "react";
import style from "./users.module.css";
import * as axios from "axios";
import UserPhoto from "./../../assets/images/user.png"

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setUsersTotalCount(response.data.totalCount)
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        console.log(response.data.items)
      });
  }

  render() {

    let pagesCount = Math.ceil(this.props.totalCount/this.props.pageSize)
    let pages = [];
    for(let i = 1; i <= pagesCount; i++){
      pages.push(i)
    }
    return (
      <div>
        <div>
          {pages.map(p => {
            return <span key={p} className={this.props.currentPage === p ? style.selectedPage : ''}
            onClick={(e) => {this.onPageChanged(p)}}>{p}</span>
          })}
        </div>
        {this.props.users.map(user => (
          <div key={user.id} className={style.userInfo}>
            <span className={style.leftPart}>
              <div>
                <img alt="avatar" src={user.photos.small ? user.photos.small : UserPhoto} className={style.avatar} />
              </div>
            </span>
            <div className={style.rightPart}>
              <div className={style.personalInfo}>
                <div className={style.fullName}>{user.name}</div>
                <div className={style.status}>{user.status}</div>
              </div>
              <div className={style.schoolInfo}>
                <div className={style.school}>{"user.location.country"}</div>
                <div className={style.faculty}>{"user.location.city"}</div>
              </div>
            </div>
            <div className={style.followButton}>
              {user.followed ? (
                <button
                  onClick={() => {
                    this.props.unfollow(user.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    this.props.follow(user.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Users;

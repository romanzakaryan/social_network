import React from "react";
import style from "./users.module.css";
import * as axios from "axios";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => {
        console.log(12312312312312);
        this.props.setUsers(response.data.users);
      });
  }
  render() {
    return (
      <div>
        {this.props.users.map(user => (
          <div key={user.id} className={style.userInfo}>
            <span className={style.leftPart}>
              <div>
                <img alt="avatar" src={user.avatar} className={style.avatar} />
              </div>
            </span>
            <div className={style.rightPart}>
              <div className={style.personalInfo}>
                <div className={style.fullName}>{user.fullName}</div>
                <div className={style.status}>{user.status}</div>
              </div>
              <div className={style.schoolInfo}>
                <div className={style.school}>{user.location.school}</div>
                <div className={style.faculty}>{user.location.faculty}</div>
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

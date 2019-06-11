import React from "react";
import style from "./users.module.css";
import UserPhoto from "./../../assets/images/user.png"



let Users = props => {
  let pagesCount = Math.ceil(props.totalCount / props.pageSize)
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div>
      <div>
        {pages.map(p => {
          return <span key={p} className={props.currentPage === p ? style.selectedPage : ''}
            onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
        })}
      </div>
      {props.users.map(user => (
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
                  props.unfollow(user.id);
                }}
              >
                Unfollow
                </button>
            ) : (
                <button
                  onClick={() => {
                    props.follow(user.id);
                  }}
                >
                  Follow
                </button>
              )}
          </div>
        </div>
      ))}
    </div>
  )
}



export default Users;

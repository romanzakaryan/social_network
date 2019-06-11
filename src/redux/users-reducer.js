const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

let initialState = {
  users: [],
  totalCount: 0,
  pageSize: 5,
  currentPage: 1
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        })
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        })
      };

    case SET_USERS:
      return {
        ...state,
        users: [...action.users]
      };

    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.totalCount
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      }

    default:
      return state;
  }
};

export const followActionCreator = userId => ({ type: FOLLOW, userId });
export const unfollowActionCreator = userId => ({ type: UNFOLLOW, userId });
export const setUsersActionCreator = users => ({ type: SET_USERS, users });
export const setUsersTotalCount = totalCount => ({ type: SET_TOTAL_COUNT, totalCount });
export const setCurrentPage = currentPage => ({ type: SET_CURRENT_PAGE, currentPage });

export default usersReducer;

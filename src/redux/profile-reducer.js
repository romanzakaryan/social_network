const ADD_POST = "ADD-POST";
const CHANGE_POST_TEXT = "CHANGE-POST-TEXT";

let initialState = {
  posts: [
    { id: 1, post: "Hello I want to show you my magic!", likesCount: 17 },
    { id: 2, post: "What do you thing about it?", likesCount: 11 },
    { id: 3, post: "Welcome to Hogwarts!!!", likesCount: 13 }
  ],
  newPostText: ""
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: state.posts.length + 1,
        post: state.newPostText,
        likesCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ""
      };
    }
    case CHANGE_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const changePostTextActionCreator = text => ({
  type: CHANGE_POST_TEXT,
  newText: text
});

export default profileReducer;

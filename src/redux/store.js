import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, post: "Hello I want to show you my magic!", likesCount: 17 },
        { id: 2, post: "What do you thing about it?", likesCount: 11 },
        { id: 3, post: "Welcome to Hogwarts!!!", likesCount: 13 }
      ],
      newPostText: ""
    },
    dialogsPage: {
      dialogs: [
        {
          id: 1,
          name: "Hermione Granger",
          avatar:
            "http://images4.fanpop.com/image/photos/24400000/Hermione-Granger-Wallpaper-hermione-granger-24489046-1024-768.jpg"
        },
        {
          id: 2,
          name: "Ron Weasley",
          avatar:
            "https://i0.wp.com/fellowshipandfairydust.com/wp-content/uploads/2018/05/ron1-300x300.png?resize=500%2C500&ssl=1"
        },
        {
          id: 3,
          name: "Albus Dumbledore",
          avatar:
            "http://3.bp.blogspot.com/-q5l5NYOvfKc/Te2cU-aNb2I/AAAAAAAABY8/zhgmZkTYcXk/s1600/Albus_Dumbledore.JPG"
        },
        {
          id: 4,
          name: "Lord Voldemort",
          avatar:
            "https://upload.wikimedia.org/wikipedia/en/a/a3/Lordvoldemort.jpg"
        }
      ],
      messages: [
        { id: 1, message: "I will prepare you for exam" },
        { id: 2, message: "I can be like a dude" },
        { id: 3, message: "I will show you the big magic" },
        { id: 4, message: "I want to kill you" }
      ],
      newMessageText: ""
    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log("auhuhuuhhu");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    profileReducer(this._state.profilePage, action);
    dialogsReducer(this._state.dialogsPage, action);
    sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
};

export default store;
window.store = store;

const SEND_MESSAGE = "SEND-MESSAGE";
const CHANGE_MESSAGE_TEXT = "CHANGE-MESSAGE-TEXT";

let initialState = {
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
      avatar: "https://upload.wikimedia.org/wikipedia/en/a/a3/Lordvoldemort.jpg"
    }
  ],
  messages: [
    { id: 1, message: "I will prepare you for exam" },
    { id: 2, message: "I can be like a dude" },
    { id: 3, message: "I will show you the big magic" },
    { id: 4, message: "I want to kill you" }
  ],
  newMessageText: ""
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let messageText = state.newMessageText;
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: state.messages.length + 1,
            message: messageText
          }
        ],
        newMessageText: ""
      };
    case CHANGE_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newText
      };
    default:
      return state;
  }
};

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const changeMesageTextActionCreator = text => ({
  type: CHANGE_MESSAGE_TEXT,
  newText: text
});

export default dialogsReducer;

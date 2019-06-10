import Dialogs from "./Dialogs";

import {
  changeMesageTextActionCreator,
  sendMessageActionCreator
} from "./../../redux/dialogs-reducer";
import { connect } from "react-redux";

let mapStateToProps = state => {
  return {
    dialogsPage: state.dialogsPage
  };
};

let mapDispatchToProps = dispatch => {
  return {
    onSendMessageClick: () => {
      dispatch(sendMessageActionCreator());
    },
    onNewMessageChange: body => {
      dispatch(changeMesageTextActionCreator(body));
    }
  };
};

const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);

export default DialogsContainer;

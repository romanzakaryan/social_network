import Dialogs from "./Dialogs";

import {
  sendMessage,
  changeMesageText
} from "./../../redux/dialogs-reducer";
import { connect } from "react-redux";

let mapStateToProps = state => {
  return {
    dialogsPage: state.dialogsPage
  };
};

let mapDispatchToProps = {
  sendMessage,
  changeMesageText
};

const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);

export default DialogsContainer;

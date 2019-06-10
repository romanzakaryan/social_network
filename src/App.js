import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import { Route } from "react-router-dom";

const App = props => {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <div className="app-wrapper-content">
        <Route path="/profile" render={() => <ProfilePage />} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/users" render={() => <UsersContainer />} />
      </div>
    </div>
  );
};

export default App;

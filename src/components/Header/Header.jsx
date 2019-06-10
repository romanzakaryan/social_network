import React from "react";

import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <img
        className={style.header_img}
        alt="logo"
        src="https://vignette.wikia.nocookie.net/harrypotter/images/a/ae/Hogwartscrest.png/revision/latest?cb=20110806202805"
      />
    </header>
  );
};

export default Header;

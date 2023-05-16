import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import Sidebar from "../Sidebar/Sidebar";

import classes from "./header.module.scss";

const Header: FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleBurgerClick = () => {
    setOpen((prevState) => !prevState);
  };

  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <header>
      <div className={classes.menu}>
        {isOpen ? (
          <div className={classes.burger}>
            <Sidebar setOpen={setOpen} />
          </div>
        ) : (
          <div className={classes.burger} onClick={handleBurgerClick}>
            <span className={classes.burger_element}></span>
          </div>
        )}
        <Link to="/">
          <Logo className={classes.logo} fill="black" />
        </Link>
      </div>
      <div className={classes.user}>
        <span>LOG IN</span>
        <span>SALE</span>
      </div>
    </header>
  );
};

export default Header;

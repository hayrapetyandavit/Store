import { FC } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

import classes from "./errorPage.module.scss";

interface IProps {
  message: string;
}

const ErrorPage: FC<IProps> = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  
  return (
    <div className={classes.wrapper}>
      <img
        className={classes.logo}
        src={logo}
        onClick={handleClick}
        alt="Logo"
      />
      <div className={classes.content}>
        <div>
          <div className={classes.title}>{props.message}</div>
          <span className={classes.subtitle}>
            we are sorry but this page is no longer available on our web site.
          </span>
        </div>
        <button onClick={handleClick}>go to home page</button>
      </div>
    </div>
  );
};

export default ErrorPage;

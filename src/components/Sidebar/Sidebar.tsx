import { FC, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useGetAllCategoriesQuery } from "../../services/storeApi";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { CategoriesType } from "../../types/productsTypes";

import classes from "./sidebar.module.scss";
import { NavLink } from "react-router-dom";

interface IProps {
  setOpen: (arg: boolean) => void;
}

const Sidebar: FC<IProps> = (props) => {
  const { setOpen } = props;

  const { data } = useGetAllCategoriesQuery("categories");

  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, setOpen);

  const adapterCategories = (data: CategoriesType) => {
    return data?.slice(1);
  };

  const setActive = ({ isActive }: { isActive: boolean }) =>
    isActive ? classes.active : classes.inActive;

  return (
    <div className={classes.sidebar} ref={wrapperRef}>
      <div className={classes.close} onClick={() => setOpen(false)}>
        <span className={classes.close_element}></span>
      </div>
      <div className={classes.content}>
        <div className={classes.categories}>
          <ul>
            {adapterCategories(data)?.map((item) => {
              return (
                <li key={Math.random() + item}>
                  <NavLink
                    to={`${item.replace("'s clothing", "")}`}
                    className={setActive}
                  >
                    {item}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

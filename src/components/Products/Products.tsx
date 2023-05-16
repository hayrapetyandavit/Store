import { FC, memo } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useGetProductsByCategorieQuery } from "../../services/storeApi";
import { formatCurrency } from "../../utilities/formatCurrency";
import { ProductByCategorieType } from "../../types/productsTypes";
import Spinner from "../Spinner/Spinner";
import ErrorPage from "../ErrorPage/ErrorPage";

import classes from "./products.module.scss";

const Products: FC<{ categorie: string }> = (props) => {
  const { data, error, isLoading } = useGetProductsByCategorieQuery(
    props.categorie
  );
  if (error && "error" in error) {
    return <ErrorPage message={error.error} />;
  }

  if (data) {
    return (
      <div className={classes.container}>
        <View data={data} />
      </div>
    );
  }

  return <Spinner />;
};

const View: FC<{ data: ProductByCategorieType[] }> = memo(({ data }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleItemClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const id = e.currentTarget.id;
    localStorage.setItem("id", id);
    navigate(`${id}`);
  };

  return +location.pathname.slice(-1) > 0 ? (
    <Outlet />
  ) : (
    <ul className={classes.list}>
      {data?.map((item) => (
        <li
          key={item.id}
          className={classes.item}
          id={`${item.id}`}
          onClick={handleItemClick}
        >
          <img src={item.image} alt="Product image" />
          <div className={classes.title}>
            <div>{item.title}</div>
            <span>{formatCurrency(+item.price)}</span>
          </div>
        </li>
      ))}
    </ul>
  );
});

export default Products;

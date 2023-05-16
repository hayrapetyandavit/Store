import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useGetProductByIdQuery } from "../../services/storeApi";
import { formatCurrency } from "../../utilities/formatCurrency";
import ErrorPage from "../ErrorPage/ErrorPage";
import Spinner from "../Spinner/Spinner";

import classes from "./productItem.module.scss";

const ProductItem: FC = () => {
  const { data, error, isLoading } = useGetProductByIdQuery(
    localStorage.getItem("id") || ""
  );

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  if (error && "error" in error) {
    return <ErrorPage message={error.error} />;
  }

  if (data) {
    return (
      <div className={classes.container}>
        <div className={classes.description}>{data.description}</div>
        <div className={classes.image}>
          <img src={data.image} alt="Product image" />
        </div>
        <div className={classes.sell}>
          <div>
            <div className={classes.title}>{data.title}</div>
            <span>Price: {formatCurrency(+data.price)}</span>
          </div>
          <div className={classes.rating}>
            <span>Count: {data.rating?.count}</span>
            <span>Rate: {data.rating?.rate}</span>
          </div>
          <button>add to bag</button>
          <span onClick={goBack}>&#8636; go back</span>
        </div>
      </div>
    );
  }

  return <Spinner />;
};

export default ProductItem;

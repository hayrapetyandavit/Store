import {
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import PublicLayout from "./layout/PublicLayout";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import ProductItem from "./components/ProductItem/ProductItem";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="jewelery" element={<Products categorie="jewelery" />}>
          <Route path=":id" element={<ProductItem />} />
        </Route>
        <Route path="men" element={<Products categorie="men's clothing" />}>
          <Route path=":id" element={<ProductItem />} />
        </Route>
        <Route path="women" element={<Products categorie="women's clothing" />}>
          <Route path=":id" element={<ProductItem />} />
        </Route>
      </Route>
      <Route path="*" element={<ErrorPage message="Page Not Found" />} />
    </Route>
  )
);

export default router;

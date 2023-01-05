import React from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import AllProducts from "./components/AllProducts";
import AddProduct from "./components/AddProduct";
import Menus from "./components/Menus";
import { Container, Row, Col } from "reactstrap";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/products",
    element: <AllProducts/>,
  },
  {
    path: "/add-product",
    element: <AddProduct/>,
  },
]);

function App() {
  return (
    <div>
      <Container>
        <Header />
        <RouterProvider router={router} />
      </Container>
    </div>
  );
}

export default App;

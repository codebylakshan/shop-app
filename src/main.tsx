import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import About from "./About.tsx";
import NotFoundPage from "./404.tsx";
import Products from "./Products.tsx";
import Product from "./Product.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/about-us",
    element: <About />,
  },
  { path: "products", element: <Products /> },
  { path: "products/:id", element: <Product /> },
]);

createRoot(document.getElementById("root")!).render(
  //<StrictMode>
    <RouterProvider router={router} />
  //</StrictMode>
);

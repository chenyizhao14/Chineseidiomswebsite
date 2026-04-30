import { createBrowserRouter } from "react-router";
import { Home } from "./components/Home";
import { IdiomDetail } from "./components/IdiomDetail";
import { Root } from "./components/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "idiom/:id", Component: IdiomDetail },
    ],
  },
]);

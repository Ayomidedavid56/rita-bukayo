import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import OurStory from "./pages/OurStory";
import Gallery from "./pages/Gallery";
import GiveaGift from "./pages/GiveaGift";
import ShareYourExperience from "./pages/ShareYourExperience";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "our-story",
    element: <OurStory />,
  },
  {
    path: "gallery",
    element: <Gallery />,
  },
  {
    path: "give-a-gift",
    element: <GiveaGift />,
  },
  {
    path: "share-your-experience",
    element: <ShareYourExperience />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

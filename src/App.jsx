import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Gallery from "./components/Gallery";
import Root from "./components/Root";
import ErrorPage from "./error-page";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home/Home";
import Recommendation from "./components/Recommendation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/recommendation",
        element: <Recommendation />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

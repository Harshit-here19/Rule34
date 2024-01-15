import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Gallery from "./components/Gallery";
import Root from "./components/Root";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/gallery",
        element: <Gallery />,
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

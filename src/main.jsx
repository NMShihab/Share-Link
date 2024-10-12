import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./error-page";
import Layout from "./routes/layout";
import { UserProvider } from "./context/UserContext";
import AddLinkPage from "./routes/AddLinkPage";
import AddProfile from "./routes/AddProfile";
import PreviewPage from "./routes/Preview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "create-link",
        element: <AddLinkPage />,
      },
      {
        path: "create-profile",
        element: <AddProfile />,
      },
    ],
  },
  {
    path: "/preview",
    element: <PreviewPage />,
    errorElement: <ErrorPage />,
  },
]);
createRoot(document.getElementById("root")).render(
  <UserProvider>
    <RouterProvider router={router} />
  </UserProvider>
);

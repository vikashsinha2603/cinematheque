import { createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { RouterProvider } from "react-router-dom";
import SearchPage from "./SearchPage";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: '/movies/:movieName',
      element: <SearchPage />,
    },
  ]);

  return (
    <div className='overflow-x-hidden scrollbar-thin scrollbar-webkit'>
      <RouterProvider router={appRouter} />
    </div>
  );
};
export default Body;

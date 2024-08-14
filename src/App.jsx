import Home from './Routes/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SignIn from './Routes/SignForm/SignIn';
import SignUp from './Routes/SignForm/SignUp';
import ForgotPassword from './Routes/SignForm/forgotPassword';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: 'forgotpassword',
        element: <ForgotPassword />
      }
    ],
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

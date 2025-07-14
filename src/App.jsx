import "./App.css";
import Home from "../src/Home/Index";
import About from "../src/About/Index";
import Gallery from "../src/Gallery/Index";
import Detail from "../src/Detail/Index";
import Contact from "../src/Contact/Index";
import Games from "../src/Games/Index";
import Login from '../src/Auth/Login/Index'
import SignUp from '../src/Auth/SignUp/Index'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/games", element: <Games /> },
    { path: "/gallery", element: <Gallery /> },
    { path: "/contact", element: <Contact /> },
    { path: "/detail", element: <Detail /> },
    {path:'/login', element:<Login/>},
    {path:'/signup', element:<SignUp/>}
  ]);

  return <RouterProvider router={router} />;
}

export default App;

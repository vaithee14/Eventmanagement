import { RouterProvider } from "react-router-dom";
import "./App.css";


import router from "./app/Router";

function App(){
  return(
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App;

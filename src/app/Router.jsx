import { createBrowserRouter } from "react-router-dom";
import Eventprojects from "../component/Eventproject";
import Musicbtn from "../component/Categories/musicbtn";
import Birthdaybtn from "../component/Categories/Bithday";
import Enquiry from "../component/Enquiry/Enquiry";
import WeddingBtn from "../component/Categories/Wedding";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Eventprojects />,
  },

  {
    path: "/category/music",
    element: <Musicbtn />,
  },

  {
    path: "/category/birthday",
    element: <Birthdaybtn />,
  },

  {
    path: "/category/wedding",
    element: <WeddingBtn />,
  },
  {
    path: "/enquiry",
    element: <Enquiry />,
  },
]);

export default router;

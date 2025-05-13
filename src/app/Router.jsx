import { createBrowserRouter } from "react-router-dom";
import Eventprojects from "../component/Eventproject";
import Birthdaybtn from "../component/Categories/Bithday";
import Enquiry from "../component/Enquiry/Enquiry";
import WeddingBtn from "../component/Categories/Wedding";
import CorporateFuction from "../component/Categories/Corporate";
import Reception from "../component/Categories/Reception";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Eventprojects />,
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
  {
    path: "/category/corporate events",
    element: <CorporateFuction />,
  },
  {
    path: "/category/reception",
    element: <Reception />,
  },
]);

export default router;

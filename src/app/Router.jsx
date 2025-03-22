import { createBrowserRouter } from "react-router-dom";
import Eventprojects from "../component/Eventproject";
import Musicbtn from "../component/Categories/musicbtn";
import Ticketsbooking from "../component/Categories/Categoryticket";
import Categorypaymentmethod from "../component/Categories/CategoryPayment";
import Dancingbtn from "../component/Categories/Dancingbtn";
import DanceTicketSection from "../component/Categories/DanceTicketSection";

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
    path: "/ticketsection/:musicId",
    element: <Ticketsbooking />,
  },
  {
    path: "/danceticketsection/:danceId",
    element: <DanceTicketSection />,
  },

  {
    path: "/paymentmethods",
    element: <Categorypaymentmethod />,
  },

  {
    path: "/category/dancing",
    element: <Dancingbtn />,
  },

]);

export default router;

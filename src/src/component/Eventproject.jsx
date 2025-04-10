import Navbar from "./Header/Navbar";
import Categories from "./Categories/Categories";
import FooterSection from "./Footersection/Footer";
import Sponsers from "./Partners/Partners";
import TicketSection from "./Ticketsection/Tickets";
import Timer from "./Timer/Timer";
import UpcoimgEvents from "./UpcomeEvent/Upcome";

export default function Eventprojects() {
  return (
    <>
      <Navbar />
      <Categories />
      <UpcoimgEvents />
      <Timer />
      <Sponsers />
      <TicketSection />
      <FooterSection />
    </>
  );
}

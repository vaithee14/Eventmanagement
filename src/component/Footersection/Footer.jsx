import grid1 from "../../assets/grid1.jpg";
import grid2 from "../../assets/grid2.jpg";
import beachcelebration from "../../assets/birthday.jpg";
import weekend from "../../assets/music.jpg";

import "./Footer.css";

export default function FooterSection() {
  return (
    <section className="footer" id="service">
      <div className="footer-left">
        <h1 className="footer-logo">EVENT PLANNER</h1>
        <p className="footer-description">
          Subscribe to get latest updates about events, festivals, and more.
        </p>
      </div>
      <div className="footer-center">
        <h2 className="footer-heading">SOCIAL MEDIA</h2>
        <div className="instagram-gallery">
          <img src={grid1} alt="Event photo 1" />
          <img src={grid2} alt="Event photo 2" />
          <img src={beachcelebration} alt="Beach celebration" />
          <img src={weekend} alt="Music celebration" />
        </div>
      </div>
      <div className="footer-right">
        <h2 className="footer-heading">Subscribe</h2>
        <form className="newsletter-form">
          <input type="email" placeholder="E-Mail here" />

          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
}

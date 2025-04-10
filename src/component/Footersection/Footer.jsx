import "./Footer.css";
import grid1 from "../../assets/grid1.jpg";
import grid2 from "../../assets/grid2.jpg";
import beachcelebration from "../../assets/birthday.jpg";
import weekend from "../../assets/music.jpg";
import { useState } from "react";
import axios from "axios";

export default function FooterSection() {
  const [userEmail, setUserEmail] = useState("");

  const addUserRegistration = async () => {
    try {
      const emailReg = { email };
      const response = await axios.post(
        "http://localhost:4050/user/subscrib/user/email",
        emailReg,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      alert(response.data.message);
    } catch (error) {
      console.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <section className="footer" id="service" >
      <div className="footer-left">
        <h1 className="footer-logo">CRAZY EVENTS</h1>
        <p className="footer-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus laboriosam numquam deserunt voluptatibus vel ullam ad
          reprehenderit sunt sint, nisi, eligendi earum quo reiciendis
          architecto quas obcaecati accusantium nihil quis corrupti sequi eos
          commodi. Vitae, adipisci. Fugit animi ipsum inventore autem, vel illum
          consectetur ipsam excepturi error et minima commodi!
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

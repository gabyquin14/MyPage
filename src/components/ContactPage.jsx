import React, { useState, useEffect } from "react";
import "../styles/ContactPage.scss";
import { ContactPopUp } from "../utilities/ContactPopUp/ContactPopUp";

export function ContactPage() {
  const [showPopUp, setshowPopUp] = useState(false);
  useEffect(() => {
    if (showPopUp) {
      document.body.style = "overflow-y:hidden;";
    }
    return () => {
      document.body.style = "overflow-y:auto;";
    };
  }, [showPopUp]);

  return (
    <div className="contact" id="contactPageRef">
      <div className="contact__wrapper"></div>
      <div className="contact__content">
        <h1 className="contact__maintitle">Interested in working with me?</h1>
        <button
          className="contact__calltoaction"
          onClick={() => setshowPopUp(true)}
        >
          LET'S TALK!
        </button>
        <div className="contact__socialmedia">
          <a href="/" className="contact__socialmedialink">
            <img src="./images/contact/linkedinLogo.svg" alt="" />
          </a>
          <a href="/" className="contact__socialmedialink">
            <img src="./images/contact/github-logo.svg" alt="" />
          </a>
          <a href="/" className="contact__socialmedialink">
            <img src="./images/contact/twitter-logo.svg" alt="" />
          </a>
        </div>
      </div>
      <img
        className="contact__seafloor"
        src="./images/contact/wave.svg"
        alt="Sea floor"
      />
      <img
        className="contact__adultwhale1"
        src="./images/contact/adultwhale.svg"
        alt="Adult whale"
      />
      <img
        className="contact__babywhale"
        src="./images/contact/adultwhale.svg"
        alt="Adult whale"
      />
      <img
        className="contact__adultwhale2"
        src="./images/contact/babywhale.svg"
        alt="Baby whale"
      />
      {showPopUp && <ContactPopUp onExit={(status) => setshowPopUp(status)} />}
    </div>
  );
}

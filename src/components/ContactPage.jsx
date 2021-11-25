import React, { useState, useEffect } from "react";
import "../styles/ContactPage.scss";
import { ContactPopUp } from "../utilities/ContactPopUp/ContactPopUp";

export function ContactPage() {
  const [toggleModal, setToggleModal] = useState(false);
  // const toggleModalFunction = () => {
  //   if (toggleModal) {
  //     document.body.style = "overflow-y:hidden;";
  //   }
  //   return () => {
  //     document.body.style = "overflow-y:auto;";
  //   };
  // };

  useEffect(() => {
    // toggleModalFunction();
    let modal = document.querySelector("#popUp");
    let bottomNavbar = document.querySelector("#bottomNavbar");

    if (modal) {
      bottomNavbar.style.bottom = "-100px";
    } else {
      bottomNavbar.style.bottom = "0px";
    }
  }, [toggleModal]);

  // useEffect(() => {

  // }, [toggleModal]);

  return (
    <div className="contact" id="contactPageRef">
      <div className="contact__wrapper"></div>
      <div className="contact__content">
        <h1 className="contact__maintitle">Interested in working with me?</h1>
        <button
          className="contact__calltoaction"
          onClick={() => setToggleModal(true)}
        >
          LET'S TALK!
        </button>
        <div className="contact__socialmedia">
          <a
            href="https://www.linkedin.com/in/gabriela-quintanilla-2a8200211/"
            rel="noopener noreferrer"
            target="_blank"
            className="contact__socialmedialink"
          >
            <img src="./images/contact/linkedinLogo.svg" alt="linkedIn Logo" />
          </a>
          <a
            href="https://github.com/gabyquin14"
            rel="noopener noreferrer"
            target="_blank"
            className="contact__socialmedialink"
          >
            <img src="./images/contact/github-logo.svg" alt="Github Logo" />
          </a>
          <a
            href="https://wa.me/573146529109"
            rel="noopener noreferrer"
            target="_blank"
            className="contact__socialmedialink"
          >
            <img src="./images/contact/whatsapp_logo.svg" alt="Whatsapp Logo" />
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
      {toggleModal && (
        <ContactPopUp onExit={(status) => setToggleModal(status)} />
      )}
    </div>
  );
}

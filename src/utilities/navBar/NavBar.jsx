import React, { useState, useEffect } from "react";
import "../navBar/NavBar.scss";

export function NavBar({ goToAbout, goToPortfolio, goToContact, goToTop }) {
  const [showNavbar, setshowNavbar] = useState(false);
  const [bottomPage, setBottomPage] = useState(false);
  const [showMobileNavbar, setshowMobileNavbar] = useState(false);
  /*determina si muestra o no el navbar en scroll */
  let navbarOnScroll = showNavbar ? "header active" : "header";
  /**determina si estamos al final de la pagina */
  let isBottomPage = bottomPage ? "header dont" : "";
  /**determina si estamos en modo mobil entonces se muestra el hambg menu */
  let showMobileNavbarBtn = showMobileNavbar ? "open" : "";
  /*cuando se le da click entonces se muestra la x */
  let isMobileNavbarMenuActive = showMobileNavbar ? "active" : "";

  /*functions */
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    window.addEventListener("wheel", visibleBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
      window.removeEventListener("wheel", visibleBackground);
    };
  });
  /** cambia el color si has hecho scroll y ya no estasen el inicio */
  const changeBackground = () => {
    if (window.scrollY === 0 && window.scrollY <= 0) {
      setshowNavbar(false);
    } else {
      setshowNavbar(true);
    }
    if (window.scrollY >= 3400) {
      setBottomPage(true);
    } else {
      setBottomPage(false);
    }
  };

  /** si haces scroll se esconde, pero si subes entonces se muestra navbar */
  const visibleBackground = (event) => {
    changeBackground();
    let hidden = document.querySelector(".header__itemscontainer__hidden");

    if (event.deltaY > 80) {
      // we are going down
      if (hidden) {
        document.getElementById("navbar").style.top = "0px";
      } else {
        //  let currentPage = document.querySelector("#popUp");
        document.getElementById("navbar").style.top = "-100px";
      }
    } else {
      // we are going up
      document.getElementById("navbar").style.top = "0";
    }
  };

  return (
    <ul
      id="navbar"
      className={`${navbarOnScroll} ${isBottomPage} ${isMobileNavbarMenuActive}`}
    >
      <div className="header__content">
        <li className="header__logo" onClick={goToTop}>
          <span>DIGABS</span>
          <img src="./images/landingPage/logoWhale.png" alt="Digabs logo" />
        </li>
        <div
          className={`header__itemscontainer ${
            showMobileNavbar ? "header__itemscontainer__hidden" : ""
          }`}
        >
          <li className="header__item" onClick={goToAbout}>
            ABOUT
          </li>
          <li className="header__item" onClick={goToPortfolio}>
            PORTFOLIO
          </li>
          <li className="header__item" onClick={goToContact}>
            CONTACT
          </li>
          <li className={showMobileNavbar ? "header__item" : "header__btn"}>
            <a href="/Gabriela Quintanilla.pdf" download>
              DOWNLOAD CV
            </a>
          </li>
        </div>

        <button
          onClick={() => setshowMobileNavbar(!showMobileNavbar)}
          className={`header__mobileNavbar  ${showMobileNavbarBtn} `}
        >
          <div className="header__mobileNavbar--burger"></div>
        </button>
      </div>
    </ul>
  );
}

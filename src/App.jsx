import React from "react";
import { AboutPage } from "./components/AboutPage";
import { LandingPage } from "./components/LandingPage";
import { PortfolioPage } from "./components/PortfolioPage";
import { ContactPage } from "./components/ContactPage";
import { NavBar } from "./utilities/navBar/NavBar";
import { BottomNavbar } from "./utilities/BottomNavbar/BottomNavbar";
import "./index.scss";

export function App() {
  const goToLandingPage = () => {
    let currentPage = document.querySelector("#LandingPageRef");
    window.scrollTo({ top: currentPage.offsetTop, behavior: "smooth" });
  };
  const goToSkillsPage = () => {
    let currentPage = document.querySelector("#aboutPageRef");
    window.scrollTo({ top: currentPage.offsetTop + 570, behavior: "smooth" });
    console.log(currentPage.offsetTop);
  };
  const goToAboutPage = () => {
    let currentPage = document.querySelector("#aboutPageRef");
    window.scrollTo({ top: currentPage.offsetTop, behavior: "smooth" });
  };
  const goToPortfolioPage = () => {
    let currentPage = document.querySelector("#portfolioPageRef");
    window.scrollTo({ top: currentPage.offsetTop, behavior: "smooth" });
  };
  const goToContactPage = () => {
    let currentPage = document.querySelector("#contactPageRef");
    window.scrollTo({ top: currentPage.offsetTop, behavior: "smooth" });
  };

  return (
    <div>
      <NavBar
        goToAbout={goToAboutPage}
        goToTop={goToLandingPage}
        goToPortfolio={goToPortfolioPage}
        goToContact={goToContactPage}
      />
      <LandingPage goToPortfolio={goToPortfolioPage} />
      <AboutPage />
      <PortfolioPage />
      <ContactPage />
      <BottomNavbar
        goToPortfolio={goToPortfolioPage}
        goToSkills={goToSkillsPage}
        goToContact={goToContactPage}
      />
    </div>
  );
}

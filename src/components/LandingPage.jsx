import React from "react";
import "../styles/LandingPage.scss";

export function LandingPage({ goToPortfolio }) {
  return (
    <div>
      <div className="container" id="LandingPageRef">
        <div className="container__content">
          <h3 className="container__salute">HI THERE!</h3>
          <h1 className="container__name">
            I'm <span className="container__name--active">Gabriela</span>
          </h1>

          <p className="container__paragraph">
            We come up with ‘how it would look attractive’ <br /> and 'how it
            would work effectively
          </p>
          <button className="container__button" onClick={goToPortfolio}>
            SEE MY PORTFOLIO <div className="container__button--shadow"></div>
          </button>

          <hr className="container__line" />
        </div>

        <img
          className="container__image"
          src="./images/landingPage/whalesSwimming.png"
          alt="whales_background"
        />
      </div>
    </div>
  );
}

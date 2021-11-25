import React from "react";
import "../styles/AboutPage.scss";

export function AboutPage() {
  return (
    <div className="about" id="aboutPageRef">
      <h1 className="about__sectionTitle">A little about myself</h1>
      <div className="about__content">
        <div className="about__bio">
          <h3 className="about__subtitle">Gabriela Quintanilla</h3>

          <div className="about__wrapper">
            <img
              src="./images/about/Gabriela-Quintanilla-min.jpg"
              alt="my_photo"
              className="about__selfportrait"
            />
          </div>

          <p className="about__selfdescription">
            I'm a front-end developer who cares deeply about user experience
            with more than 2 years of experience creating scalable applications.
            <br /> <br />
            Serious passion for solving challenging problems, and new
            technologies I like to code things from scratch, and enjoy bringing
            ideas to life in the browser.
          </p>
        </div>
        <div className="about__skillset">
          <img
            className="about__koi1"
            src="/images/about/koi1.png"
            alt="kois-fish"
          />
          <h3 className="about__subtitle">My skill set includes</h3>
          <p className="about__skilldescription">
            I think it is the mission of designers as well as{" "}
            <br className="about__mobileBreak" />
            engineers to promote innovation.
          </p>
          <div className="about__tech">
            <div className="about__techgroup">
              <div className="about__techitem about__techitem--nuxt">
                <img src="./images/techStack/nuxt.svg" alt="Nuxt" />
              </div>
            </div>

            <div className="about__techgroup">
              <div className="about__techitem about__techitem--vue">
                <img src="./images/techStack/vue.png" alt="Vue" />
              </div>
              <div className="about__techitem about__techitem--webpack">
                <img src="./images/techStack/webpack.png" alt="Webpack" />
              </div>
            </div>

            <div className="about__techgroup">
              <div className="about__techitem about__techitem--htmlCSS">
                <img src="./images/techStack/html.svg" alt="HtmlCSS" />
              </div>
              <div className="about__techitem about__techitem--javascript">
                <img src="./images/techStack/javascript.png" alt="Javascript" />
              </div>
              <div className="about__techitem about__techitem--axios">
                <img src="./images/techStack/axios.png" alt="Axios" />
              </div>
            </div>

            <div className="about__techgroup">
              <div className="about__techitem about__techitem--svelte">
                <img src="./images/techStack/svelte.png" alt="Svelte" />
              </div>
              <div className="about__techitem about__techitem--workbox">
                <img src="./images/techStack/workbox.svg" alt="Workbox" />
              </div>
            </div>

            <div className="about__techgroup">
              <div className="about__techitem about__techitem--react">
                <img src="./images/techStack/react.png" alt="React" />
              </div>
            </div>
          </div>
          <img
            className="about__koi2"
            src="/images/about/koi2.png"
            alt="kois-fish"
          />

          <img
            className="about__koi4"
            src="/images/about/koi4.png"
            alt="kois-fish"
          />
          <div className="about__techMobile">
            <div className="about__techgroup">
              <div className="about__techitem about__techitem--nuxt">
                <img src="./images/techStack/nuxt.svg" alt="Nuxt" />
              </div>
              <div className="about__techitem about__techitem--vue">
                <img src="./images/techStack/vue.png" alt="Vue" />
              </div>
              <div className="about__techitem about__techitem--webpack">
                <img src="./images/techStack/webpack.png" alt="Webpack" />
              </div>
            </div>

            <div className="about__techgroup">
              <div className="about__techitem about__techitem--htmlCSS">
                <img src="./images/techStack/html.svg" alt="HtmlCSS" />
              </div>
              <div className="about__techitem about__techitem--javascript">
                <img src="./images/techStack/javascript.png" alt="Javascript" />
              </div>
              <div className="about__techitem about__techitem--axios">
                <img src="./images/techStack/axios.png" alt="Axios" />
              </div>
            </div>

            <div className="about__techgroup">
              <div className="about__techitem about__techitem--svelte">
                <img src="./images/techStack/svelte.png" alt="Svelte" />
              </div>
              <div className="about__techitem about__techitem--workbox">
                <img src="./images/techStack/workbox.svg" alt="Workbox" />
              </div>
              <div className="about__techitem about__techitem--react">
                <img src="./images/techStack/react.png" alt="React" />
              </div>
            </div>
          </div>
          <img
            className="about__koi6"
            src="/images/about/koi6.png"
            alt="kois-fish"
          />
        </div>
      </div>
      <div className="about__gradient"></div>
    </div>
  );
}

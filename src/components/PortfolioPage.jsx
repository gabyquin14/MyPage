import React from "react";
import "../styles/PortfolioPage.scss";
import { RightPortfolioTemplate } from "../utilities/portfolio/rightside/RightPortfolioTemplate";
import { LeftPortfolioTemplate } from "../utilities/portfolio/leftside/LeftPortfolioTemplate";

export function PortfolioPage() {
  return (
    <div className="portfolio" id="portfolioPageRef">
      <h1 className="portfolio__sectionTitle" style={{ padding: "5% 0 6%" }}>
        My Portfolio
      </h1>
      <RightPortfolioTemplate
        subtitle={["Spiritual Growth, ", "Renewal, ", "Mentorship"]}
        title="Implementing Spiritual <br/> and Personal development <br/> for ChurchRenewal"
        tech={[
          { name: "Figma", url: `./images/techStack/Figma-logo.svg` },
          { name: "VueJS", url: `./images/techStack/vue.png` },
          { name: "Workbox", url: `./images/techStack/workbox.svg` },
          { name: "Vuetify", url: `./images/techStack/vuetify.png` },
        ]}
        projectImage={{
          name: "ChurchRenewal",
          url: `./images/portfolio/churchRenewal.png`,
        }}
      />
      <LeftPortfolioTemplate
        subtitle={["E-commerce, ", "Technology, ", "Sustainability"]}
        title="Creating eco-friendly <br/> marketplace platform <br/> for Ola Tech"
        tech={[
          { name: "AdobeXD", url: `./images/techStack/adobe.png` },
          { name: "VueJS", url: `./images/techStack/vue.png` },
          { name: "NuxtJS", url: `./images/techStack/nuxt.svg` },
          { name: "Tailwind", url: `./images/techStack/tailwind.png` },
        ]}
        projectImage={{
          name: "Ola.Tech",
          url: `./images/portfolio/olatech.png`,
        }}
      />
      <div className="portolio__gradientmargin">
        <div className="portfolio__gradientwrapper"></div>
      </div>
    </div>
  );
}

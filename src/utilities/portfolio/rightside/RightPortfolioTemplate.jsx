import React from "react";
import "./RightPortfolioTemplate.scss";

export function RightPortfolioTemplate(props) {
  const subtitle = props.subtitle;
  const title = props.title;
  const tech = props.tech;
  const projectImage = props.projectImage;

  const displayTech = tech.map((item) => (
    <li className="righttemplate__techitem" key={item.name}>
      <img src={item.url} alt={`${item.name}-logo`} />
      <span>{item.name}</span>
    </li>
  ));
  const displayProjectImg = (
    <div className="righttemplate__projectimage">
      <img src={projectImage.url} alt={`${projectImage.name}-main-page`} />
    </div>
  );

  return (
    <div className="righttemplate">
      <div className="righttemplate__projectimagewrapper">
        {displayProjectImg}
      </div>
      <div className="righttemplate__content">
        <h3 className="righttemplate__subtitle">{subtitle}</h3>
        <div className="righttemplate__titlewrapper">
          <h1
            className="righttemplate__title"
            dangerouslySetInnerHTML={{ __html: title }}
          ></h1>
        </div>
        <div className="righttemplate__btnwrapper">
          <a href="/" className="righttemplate__btn">
            VIEW PROJECT
          </a>
        </div>

        <ul className="righttemplate__techgroup">{displayTech}</ul>
      </div>
    </div>
  );
}

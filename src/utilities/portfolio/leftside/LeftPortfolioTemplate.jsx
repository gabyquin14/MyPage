import React from "react";
import "./LeftPortfolioTemplate.scss";

export function LeftPortfolioTemplate(props) {
  const subtitle = props.subtitle;
  const title = props.title;
  const tech = props.tech;
  const projectImage = props.projectImage;
  const displayTech = tech.map((item) => (
    <li className="lefttemplate__techitem" key={item.name}>
      <img src={item.url} alt={`${item.name}-logo`} />
      <span>{item.name}</span>
    </li>
  ));
  const displayProjectImg = (
    <div className="lefttemplate__projectimage">
      <img src={projectImage.url} alt={`${projectImage.name}-main-page`} />
    </div>
  );

  return (
    <div className="lefttemplate">
      <div className="lefttemplate__projectimagewrapper">
        {displayProjectImg}
      </div>
      <div className="lefttemplate__content">
        <h3 className="lefttemplate__subtitle">{subtitle}</h3>
        <div className="lefttemplate__titlewrapper">
          <h1
            className="lefttemplate__title"
            dangerouslySetInnerHTML={{ __html: title }}
          ></h1>
        </div>
        <div className="lefttemplate__btnwrapper">
          <a href="/" className="lefttemplate__btn">
            VIEW PROJECT
          </a>
        </div>

        <ul className="lefttemplate__techgroup">{displayTech}</ul>
      </div>
    </div>
  );
}

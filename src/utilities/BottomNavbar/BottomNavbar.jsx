import React, { useEffect } from "react";
import "./BottomNavbar.scss";
import {
  FormatListBulletedOutlined,
  WorkOutlineOutlined,
  MailOutlineOutlined,
} from "@mui/icons-material";

export function BottomNavbar({ goToPortfolio, goToSkills, goToContact }) {
  const showBottomNavbar = () => {
    console.log(window.innerWidth);
    let bottomNavbar = document.getElementById("bottomNavbar");
    if (window.innerWidth >= 760) {
      bottomNavbar.style = "visibility:hidden";
    } else {
      bottomNavbar.style = "visibility:visible;";
    }
  };

  useEffect(() => {
    window.onscroll = function (ev) {
      let bottomNavbar = document.getElementById("bottomNavbar");
      if (
        window.innerHeight + window.pageYOffset >=
        document.body.offsetHeight
      ) {
        bottomNavbar.style.bottom = "-100px";
      } else {
        bottomNavbar.style.bottom = "0px";
      }
    };
    showBottomNavbar();
  }, []);
  return (
    <div className="bottomNavbar" id="bottomNavbar">
      <div className="bottomNavbar__section" onClick={goToPortfolio}>
        <WorkOutlineOutlined />
        <h3>PORTFOLIO</h3>
      </div>
      <div className="bottomNavbar__section" onClick={goToSkills}>
        <FormatListBulletedOutlined />
        <h3>SKILLS</h3>
      </div>
      <div className="bottomNavbar__section" onClick={goToContact}>
        <MailOutlineOutlined />
        <h3>HIRE ME!</h3>
      </div>
    </div>
  );
}

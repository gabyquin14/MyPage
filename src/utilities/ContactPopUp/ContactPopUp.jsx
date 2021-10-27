import React from "react";
import "./ContactPopUp.scss";

export function ContactPopUp(props) {
  return (
    <div className="wrapper">
      <div className="popup" id="popUp">
        <div className="popup__container">
          <div className="popup__resizeheader">
            <h1 className="popup__maintitle">
              Let's create something together!
            </h1>
            <img
              src="./images/contact/contactPopUp/exit.png"
              alt="exit"
              onClick={() => props.onExit(false)}
            />
          </div>

          <form className="popup__form" name="contact" method="POST" netlify>
            <input type="hidden" name="form-name" value="contact" />

            <div className="popup__inputwrapper">
              <input type="text" name="userName" required />
              <label className="popup__labelname" htmlFor="userName">
                <span className="popup__contentname">Name</span>
              </label>
            </div>

            <div className="popup__inputwrapper">
              <input type="email" name="userEmail" required />
              <label className="popup__labelname" htmlFor="userEmail">
                <span className="popup__contentname">Email</span>
              </label>
            </div>

            <div className="popup__inputwrapper popup__inputwrapper--textarea">
              <textarea
                name="userMessage"
                className="popup__formtextarea"
                max-cols="30"
                rows="10"
                required
              ></textarea>
              <label
                className="popup__labelname popup__labelname--textarea"
                htmlFor="userMessage"
              >
                <span className="popup__contentname popup__contentname--textarea">
                  Message
                </span>
              </label>
            </div>
            {/* <div
              className="popup__inputwrapper"
              data-netlify-recaptcha="true"
            ></div> */}
            <button className="popup__button" type="submit" name="submit">
              <span>SUBMIT</span>
            </button>
            <span className="popup__message">
              A response can be expected within 24 hours
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

import React from "react";
function About() {
  var name = "Artur Babloyan";
  var profilepic = "images/profilepic.jpg";
  var bio =
    "Use this bio section as your way of describing yourself and saying what you do, what technologies you like to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing in.";
  var street = "Avan Acharyan / 20";
  var city = "Yerevan";
  var state = " / Armenia";
  var zip = "006";
  var phone = "+374-96-16-66-95";
  var email = "artur11babloyan@gmail.com";

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={profilepic}
            alt="Artur Babloyan Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>{bio}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span>
                <br />
                <span>
                  {street}
                  <br />
                  {city} {state}, {zip}
                </span>
                <br />
                <span>{phone}</span>
                <br />
                <span>{email}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

import React from "react";

function Header(props) {
  const networksData = [
    {
      name: "facebook",
      url: "https://www.facebook.com/artur.babloyan.96",
      className: "fa fa-facebook",
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/artur-babloyan-1248501b2/",
      className: "fa fa-linkedin",
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/arturbabloyan/",
      className: "fa fa-instagram",
    },
  ];

  var name = "Artur Babloyan";
  var occupation = "Front End Developer";
  var description =
    "Here will be your description. Use this to describe what you do or whatever you feel best describes yourself to a potential employer";
  var city = "Yerevan";
  var networks = networksData.map(function (network) {
    return (
      <li key={network.name}>
        <a href={network.url}>
          <i className={network.className}></i>
        </a>
      </li>
    );
  });

  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Works
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">I'm {name}.</h1>
          <h3>
            I'm a {city} based <span>{occupation}</span>. {description}.
          </h3>
          <hr />
          <ul className="social">{networks}</ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
}

export default Header;

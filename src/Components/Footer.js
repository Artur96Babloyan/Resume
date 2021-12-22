import React from "react";

function Footer() {
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
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">{networks}</ul>

          <ul className="copyright">
            <li>&copy; Copyright 2021 Artur Babloyan</li>
            <li>
              Design by{" "}
              <a title="Styleshout" href="http://www.styleshout.com/">
                Styleshout
              </a>
            </li>
          </ul>
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import React, { useRef } from "react";
import { useForm } from "@formspree/react";

function Contact(props) {
  const [formState] = useForm("mayavorz");
  const formRef = useRef();
  console.log(`formState`, formState);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    var formData = new FormData(formRef.current);
    console.log(`formData`, formData);
    fetch("https://formspree.io/f/mayavorz", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    }).then((res) => {
      console.log(`res`, res);
      formRef.current.reset();
    });
  };

  if (props.data) {
    var message = props.data.contactmessage;
    var name = "Artur Babloyan";
    var street = "Avan Acharyan / 20";
    var city = "Yerevan";
    var state = " / Armenia";
    var zip = "006";
    var phone = "+374-96-16-66-95";
  }

  return (
    <section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1>
            <span>Get In Touch.</span>
          </h1>
        </div>

        <div className="ten columns">
          <p className="lead">{message}</p>
        </div>
      </div>

      <div className="row">
        <div className="eight columns">
          <form ref={formRef} id="contactForm" onSubmit={handleFormSubmit}>
            <fieldset>
              <div>
                <label htmlFor="contactName">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  defaultValue=""
                  size="35"
                  id="contactName"
                  name="contactName"
                  required
                />
              </div>

              <div>
                <label htmlFor="contactEmail">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="email"
                  defaultValue=""
                  id="contactEmail"
                  name="email"
                  required
                />
              </div>

              <div>
                <label htmlFor="contactSubject">
                  Subject <span className="required">*</span>
                </label>
                <input
                  type="text"
                  defaultValue=""
                  size="35"
                  id="contactSubject"
                  name="subject"
                  required
                />
              </div>

              <div>
                <label htmlFor="contactMessage">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  cols="50"
                  rows="15"
                  id="contactMessage"
                  name="message"
                  required
                ></textarea>
              </div>

              <div>
                <button className="submit">Submit</button>
                <span id="image-loader">
                  <img alt="" src="images/loader.gif" />
                </span>
              </div>
            </fieldset>
          </form>
        </div>

        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4>Address and Phone</h4>
            <p className="address">
              {name}
              <br />
              {street} <br />
              {city}, {state} {zip}
              <br />
              <span>{phone}</span>
            </p>
          </div>

          <div className="widget widget_tweets">
            <h4 className="widget-title">Latest Tweets</h4>
            <ul id="twitter">
              <li>
                <span>
                  This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                  vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                  bibendum auctor, nisi elit consequat ipsum
                  <a href="#">artur11babloyan@gmail.com</a>
                </span>
                <b>
                  <a href="#">2 Days Ago</a>
                </b>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Contact;

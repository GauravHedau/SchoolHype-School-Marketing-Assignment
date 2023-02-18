import React, { useState } from "react";
import "./contact.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import { Container, Row } from "react-bootstrap";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();

    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        console.log(xhr.response);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        console.log(xhr.response);
      }
    };

    xhr.send(data);
    alert("Message Send succesfully");
  };

  return (
    <>
      <div className="contactmain">
        <div className="contact-form">
          <div className="first-container">
            <div className="info-container">
              <div>
                <img className="icon" />
                <h3>
                  <LocationOnIcon />
                  Location
                </h3>
                <p>Ghaziabad, Uttar Pradesh</p>
              </div>
              <div>
                {" "}
                <img className="icon" />
                <h3>
                  <CallIcon />
                  Lets Talk
                </h3>
                <p>+91 93545 66860</p>
              </div>
              <div>
                <img className="icon" />
                <h3>
                  <MailIcon />
                  Mail us
                </h3>
                <p>contact@example.com</p>
              </div>
            </div>
          </div>
          <div className="second-container">
            <h2>Contact Now</h2>
            <form
              action="https://formspree.io/f/myyawzpa"
              method="POST"
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <label htmlFor="name">Tell us your name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                  placeholder="Enter your Name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="phone"
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  required
                  placeholder="Enter Phone Number"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  required
                  placeholder="Message"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary bg-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <footer >
        <Container>
          <Row>
            <p className="text-center">&copy; 2023 MARKALL</p>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default ContactForm;

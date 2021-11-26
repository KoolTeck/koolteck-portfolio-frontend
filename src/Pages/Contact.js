import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmojiEmotions from "@mui/icons-material/EmojiEmotions";
import ContactItem from "../components/ContactItem";
import { useState } from "react";

function ContactPage() {
  const phoneIcon = <PhoneIcon />;
  const emailIcon = <EmailIcon />;
  const location = <LocationOnIcon />;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error1, setError1] = useState(false);
  const [error2, setError2] = useState(false);
  const [error3, setError3] = useState(false);
  const [successAlert, setSuccessAlert] = useState("");
  const [show, setShow] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      name === "" ? setError1(true) : setError1(false);
      email === "" ? setError2(true) : setError2(false);
      message === "" ? setError3(true) : setError3(false);
      return;
    }
    const data = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };
    const resp = await fetch("https://koolteck-portfolio.herokuapp.com/visitor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (resp.ok) {
      const succesMessage = await resp.json();
      setSuccessAlert(succesMessage.success);
      setShow(true);
    } else {
      console.log(resp);
      setSuccessAlert(resp);
    }
  };
  return (
    <ContactPageStyled>
      <Title title={"Contact"} span={"Contact"} />
      <InnerLayout className={"contact-section"}>
        <div className="left-content">
          <div className="contact-title">
            <h4>Get In Touch</h4>
          </div>
          <form className="form" onSubmit={handleFormSubmit}>
            <div className="form-field">
              <label htmlFor="visitor-name">Enter your name*</label>
              <input
                type="text"
                id="name"
                name="visitor-name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              {error1 && (
                <small>
                  <em>this field is required</em>
                </small>
              )}
            </div>
            <div className="form-field">
              <label htmlFor="email">Enter your email*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              {error2 && (
                <small>
                  <em>this field is required</em>
                </small>
              )}
            </div>
            <div className="form-field">
              <label htmlFor="subject">Enter your subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
              />
            </div>
            <div className="form-field">
              <label htmlFor="message">Enter your Message*</label>
              <textarea
                id="textarea"
                cols="30"
                rows="10"
                name="message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              ></textarea>
              {error3 && (
                <small>
                  <em>this field is required</em>
                </small>
              )}
            </div>

            {successAlert !== "" && (
              <div className="success-alert">
                {successAlert}
                <EmojiEmotions />
              </div>
            )}
            <div className="form-field f-button">
              <button>
                <PrimaryButton title={"shoot"} />
              </button>
            </div>
          </form>
        </div>
        <div className="right-content">
          <ContactItem
            title={"Phone"}
            icon={phoneIcon}
            cont1={"+234-7068414723"}
            cont2={"08130565861"}
          />
          <ContactItem
            title={"Email"}
            icon={emailIcon}
            cont1={"bowale.adetunji@gmail.com"}
            cont2={"bowale.adetunji@yahoo.com"}
          />
          <ContactItem
            title={"Address"}
            icon={location}
            cont1={"Behind Central Mosque Ososa, Ogun State"}
            cont2={"Nigeria"}
          />
        </div>
      </InnerLayout>
    </ContactPageStyled>
  );
}

const ContactPageStyled = styled.section`
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    @media screen and (max-width: 978px) {
      grid-template-columns: repeat(1, 1fr);
      .f-button {
        margin-bottom: 3rem;
      }
    }
    .right-content {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      @media screen and (max-width: 502px) {
        width: 70%;
      }
    }
    .contact-title {
      h4 {
        color: var(--white-color);
        padding: 1rem 0;
        font-size: 1.8rem;
      }
    }
    .form {
      width: 100%;
      @media screen and (max-width: 502px) {
        width: 100%;
      }
      .form-field {
        margin-top: 2rem;
        position: relative;
        width: 100%;
        label {
          position: absolute;
          left: 20px;
          top: -19px;
          display: inline-block;
          background-color: var(--background-dark-color);
          padding: 0 0.5rem;
          color: inherit;
          @media screen and (max-width: 450px) {
            top: -10px;
            font-size: 15px;
          }
        }
        input {
          border: 1px solid var(--border-color);
          outline: none;
          background: transparent;
          height: 50px;
          padding: 0 15px;
          width: 100%;
          color: inherit;
        }
        textarea {
          background-color: transparent;
          border: 1px solid var(--border-color);
          outline: none;
          color: inherit;
          width: 100%;
          padding: 0.8rem 1rem;
        }
      }
      .f-button button {
        outline: none;
        border: 0;
      }

      small em {
        color: red;
        font-size: 14px;
      }

      .success-alert {
        display: flex;
        font-size: 1.1rem;
        flex-direction: column-reverse;
        width: 40%;
        padding: 0.5rem;
        text-align: center;
        border-radius: 0.5rem;
        margin-top: 0.5rem;
        background-color: var(--background-light-color-2);
        @media screen and (min-width: 1200px) {
          width: 100%;
          font-size: 0.9rem;
        }

        svg {
          font-size: 1.5rem;
          color: lawngreen;
          align-self: center;
        }
      }
    }
  }
`;

export default ContactPage;

import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lehq11k",
        "template_qu2t891",
        form.current,
        "lyD4_z9AZORq2Sh1N"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  const toastMsg = () => {
    toast.success(' Sent Successfully !!', {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }
  return (
    <MainContainer id="contact">
      <Container>
        <ContactBG>
          <img src="/img/contactBG.png" alt="" />
        </ContactBG>
        <ContactHeader>
          <div>
            <p className="contact">Contact</p>
          </div>
          <div>
            <p className="touch">Get in Touch</p>
          </div>
        </ContactHeader>
        <ContactDetail>
          <form ref={form} onSubmit={sendEmail}>
            <div className="top">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div>
              <textarea
                name="message"
                rows="10"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <div>
              <button type="submit" onClick={toastMsg}>Send Message</button>
            </div>
          </form>
        </ContactDetail>
      </Container>
      <ToastContainer />
    </MainContainer>
  );
}

export default Contact;

const MainContainer = styled.div`
  margin-top: 50px;
  height: 650px;
`;
const Container = styled.div`
  margin-left: 300px;
  margin-right: 300px;
  /* background: url(./img/contactBG.png); */
  /* position: relative; */
`;
const ContactBG = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    margin-top: 100px;
    width: 40%;
    z-index: -1;
    transform: rotate(45deg);
  }
`;

const ContactHeader = styled.div`
  margin-top: -600px;
  .contact {
    font-family: "HorizonOutlined";
    font-size: 110px;
    display: flex;
    justify-content: center;
    align-items: center;

    letter-spacing: 2px;
    transition: all 0.25s;

    &:hover {
      letter-spacing: 15px;
    }
  }
  .touch {
    font-family: "Horizon";
    font-size: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -80px;
  }
`;

const ContactDetail = styled.div`
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .top {
      display: flex;
      margin-top: 50px;
    }
    input {
      height: 50px;
      width: 400px;
      margin: 20px;
      padding: 10px;
    }
    textarea {
      width: 840px;
      padding: 20px;
      resize: none;
    }
    button {
      width: 300px;
      height: 50px;
      background-color: black;
      border: none;
      color: white;
      cursor: pointer;
      font-size: 1.4rem;
      margin-top: 10px;
      font-family: "Ailerons";
      transition: all 0.25s;

      &:hover {
        letter-spacing: 3px;
      }
    }
  }
`;

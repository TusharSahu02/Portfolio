import React from "react";
import styled from "styled-components";

function Contact() {
  return (
    <MainContainer>
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
            <div className="top">
              <div>
              <input  type="text" name="name" placeholder="Your Full Name" required />
              </div>
              <div>
              <input type="email" name="email" placeholder="Your Email" required />
              </div>
            </div>
            <div>
              <textarea name="message" rows="10"  placeholder="Your Message" required></textarea>
            </div>
            <div>
              <button type="submit">Send Message</button>
            </div>
        </ContactDetail>
      </Container>
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

    &:hover{
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
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
.top{
  display: flex;
  margin-top: 50px;
}
input{
  height: 50px;
  width: 400px;
  margin: 20px;
  padding: 10px;
  
}
textarea{
  width: 840px;
  padding: 20px;
  resize: none;
}
button{
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

  &:hover{
    letter-spacing: 3px;
  }
}
`
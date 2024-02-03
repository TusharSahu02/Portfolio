import React from "react";
import styled from "styled-components";

import Resume from "../assets/Resume.pdf";
import TypeWriterEffect from "react-typewriter-effect";
const About = () => {
  return (
    <AboutContainer>
      <Wrapper>
        <Title>
          <h1>About Me</h1>
          <h3>Tushar Sahu</h3>
        </Title>
        <Container>
          <Left>
            <img src="img/profileMB.png" alt="" />
          </Left>
          <Right>
            <div className="up">
              <h1>
                <TypeWriterEffect
                  startDelay={1000}
                  cursorColor="#3F3D56"
                  multiText={[
                    "Hola",
                    "Hi",
                    "नमस्ते",
                    "Bonjou",
                    "Ciao",
                    "안녕하세요",
                    "salve",
                    "Olá",
                    "привет",
                    "Здрастуйте",
                  ]}
                  multiTextDelay={800}
                  typeSpeed={100}
                  multiTextLoop
                />
              </h1>
              <h2>
                I'm Tushar a passionate developer based in India, passionate
                about creating Web/Android Apps.I'm results-driven Frontend
                Developer with a strong track record of delivering pixel-perfect
                web applications that exceed client expectations. Leveraging a
                blend of technical expertise and creative problem-solving
              </h2>
            </div>
            <div className="button-grp">
              <a href="#contact">
                <p className="button">Contact Me</p>
              </a>
              <a href={Resume} download>
                <p className="button">Download Resume</p>
              </a>
            </div>
          </Right>
        </Container>
      </Wrapper>
      <div className="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </AboutContainer>
  );
};

export default About;

const AboutContainer = styled.div`
  background: linear-gradient(90deg, #25274d, #46344e);
  height: 950px;

  /* animation */
  .box div {
    position: absolute;
    height: 60px;
    width: 60px;
    background-color: transparent;
    border: 6px solid rgba(255, 255, 255, 0.7);
  }
  .box div:nth-child(1) {
    top: 12%;
    left: 42%;
    animation: animate 10s linear infinite;
  }
  .box div:nth-child(2) {
    top: 70%;
    left: 50%;
    animation: animate 7s linear infinite;
  }
  .box div:nth-child(3) {
    top: 17%;
    left: 6%;
    animation: animate 9s linear infinite;
  }
  .box div:nth-child(4) {
    top: 20%;
    left: 60%;
    animation: animate 10s linear infinite;
  }
  .box div:nth-child(5) {
    top: 67%;
    left: 10%;
    animation: animate 6s linear infinite;
  }
  .box div:nth-child(6) {
    top: 80%;
    left: 70%;
    animation: animate 12s linear infinite;
  }
  .box div:nth-child(7) {
    top: 60%;
    left: 80%;
    animation: animate 15s linear infinite;
  }
  .box div:nth-child(8) {
    top: 32%;
    left: 25%;
    animation: animate 16s linear infinite;
  }
  .box div:nth-child(9) {
    top: 90%;
    left: 25%;
    animation: animate 9s linear infinite;
  }
  .box div:nth-child(10) {
    top: 20%;
    left: 80%;
    animation: animate 5s linear infinite;
  }

  @keyframes animate {
    0% {
      transform: scale(0) translateY(0) rotate(0);
      opacity: 1;
    }
    100% {
      transform: scale(1.3) translateY(-90px) rotate(360deg);
      opacity: 0;
    }
  }
`;
const Wrapper = styled.div`
  height: 100%;

  background: url(/img/wave.svg);
  background-repeat: no-repeat;
  position: relative;

  /* center */
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Title = styled.div`
  margin-top: 60px;
  position: absolute;
  top: 5%;
  color: white;
  font-family: "Horizon";
  width: max-content;

  h1 {
    width: max-content;
    position: absolute;
    font-family: "HorizonOutlined";
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 110px;
    font-weight: 100;
    transition: all 0.3s ease-in-out;

    &:hover {
      letter-spacing: 10px;
    }
    @media (max-width: 1440px) {
      font-size: 80px;
    }
    @media (max-width: 920px) {
      font-size: 60px;
    }
    @media (max-width: 768px) {
      font-size: 45px;
    }
    @media (max-width: 475px) {
      font-size: 35px;
    }
  }
  h3 {
    width: max-content;
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 50px;
    transform: translate(-50%, -50%);
    @media (max-width: 1440px) {
      font-size: 40px;
    }
    @media (max-width: 920px) {
      font-size: 28px;
    }
    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
`;
const Container = styled.div`
  color: white;
  width: 1280px;
  height: 600px;
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 920px) {
    margin-top: 200px;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 800px;
  }
`;

const Left = styled.div`
  overflow: hidden;
  img {
    margin-top: 20px;
    scale: 1.5;
    width: 100%;
    transition: all 0.4s ease-in-out;

    &:hover {
      transform: rotate(-13.5deg);
    }
    @media (max-width: 920px) {
      width: 50%;
    }
  }

  @media (max-width: 920px) {
    display: grid;
    place-items: center;
  }
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 920px) {
    /* text-align: ce; */
  }

  .button-grp {
    width: 100%;
    display: flex;
    margin-top: 30px;
    a {
      text-decoration: none;
    }
    @media (max-width: 920px) {
      /* font-size: 40px; */
      align-items: center;
      display: flex;
      justify-content: center;
    }
    @media (max-width: 620px) {
      flex-direction: column;
      gap: 20px;
    }
  }
  .up {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    h1 {
      height: 80px;
      @media (max-width: 920px) {
        text-align: center;
        font-size: 50px;
      }
    }
    h2 {
      font-size: 20px;
      padding: 0 10px;
      @media (max-width: 920px) {
        text-align: center;
      }
    }
  }
  .button {
    cursor: pointer;
    margin-left: 20px;
    margin-right: 20px;
    border: 2px solid currentColor;
    border-radius: 3rem;
    color: #eac7c7;
    font-weight: 100;
    overflow: hidden;
    padding: 1rem 2rem;
    position: relative;
    text-decoration: none;
    transition: 0.2s transform ease-in-out;
    will-change: transform;
    z-index: 0;

    @media (max-width: 475px) {
      height: 40px;
      display: grid;
      place-content: center;
    }

    &:hover {
      border: 2px solid transparent;
      color: indigo;
      transform: scale(1.05);
      will-change: transform;
    }
    &::after {
      background-color: #eac7c7;
      border-radius: 3rem;
      content: "";
      display: block;
      height: 100%;
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      transform: translate(-100%, 0) rotate(10deg);
      transform-origin: top left;
      transition: 0.2s transform ease-out;
      will-change: transform;
      z-index: -1;
    }

    &:hover::after {
      transform: translate(0, 0);
    }
  }
`;

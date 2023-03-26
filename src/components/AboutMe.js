import React, { useEffect } from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import Resume from "../assets/Resume.pdf";
function AboutMe() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <MainContainer>
      <img src="/img/wave.svg" alt="" />
      <Container>
        <AboutHeader data-aos="fade-up">
          <div>
            <p className="about">About Me</p>
          </div>
          <div>
            <p className="name">Tushar Sahu</p>
          </div>
        </AboutHeader>
        <AboutMain>
          <ProfileImg data-aos="fade-right">
            <img data-aos="flip-left" src="/img/profileMB.svg" alt="" />
          </ProfileImg>
          <ProfileDesc data-aos="fade-left">
            <p className="desc1">
              Why Hire Me For Your <p className="desc2">Next Project</p>
            </p>

            <p className="desc3">
              As a developer , i possess a strong proficiency in React and
              Android development with proven track record of designing and
              implementing web and mobile applications, and i am skilled in
              developing responsive ,intutive user interfaces that optimize user
              experience. With a keep eye for details and a passion for
              continuos improvement , I am constanlty seeking out new challenges
              and oppotunities to enhance my skills and knowledge.
            </p>
            <div className="button-grp">
              <a href="#contact">
                <p className="button">Hire Me</p>
              </a>
              <a href={Resume} download>
                <p className="button">Download Resume</p>
              </a>
            </div>
          </ProfileDesc>
        </AboutMain>
      </Container>
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
    </MainContainer>
  );
}

export default AboutMe;

const Container = styled.div`
  margin-left: 300px;
  margin-right: 300px;
  margin-top: -400px;

  @media (max-width: 768px) {
    margin: 0;
    padding: 20px;
  }
`;

const AboutHeader = styled.div`
  color: white;
  .about {
    /* z-index: -1; */
    font-size: 100px;
    font-family: "HorizonOutlined";
    display: flex;
    opacity: 50%;
    justify-content: center;
    align-items: center;

    letter-spacing: 2px;
    transition: all 0.25s;
    &:hover {
      letter-spacing: 15px;
    }
  }
  .name {
    font-size: 60px;
    font-family: "Horizon";
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -80px;
  }

  @media (max-width: 768px) {
    .about {
      font-size: 40px;
    }
    .name {
      font-size: 20px;
      margin: 0;
      margin-top: -30px;
    }
  }
`;
const AboutMain = styled.div`
  display: flex;
  padding: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0;
  }
`;
const ProfileDesc = styled.div`
  padding: 80px;
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin: 0;
    margin-top: -500px;
    margin-left: -100px;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .desc1 {
    font-family: "Aquire";
    font-size: 3rem;
    width: max-content;

    @media (max-width: 768px) {
      font-size: 1rem;
      width: 70vw;
    }
  }
  .desc2 {
    font-size: 2.5rem;
    color: white;
    @media (max-width: 768px) {
      font-size: 0.8rem;
      width: 70vw;
    }
  }
  .desc3 {
    font-family: "Blackpast", sans-serif;
    color: white;
    line-height: 1.5;
    @media (max-width: 768px) {
      width: 40vw;
      /* margin-left: -150px; */
      line-height: 1;
      font-size: 0.5rem;
      margin-top: 20px;
    }
  }
  .button-grp {
    display: flex;
    margin-top: 30px;
    a {
      text-decoration: none;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      margin-top: 10px;
    }
  }

  .page {
    display: flex;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
  }

  .button {
    cursor: pointer;
    /*  */
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
    @media (max-width: 768px) {
      width: 100px;
      font-size: 0.6rem;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 10px;
      padding: 10px;
      margin: 4px;
    }
  }
`;
const ProfileImg = styled.div`
  /* height: 700px; */
  /* z-index: -1; */
  img {
    scale: 150%;
    height: 700px;
    width: 500px;
    margin-top: 80px;
    object-fit: cover;
    border-radius: 30px;
    transition: 1s ease;

    &:hover {
      -webkit-transform: rotateZ(14deg);
      -ms-transform: rotateZ(-14deg);
      transform: rotateZ(-14deg);
      transition: 1s ease;
    }

    @media (max-width: 768px) {
      height: 500px;
      margin-top: -100px;
      scale: 100%;
      width: 500px;
    }
  }
`;

const MainContainer = styled.div`
  background: linear-gradient(90deg, #25274d, #46344e);
  overflow: hidden;
  width: 100%;
  /* position: absolute; */

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

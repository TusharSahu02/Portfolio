import React from "react";
import Marquee from "react-fast-marquee";
import styled from "styled-components";

function Skills() {
  return (
    <MainContainer>
      <Container>
        <SHeader>
          <p className="skills">Skills</p>
          <p className="tech">Tech</p>
        </SHeader>
      </Container>
      <SDetails>
        <Marquee speed={50}>
          {/* HTML */}
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174854.png"
              alt=""
            />
          </div>
          <div>
            {/* css */}
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
              alt=""
            />
          </div>
          {/* JS */}
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
              alt=""
            />
          </div>
          <div>
            {/* react */}
            <img
              src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png"
              alt=""
            />
          </div>
          <div>
            {/* nodejs */}
            <img
              src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png"
              alt=""
            />
          </div>
          <div>
            {/* express-js */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
              alt=""
            />
          </div>
          <div>
            {/* postman */}
            <img
              src="https://cdn.worldvectorlogo.com/logos/postman.svg"
              alt=""
            />
          </div>
          <div>
            {/* mongo */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png"
              alt=""
            />
          </div>
          <div>
            {/* next.js */}
            <img
              src="https://cdn.worldvectorlogo.com/logos/next-js.svg"
              alt=""
            />
          </div>
          <div>
            {/* shadcn */}
            <img
              src="https://avatars.githubusercontent.com/u/139895814?s=280&v=4"
              alt=""
            />
          </div>
          {/* typescript */}
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
              alt=""
            />
          </div>
          {/* react native */}
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
              alt=""
            />
          </div>
          {/* C */}
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png"
              alt=""
            />
          </div>
          {/* C++ */}
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/6132/6132222.png"
              alt=""
            />
          </div>
          {/* Firebase */}
          <div>
            <img
              src="https://firebase.google.com/static/images/brand-guidelines/logo-logomark.png"
              alt=""
            />
          </div>
          {/* Convex */}
          <div>
            <img
              src="https://images.privco.com/production/37bc140d26b230a8a329a060b5c9bf0a.jpeg"
              alt=""
            />
          </div>
          {/* git */}
          <div>
            <img
              src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
              alt=""
            />
          </div>
          {/* github */}
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt=""
            />
          </div>
          <div>
            {/* tailwind css */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
              alt=""
            />
          </div>
          <div>
            {/* material ui */}
            <img
              src="https://seeklogo.com/images/M/material-ui-logo-5BDCB9BA8F-seeklogo.com.png"
              alt=""
            />
          </div>
          {/* bootstrap */}
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png"
              alt=""
            />
          </div>
        </Marquee>
      </SDetails>
    </MainContainer>
  );
}

export default Skills;

const MainContainer = styled.div`
  padding: 50px 0;
`;
const Container = styled.div``;
const SHeader = styled.div`
  margin-top: 30px;
  position: relative;
  .skills {
    /* position: absolute; */
    font-family: "HorizonOutlined";
    font-size: 100px;
    display: flex;
    justify-content: center;
    align-items: center;

    letter-spacing: 2px;
    transition: all 0.25s;

    &:hover {
      letter-spacing: 15px;
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
  .tech {
    position: absolute;
    font-family: "Horizon";
    font-size: 60px;
    top: 50%;
    left: 50%;
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

const SDetails = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: space-evenly;
  img {
    margin-left: 30px;
    margin-right: 30px;
    width: 60px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.15);
    }

    @media (max-width: 768px) {
      width: 30px;
      margin-left: 8px;
      margin-right: 8px;
    }
  }
`;

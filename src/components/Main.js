import React, { useEffect } from "react";
import "../index.css";
import styled from "styled-components";
// fonts
import "../fonts/horizon.otf";
import "../fonts/horizon_outlined.otf";

// typing animation
import TypeWriterEffect from "react-typewriter-effect";

// onscroll animation
// import Aos from "aos";
// import "aos/dist/aos.css";

function Main() {
  // useEffect(() => {
  //   Aos.init({ duration: 2000 });
  // }, []);
  return (
    <MainContainer>
      <Container>
        <Text1>Hello! i'm</Text1>
        <Intro>
          <span>
            <div className="animatedText">
              <TypeWriterEffect
                textStyle={{
                  fontFamily: "HorizonOutlined",
                  fontWeight: 500,
                  fontSize: "250px",
                }}
                startDelay={2000}
                cursorColor="#3F3D56"
                multiText={["WEB", "ANDROID"]}
                multiTextDelay={1000}
                typeSpeed={150}
                multiTextLoop
              />
            </div>
            <div className="animatedTextSmall">
              <TypeWriterEffect
                textStyle={{
                  fontFamily: "HorizonOutlined",
                  fontWeight: 500,
                  fontSize: "50px",
                }}
                startDelay={2000}
                cursorColor="#3F3D56"
                multiText={["WEB", "ANDROID"]}
                multiTextDelay={1000}
                typeSpeed={150}
                multiTextLoop
              />
            </div>
          </span>
          <Name className="developer"> Developer</Name>
        </Intro>
        <img className="mainDP" src="/img/dp.svg" alt="" />
      </Container>
    </MainContainer>
  );
}

export default Main;

const Container = styled.div`
  margin-left: 300px;
  margin-right: 300px;
  padding-top: 40px;
  padding-bottom: 40px;

  .mainDP {
    margin-top: -30px;
    width: 700px;
    margin-left: -90px;
  }

  @media (max-width: 768px) {
    margin: 0;
    padding: 0;
    width: 100vw;
    overflow-y: hidden;

    .mainDP {
      margin: 0;
      width: 300px;
      margin-top: 55px;
    }
  }
`;
const Name = styled.div`
  font-family: "HorizonOutlined";
  justify-content: center;
  display: flex;
  align-items: center;
  font-size: 100px;

  @media (max-width: 768px) {
    font-size: 20px;
    padding: 0;
    margin: 0;
  }
`;
const Intro = styled.div`
  .developer {
    font-family: "Horizon";
    margin-top: -200px;
    color: white;

    @media (max-width:  768px){
      margin-top: -40px;
    }
  }
  span {
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;

    @media (max-width: 768px) {
      font-size: 50px;
      /* display:none; */
    }
  }
  .animatedTextSmall {
    /* margin-top: -5dp; */
    display: none;
    @media (max-width: 768px) {
      font-size: 40px;
      display: block;
    }
  }
  .animatedText {
    @media (max-width: 768px) {
      font-size: 40px;
      display: none;
    }
  }
`;
const Text1 = styled.div`
  font-family: "Lastica";
  /* font-family: "Ailerons"; */
  justify-content: center;
  display: flex;
  color: white;
  align-items: center;
  font-size: 70px;

  @media (max-width: 768px) {
    font-size: 20px;
    margin: 0;
    padding: 0;
    /* margin-top: -5px; */
  }
`;

const MainContainer = styled.div`
  background: #000000;
  overflow-x: hidden;
`;

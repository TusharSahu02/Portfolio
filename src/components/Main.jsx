import React from "react";
import "../index.css";
import styled from "styled-components";
// fonts
import "../fonts/horizon.otf";
import "../fonts/horizon_outlined.otf";

// typing animation
import TypeWriterEffect from "react-typewriter-effect";

function Main() {
  return (
    <MainContainer>
      <Container>
        <Text1>Hello! i'm</Text1>
        {/* <Intro>
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
          <Name className="developer">Developer</Name>
        </Intro> */}
        <Intro>
          <span>
            <div className="animatedText">
              <TypeWriterEffect
                className="animatedText"
                textStyle={{
                  fontFamily: "HorizonOutlined",
                  fontWeight: 100,
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
          <Name>Developer</Name>
        </Intro>
      </Container>
      <img className="mainDP" src="/img/dp.svg" alt="" />
    </MainContainer>
  );
}

export default Main;

const MainContainer = styled.div`
  background: #000000;
  overflow-x: hidden;
  height: 950px;
  position: relative;

  .mainDP {
    width: 700px;
    position: absolute;
    bottom: 0;
    left: 20px;
  }
  @media (max-width: 1680px) {
    .mainDP {
      width: 600px;
    }
  }
  @media (max-width: 1440px) {
    height: 850px;
    .mainDP {
      width: 500px;
    }
  }
  @media (max-width: 920px) {
    /* font-size: 40px; */
    .mainDP {
      left: 50%;
      bottom: 0;
      transform: translate(-50%, 0);
    }
  }
  @media (max-width: 768px) {
    height: 650px;
    .mainDP {
      width: 350px;
    }
  }
`;
const Container = styled.div`
  margin-left: 300px;
  margin-right: 300px;
  padding-top: 40px;
  padding-bottom: 40px;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;
const Name = styled.div`
  justify-content: center;
  display: flex;
  font-size: 100px;
  font-family: "Horizon";
  color: white;
  @media (max-width: 1440px) {
    font-size: 50px;
  }
  @media (max-width: 920px) {
    font-size: 30px;
  }
  @media (max-width: 475px) {
    font-size: 20px;
  }
`;
const Intro = styled.div`
  margin-top: 100px;
  position: relative;

  span {
    color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    .animatedText {
      font-size: 100px;
    }
  }
  .animatedTextSmall {
    display: none;
  }

  @media (max-width: 1440px) {
    span {
      .animatedText {
        font-size: 60px;
      }
    }
  }
  @media (max-width: 920px) {
    span {
      .animatedText {
        font-size: 40px;
      }
    }
  }
  @media (max-width: 768px) {
    span {
      .animatedText {
        font-size: 30px;
      }
    }
  }
  @media (max-width: 475px) {
    span {
      .animatedText {
        font-size: 24px;
      }
    }
  }
`;
const Text1 = styled.div`
  font-family: "Lastica";
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-top: 30px;
  font-size: 70px;

  @media (max-width: 1440px) {
    font-size: 40px;
  }
  @media (max-width: 920px) {
    font-size: 24px;
  }
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

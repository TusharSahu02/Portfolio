import React from "react";
import styled from "styled-components";

const Experience = () => {
  return (
    <MainContainer>
      <img src="/img/waveMyService.svg" alt="" />
      <Wrapper>
        <Title>
          <h1>Experience</h1>
          <h3>Internship</h3>
        </Title>
        <Container>
          <Card>
            <div className="header">
              <h1>Netzoptimise</h1>
              <img src="img/ne.png" alt="" />
            </div>
            <div className="content">
              <h1>Frontend Developer</h1>
              <p>( Mohali, Punjab )</p>
              <p>( Oct 24' - Dec 24')</p>
            </div>
          </Card>
          <Card>
            <div className="header">
              <h1>Penthara Tech</h1>
              <img src="img/pen.jpeg" alt="" />
            </div>
            <div className="content">
              <h1>React Developer</h1>
              <p>( Mohali, Punjab )</p>
              <p>( July 24' - Sep 24')</p>
            </div>
          </Card>
        </Container>
      </Wrapper>
    </MainContainer>
  );
};

export default Experience;

const MainContainer = styled.div`
  height: 450px;
  @media (max-width: 620px) {
    height: 300px;
  }
  img {
    background: linear-gradient(90deg, #25274d, #46344e);
  }
  background-color: #f3f4f5;
`;
const Wrapper = styled.div`
  background-color: #f3f4f5;
  height: 100%;
  position: relative;

  /* center */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  position: absolute;
  top: -400px;
  color: white;
  font-family: "Horizon";
  width: max-content;

  @media (max-width: 920px) {
    top: -210px;
  }
  @media (max-width: 620px) {
    top: -150px;
  }

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

    &:hover {
      letter-spacing: 10px;
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
  width: 1440px;
  margin-top: -100px;

  h1 {
    font-family: "Horizon";
    font-size: 80px;
  }
  @media (max-width: 475px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

const Card = styled.div`
  @media (max-width: 1440px) {
    padding: 0 60px;
  }
  @media (max-width: 920px) {
    padding: 0 20px;
  }
  @media (max-width: 620px) {
    padding: 20px;
    border: 1px solid #46344e;
    margin: 20px;
    border-radius: 30px;
  }
  @media (max-width: 475px) {
    width: 80%;
  }
  &:first-child {
    margin-bottom: 100px;
    @media (max-width: 620px) {
      margin-top: 200px;
      margin-bottom: 40px;
    }
  }
  .header {
    display: flex;
    text-align: center;
    align-items: center;
    h1 {
      background: linear-gradient(90deg, #25274d, #46344e);
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
      @media (max-width: 1440px) {
        font-size: 60px;
      }
      @media (max-width: 1080px) {
        font-size: 40px;
      }
      @media (max-width: 768px) {
        font-size: 30px;
      }

      @media (max-width: 620px) {
        text-align: start;
        font-size: 24px;
      }
    }
  }
  .content {
    display: flex;
    align-items: baseline;

    @media (max-width: 1440px) {
      flex-direction: column;
    }
    p {
      margin-left: 30px;
      font-family: "Horizon";
      @media (max-width: 1440px) {
        margin-top: 10px;
        margin-left: 0;
      }
    }
    h1 {
      font-size: 40px;
      background: linear-gradient(90deg, #25274d, #46344e);
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
      @media (max-width: 1440px) {
        font-size: 25px;
      }
      @media (max-width: 1080px) {
        font-size: 20px;
      }
      @media (max-width: 620px) {
        font-size: 18px;
      }
    }
  }
  img {
    border: 1px solid #ccc;
    width: 150px;
    height: 80px;
    object-fit: center;
    border-radius: 30px;
    margin-left: 30px;
    @media (max-width: 1080px) {
      /* font-size: 40px; */
      width: 100px;
      height: 60px;
    }
    @media (max-width: 475px) {
      display: none;
    }
  }
`;

import React, { useState } from "react";
import styled from "styled-components";
import Web from "./Web";
import Native from "./Native";
import Randoms from "./Randoms";

const Portfolio = () => {
  const [show, setShow] = useState("web");
  const handleChange = (e) => {
    if (e === "web") {
      setShow("web");
    } else if (e === "native") {
      setShow("native");
    } else if (e === "randoms") {
      setShow("randoms");
    }
  };

  return (
    <MainContainer>
      <img className="bg" src="/img/waveQuali.svg" alt="" />
      <Wrapper>
        <Title>
          <h1>Recent</h1>
          <h3>Projects</h3>
        </Title>

        <Content>
          {/* <Tab>
            <div
              className={show === "web" ? "active" : ""}
              onClick={() => handleChange("web")}
            >
              Web
            </div>
            <div
              className={show === "native" ? "active" : ""}
              onClick={() => handleChange("native")}
            >
              App
            </div> */}
          {/* <div
              className={show === "randoms" ? "active" : ""}
              onClick={() => handleChange("randoms")}
            >
              Extras
            </div> */}
          {/* </Tab> */}
          {/* {show === "web" ? (
            <Web />
          ) : show === "native" ? (
            <Native />
          ) : (
            <Randoms />
          )} */}
          <Web />
        </Content>
      </Wrapper>
    </MainContainer>
  );
};

export default Portfolio;

const MainContainer = styled.div`
  background-color: #f3f4f5;
  .bg {
    margin-top: 400px;
    background-color: #443c68;
  }
`;

const Wrapper = styled.div`
  position: relative;
  margin-top: -20px;
  background-color: #443c68;
  width: 100%;
  padding-bottom: 100px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const Tab = styled.div`
  display: flex;
  gap: 20px;
  border: 1px solid white;
  padding: 6px 12px;
  border-radius: 20px;
  color: white;

  div {
    padding: 6px 12px;
    cursor: pointer;
    border-radius: 15px;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  .active {
    background-color: #fff;
    color: #443c68;
    border-radius: 15px;
  }
`;
const Title = styled.div`
  position: absolute;
  top: -300px;
  font-family: "Horizon";
  width: max-content;
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 620px) {
    top: -100px;
  }

  h1 {
    width: max-content;
    position: absolute;
    font-family: "HorizonOutlined";
    top: 50%;
    left: 50%;
    color: #443c68;
    transform: translate(-50%, -50%);
    font-size: 110px;
    font-weight: 100;
    transition: all 0.2s ease-in-out;

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
      letter-spacing: 20px;
    }
  }
  h3 {
    color: #443c68;
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

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;

  #alt {
    flex-direction: column-reverse;
  }

  .all {
    padding: 20px;
    margin-top: 40px;
    text-decoration: none;
    border: 1px solid #443c68;

    transition: all 0.2s ease-in-out;
    .all-projects {
      color: white;
      font-size: 40px;
      font-family: "Horizon";
      display: flex;
      align-items: center;
      span {
        margin-right: 6px;
      }
      @media (max-width: 620px) {
        font-size: 28px;
      }
      @media (max-width: 475px) {
        font-size: 18px;
      }
    }

    &:hover {
      border: 1px solid #fff;
      border-radius: 20px;
    }
  }
`;

const Card = styled.div`
  width: 70%;
  padding: 20px;
  border: 1px solid white;
  border-radius: 30px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 920px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  @media (max-width: 1280px) {
    width: 95%;
  }

  .left {
    width: 100%;
    img {
      border-radius: 20px;
      transition: all 0.2s ease-in-out;

      &:hover {
        transform: scale(102%);
      }
    }
  }
  .right {
    .title {
      display: flex;
      align-items: center;
      img {
        width: 50px;
        height: 50px;
        padding: 4px;
      }
    }
    .link {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;

      a {
        text-decoration: none;
        color: #000;
        cursor: pointer;
        background-color: #fff;
        padding: 8px 0;
        margin: 10px 0;
        width: 80%;
        text-align: center;
        border-radius: 30px;
        border: 1px solid #fff;
        transition: all 0.2s ease-in-out;

        &:hover {
          background-color: transparent;
          border: 1px solid #fff;
          color: #fff;
        }
      }
    }
  }
  .margin {
    margin-left: 0 !important;
    margin-right: 10px;
  }
  .tech {
    ul {
      display: grid;
      grid-template-columns: repeat(4, 1fr);

      li {
        text-align: center;
        color: #000000dc;
        margin: 4px 10px;
        padding: 4px;
        border-radius: 3px;
        background-color: #ccc;
        list-style: none;
      }

      @media (max-width: 1680px) {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }

  .port-content {
    margin-left: 20px;
    color: #fff;
    font-family: Verdana, Geneva, Tahoma, sans-serif;

    .title {
      img {
        margin-left: 8px;
      }
    }
  }
`;

import React from "react";
import styled from "styled-components";
import { LuArrowUpRightFromCircle } from "react-icons/lu";

const Portfolio = () => {
  return (
    <MainContainer>
      <img className="bg" src="/img/waveQuali.svg" alt="" />
      <Wrapper>
        <Title>
          <h1>Recent</h1>
          <h3>Projects</h3>
        </Title>
        <Content>
          {/* Chipper */}
          <Card id="alt">
            <div className="right port-content margin">
              <div className="title">
                <h1>Chipper</h1>
              </div>
              <div className="content">
                <p>
                  <b>Welcome to Chipper : </b>
                  The ultimate social media platform! Packed with features and
                  powered by a cutting-edge tech stack including MERN,
                  TailwindCSS, and ShadowUI. Enjoy seamless authentication,
                  protected routes, and effortless deployment.
                </p>
              </div>
              <div className="tech">
                <h1>Tech Stack: </h1>
                <ul>
                  <li>React.js</li>
                  <li>MongoDB</li>
                  <li>Express.js</li>
                  <li>Node.js</li>
                  <li>TailwindCSS</li>
                  <li>ShadcnUI</li>
                  <li>JWT</li>
                  <li>Recoil</li>
                </ul>
              </div>
              <div className="link">
                <a
                  className="one"
                  href="https://chipper-lmdc.onrender.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Chipper
                </a>
                <a
                  className="two"
                  href="https://github.com/TusharSahu02/MERN-Project/tree/main/socialmedia"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github repo
                </a>
              </div>
            </div>
            <div className="left">
              <a
                href="https://pictureperfect-self.vercel.app/"
                rel="noreferrer"
                target="_blank"
              >
                <img src="videos/chipper.gif" alt="" width="100%" />
              </a>
            </div>
          </Card>
          {/* jotion */}
          <Card>
            <div className="left">
              <a
                href="https://notion-eight-theta.vercel.app/"
                rel="noreferrer"
                target="_blank"
              >
                <img src="videos/Notion-Clone.gif" alt="" width={"100%"} />
              </a>
            </div>
            <div className="right port-content">
              <div className="title">
                <h1>Jotion</h1>
                <img src="img/notion.png" alt="" />
              </div>
              <div className="content">
                <p>
                  <b>Meet Jotion: </b>
                  Elevate productivity with image uploads, customizable icons,
                  headers, and a robust text editor powered by Blacknote.
                  Simplify organization and creativity effortlessly.
                </p>
              </div>
              <div className="tech">
                <h1>Tech Stack: </h1>
                <ul>
                  <li>React.js</li>
                  <li>Next.js</li>
                  <li>Convex</li>
                  <li>Clerk</li>
                  <li>Edge Store</li>
                  <li>Shadcn-ui</li>
                  <li>Tailwind CSS</li>
                  <li>Blacknote Editor</li>
                </ul>
              </div>
              <div className="link">
                <a
                  className="one"
                  href="https://notion-eight-theta.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Jotion
                </a>
                <a
                  className="two"
                  href="https://github.com/TusharSahu02/Jotion/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github repo
                </a>
              </div>
            </div>
          </Card>
          {/* boom */}
          <Card id="alt">
            <div className="right port-content margin">
              <div className="title">
                <h1>Boom</h1>
                <img
                  src="https://cdn.worldvectorlogo.com/logos/zoom-app.svg"
                  alt=""
                />
              </div>
              <div className="content">
                <p>
                  <b>Introducing Boom: </b>
                  Redefining video communication with ZegoCloud integration for
                  seamless video calling. Elevated security with Firebase Auth.
                  Experience high-quality meetings, easy collaboration with
                  1-on-1 and multiple users.
                </p>
              </div>
              <div className="tech">
                <h1>Tech Stack: </h1>
                <ul>
                  <li>React.js</li>
                  <li>Firebase</li>
                  <li>Elastic-UI</li>
                  <li>Zegocloud</li>
                  <li>Typescript</li>
                  <li>Redux</li>
                </ul>
              </div>
              <div className="link">
                <a
                  className="one"
                  href="https://zoom-clone-tusharsahu02.vercel.app/login"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Boom
                </a>
                <a
                  className="two"
                  href="https://github.com/TusharSahu02/Boom"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github repo
                </a>
              </div>
            </div>
            <div className="left">
              <a
                href="https://zoom-clone-tusharsahu02.vercel.app/login"
                target="_blank"
                rel="noreferrer"
              >
                <img src="img/boom.png" alt="" width="100%" />
              </a>
            </div>
          </Card>
          {/* vishwarma */}
          <Card>
            <div className="left">
              <a
                href="https://vishvakarmamajdurunion.in/"
                rel="noreferrer"
                target="_blank"
              >
                <img src="img/vish.png" alt="" width="100%" />
              </a>
            </div>
            <div className="right port-content">
              <div className="title">
                <h1>Vishwakarma</h1>
                <img
                  src="img/vish-logo.png"
                  alt=""
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: "50%",
                  }}
                />
              </div>
              <div className="content">
                <p>
                  Empowering laborers with a dedicated government platform. With
                  a fully implemented CRUD system, admin panel ensures seamless
                  data management. Laborers can retrieve information and obtain
                  ID cards, fostering a connected community.
                </p>
              </div>
              <div className="tech">
                <h1>Tech Stack: </h1>
                <ul>
                  <li>React.js</li>
                  <li>Firebase</li>
                  <li>Styled</li>
                </ul>
              </div>
              <div className="link">
                <a
                  className="one"
                  href="https://vishvakarmamajdurunion.in/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Visit Vishwakarma
                </a>
              </div>
            </div>
          </Card>
          {/* Movie */}

          <a
            className="all"
            href="https://github.com/TusharSahu02"
            target="_blank"
            rel="noreferrer"
          >
            <div className="all-projects">
              <span>All Projects</span>
              <LuArrowUpRightFromCircle />
            </div>
          </a>
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

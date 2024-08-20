import React from "react";
import { LuArrowUpRightFromCircle } from "react-icons/lu";
import styled from "styled-components";

const Web = () => {
  return (
    <Center>
      <Card id="alt">
        <div className="right port-content margin">
          <div className="title">
            <h1>Royal Banc Pacific</h1>
            <img
              src="img/rbp.png"
              alt=""
              style={{
                height: "40px",
              }}
            />
          </div>
          <div className="content">
            <p>
              <b>Royal Banc Pacific : </b>A modern banking website built using
              React, TailwindCSS, and shadCN UI. The design emphasizes sleek
              aesthetics and user-friendly navigation, ensuring a seamless
              digital experience for customers. The site’s robust and visually
              appealing interface reflects the bank’s commitment to delivering
              innovative financial solutions.
            </p>
          </div>
          <div className="tech">
            <h1>Tech Stack: </h1>
            <ul>
              <li>React.js</li>
              {/* <li>MongoDB</li> */}
              {/* <li>Express.js</li> */}
              {/* <li>Node.js</li> */}
              <li>TailwindCSS</li>
              <li>ShadcnUI</li>
              {/* <li>JWT</li> */}
              {/* <li>Recoil</li> */}
            </ul>
          </div>
          <div className="link">
            <a
              className="one"
              href="https://royalbankpacific.com/"
              target="_blank"
              rel="noreferrer"
            >
              Visit RBP
            </a>
            {/* <a
              className="two"
              href="https://github.com/TusharSahu02/MERN-Project/tree/main/socialmedia"
              target="_blank"
              rel="noreferrer"
            >
              Github repo
            </a> */}
          </div>
        </div>
        <div className="left">
          <a
            href="https://chipper-lmdc.onrender.com/"
            rel="noreferrer"
            target="_blank"
          >
            <img src="videos/rbp.gif" alt="" width="100%" />
          </a>
        </div>
      </Card>
      <Card>
        <div className="left">
          <a
            href="https://routine-dev.onrender.com/"
            rel="noreferrer"
            target="_blank"
          >
            <img src="videos/routine.gif" alt="" width={"100%"} />
          </a>
        </div>
        <div className="right port-content">
          <div className="title">
            <h1>Routine.dev</h1>
            <img src="img/routine.png" alt="" />
          </div>
          <div className="content">
            <p>
              <b>Meet Routine: </b>A dynamic platform for developers to stay
              updated with the latest tech news and trends. Built with a sleek
              interface, the site curates content from multiple sources, making
              it a go-to hub for tech enthusiasts. The design focuses on
              intuitive navigation and personalized feeds for an enhanced user
              experience.
            </p>
          </div>
          <div className="tech">
            <h1>Tech Stack: </h1>
            <ul>
              <li>React.js</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>Tailwind CSS</li>
              <li>ShadcnUI</li>
            </ul>
          </div>
          <div className="link">
            <a
              className="one"
              href="https://routine-dev.onrender.com/"
              target="_blank"
              rel="noreferrer noopenner"
            >
              Visit Routine.dev
            </a>
            <a
              className="two"
              href="https://github.com/TusharSahu02/routine_dev"
              target="_blank"
              rel="noreferrer noopenner"
            >
              Github repo
            </a>
          </div>
        </div>
      </Card>
      <Card id="alt">
        <div className="right port-content margin">
          <div className="title">
            <h1>Chipper</h1>
          </div>
          <div className="content">
            <p>
              <b>Welcome to Chipper : </b>
              The ultimate social media platform! Packed with features and
              powered by a cutting-edge tech stack including MERN, TailwindCSS,
              and ShadowUI. Enjoy seamless authentication, protected routes, and
              effortless deployment.
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
            href="https://chipper-lmdc.onrender.com/"
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
              headers, and a robust text editor powered by Blacknote. Simplify
              organization and creativity effortlessly.
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
              Empowering laborers with a dedicated government platform. With a
              fully implemented CRUD system, admin panel ensures seamless data
              management. Laborers can retrieve information and obtain ID cards,
              fostering a connected community.
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
        <div className="left">
          <a
            href="https://vishvakarmamajdurunion.in/"
            rel="noreferrer"
            target="_blank"
          >
            <img src="img/vish.png" alt="" width="100%" />
          </a>
        </div>
      </Card>
      {/* vishwarma */}
      {/* <Card>
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
              Empowering laborers with a dedicated government platform. With a
              fully implemented CRUD system, admin panel ensures seamless data
              management. Laborers can retrieve information and obtain ID cards,
              fostering a connected community.
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
      </Card> */}
      {/* Movie */}
      {/* <div>
        fwef
      </div> */}
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
    </Center>
  );
};

export default Web;

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
const Center = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
`;

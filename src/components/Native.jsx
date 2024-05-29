import React from "react";
import styled from "styled-components";

const Native = () => {
  return (
    <Center>
      <Card id="alt">
        <div className="right port-content margin">
          <div className="title">
            <h1>Fitness App</h1>
          </div>
          <div className="content">
            <p>
              {/* <b></b> */}
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
            {/* <a
              className="one"
              href="https://github.com/TusharSahu02/fitness-app"
              target="_blank"
              rel="noreferrer noopener"
            >
              Visit Chipper
            </a> */}
            <a
              className="two"
              href="https://github.com/TusharSahu02/fitness-app"
              target="_blank"
              rel="noreferrer noopener"
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
            <img
              src="https://private-user-images.githubusercontent.com/82487339/293624170-cad41738-b28f-4617-bb93-911675bac369.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTY5NzE4NzUsIm5iZiI6MTcxNjk3MTU3NSwicGF0aCI6Ii84MjQ4NzMzOS8yOTM2MjQxNzAtY2FkNDE3MzgtYjI4Zi00NjE3LWJiOTMtOTExNjc1YmFjMzY5LmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA1MjklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNTI5VDA4MzI1NVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWFjZDM4NWRlOTNlYzJiNTI0NmU0YmE1NWQ3MmQ4NmEwYjg2N2RiMmU2NjEwNDI5MjlkODJmYmRmNTk1ZTVhZGQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.lTiDdAbff33-0FBBObNTSWwT5ozKRP_51ihMT5UobBI"
              alt=""
              height={"300px"}
              width="100%"
              style={{ objectFit: "cover" }}
            />
          </a>
        </div>
      </Card>
      {/* jotion */}
      <Card>
        <div className="left">
          <a
            href="https://www.youtube.com/watch?v=9_dT8uDy_xg"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src="https://user-images.githubusercontent.com/82487339/224571537-0b53dc2d-e7e1-4963-a495-9561f18c9a2e.jpg"
              alt=""
              width={"100%"}
              height={"350px"}
              style={{ objectFit: "cover" }}
            />
          </a>
        </div>
        <div className="right port-content">
          <div className="title">
            <h1>Music App</h1>
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
              href="https://www.youtube.com/watch?v=9_dT8uDy_xg"
              target="_blank"
              rel="noreferrer noopener"
            >
              Demo ( youtube )
            </a>
            <a
              className="one"
              href="https://www.upload-apk.com/gAuHXLtrlvF6CrB"
              target="_blank"
              rel="noreferrer noopener"
            >
              APK
            </a>
            <a
              className="two"
              href="https://github.com/TusharSahu02/Music-Player?tab=readme-ov-file"
              target="_blank"
              rel="noreferrer noopener"
            >
              Github repo
            </a>
          </div>
        </div>
      </Card>
      {/* BMI calc */}
      {/* https://www.upload-apk.com/qvnfSzFXZG88TRv */}
    </Center>
  );
};

export default Native;

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

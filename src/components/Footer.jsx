import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <MainFooter>
      <Container>
        <LeftFooter>
          <img src="/img/footerImg.svg" alt="" />
        </LeftFooter>
        <MidFooter id="contact">
          <p className="header">Tushar Sahu</p>
          <div className="socials">
            <a
              rel="noreferrer"
              href="mailto:tusharsahu.dev@gmail.com"
              target={"_blank"}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/6711/6711567.png"
                alt=""
              />
            </a>
            {/* <a href="http://wa.me/918827455874" target={"_blank"}>
              <img
                className="scale"
                src="https://www.freepnglogos.com/uploads/whatsapp-logo-light-green-png-0.png"
                alt=""
              />
            </a> */}
            <a
              rel="noreferrer"
              href="https://github.com/TusharSahu02"
              target={"_blank"}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/5968/5968866.png"
                alt=""
              />
            </a>
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/tusharsahu-rgh/"
              target={"_blank"}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
                alt=""
              />
            </a>
            <a
              rel="noreferrer"
              href="https://twitter.com/BuddyHidden"
              target={"_blank"}
            >
              <img
                src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_twitter-512.png"
                alt=""
              />
            </a>
          </div>
        </MidFooter>
        <RightFooter>
          <img src="/img/dp.svg" alt="" />
        </RightFooter>
      </Container>
    </MainFooter>
  );
}

export default Footer;

const MainFooter = styled.div`
  background-color: #041c32;
  color: white;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 1080px) {
    flex-direction: column;
  }
`;

const LeftFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30vw;
  overflow: hidden;
  @media (max-width: 1080px) {
    width: 50vw;
  }
  img {
    width: 100%;
    scale: 0.8;
  }
`;
const MidFooter = styled.div`
  width: 40vw;
  display: flex;
  align-items: center;

  flex-direction: column;
  justify-content: center;

  @media (max-width: 1080px) {
    width: 90vw;
  }

  .scale {
    scale: 140%;
    margin-bottom: 29px;

    @media (max-width: 768px) {
      margin-bottom: 15px;
    }

    &:hover {
      scale: 160%;
    }
  }
  .header {
    font-family: "Ailerons";
    font-size: 4rem;

    @media (max-width: 768px) {
      font-size: 3rem;
    }

    @media (max-width: 475px) {
      font-size: 2rem;
    }
  }

  img {
    width: 50px;
    margin: 20px;
    transition: all 0.25s;

    @media (max-width: 768px) {
      margin: 8px;
    }
    @media (max-width: 475px) {
      width: 30px;
      margin: 8px;
    }

    &:hover {
      scale: 120%;
    }
  }

  #wp {
    margin-top: 20px;
  }
`;
const RightFooter = styled.div`
  width: 30vw;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1080px) {
    display: none;
  }

  img {
    margin: 0;
    width: 60%;
    align-items: center;
  }
`;

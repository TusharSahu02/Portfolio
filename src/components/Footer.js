import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <MainFooter>
      <Container>
        <LeftFooter>
          <img src="/img/footerImg.svg" alt="" />
        </LeftFooter>
        <MidFooter>
          <p className="header">Tushar Sahu</p>
          <div className="socials">
            <a href="mailto:tusharintern02@gmail.com" target={"_blank"}>
              <img src="https://cdn-icons-png.flaticon.com/512/6711/6711567.png" alt="" />
            </a>
            <a href="http://wa.me/917000773166" target={"_blank"}>
              <img className="scale" src="https://www.freepnglogos.com/uploads/whatsapp-logo-light-green-png-0.png" alt="" />
            </a>
            <a href="https://github.com/TusharSahu02" target={"_blank"}>
              <img src="https://cdn-icons-png.flaticon.com/512/5968/5968866.png" alt="" />
            </a>
            <a href="https://www.linkedin.com/in/tushar-sahu-buddy/" target={"_blank"}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" alt="" />
            </a>
            <a href="https://www.hackerrank.com/tusharsahu190702" target={"_blank"}>
              <img  src="https://gitlab.com/uploads/-/system/project/avatar/39393275/hackerrank.jpg" alt="" />
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
  height: 400px;
  background-color: #041c32;
  color: white;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const LeftFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30vw;
  height: 400px;
  img {
    width: 100%;
    margin-top: -170px;
  }
`;
const MidFooter = styled.div`
  width: 40vw;
  display: flex;
  align-items: center;
  height: 400px;
  flex-direction: column;
  justify-content: center;

  .scale {
    scale: 140%;
    margin-bottom: 29px;

    &:hover{
      scale: 160%;
    }
  }
  .header {
    font-family: "Ailerons";
    font-size: 4rem;
  }

  img {
    width: 50px;
    margin: 20px;
    transition: all 0.25s;

    &:hover{
      scale: 120%;
    }
  }

`;
const RightFooter = styled.div`
  width: 30vw;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;

  img {
    margin: 0;
    /* margin-right: -150px; */
    width: 60%;
    align-items: center;
  }
`;

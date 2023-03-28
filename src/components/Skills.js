import React,{useEffect} from "react";
import Marquee from "react-fast-marquee";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";

function Skills() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <MainContainer>
      <Container>
        <SHeader data-aos="fade-up">
          <div>
            <p className="skills">Skills</p>
          </div>
          <div>
            <p className="tech">Tech</p>
          </div>
        </SHeader>
      </Container>
      <SDetails data-aos="fade-up">
        <Marquee speed={50}>
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/174/174854.png" alt="" />
          </div>
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="" />
          </div>
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="" />
          </div>
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png" alt="" />
          </div>
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/226/226777.png" alt="" />
          </div>
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/888/888839.png" alt="" />
          </div>
          <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Android_Studio_Icon_%282014-2019%29.svg/1200px-Android_Studio_Icon_%282014-2019%29.svg.png" alt="" />
          </div>
          <div>
            <img src="https://www.svgrepo.com/show/452238/jb-kotlin.svg" alt="" />
          </div>
          <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png" alt="" />
          </div>
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/6132/6132222.png" alt="" />
          </div>
          <div>
            <img src="https://firebase.google.com/static/images/brand-guidelines/logo-logomark.png" alt="" />
          </div>
          <div>
            <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="" />
          </div>
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
          </div>
          <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" alt="" />
          </div>
          <div>
            <img src="https://seeklogo.com/images/M/material-ui-logo-5BDCB9BA8F-seeklogo.com.png" alt="" />
          </div>
          <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png" alt="" />
          </div>
        </Marquee>
      </SDetails>
    </MainContainer>
  );
}

export default Skills;

const MainContainer = styled.div``;
const Container = styled.div`
  margin-left: 300px;
  margin-right: 300px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-right: 0;
  }
`;
const SHeader = styled.div`
  margin-top: 30px;
  .skills {
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

    @media (max-width: 768px) {
      font-size: 30px;
    }
  }
  .tech {
    font-family: "Horizon";
    font-size: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -80px;

    @media (max-width: 768px) {
      font-size: 20px;
      margin-top: -26px;
    }
  }
`;

const SDetails = styled.div`
  display: flex;
  margin-top: 30px;
  /* align-items: center; */
  justify-content: space-evenly;
  img {
    margin-left: 30px;
    margin-right: 30px;
    width: 60px;

    @media (max-width: 768px) {
      width: 30px;
      margin-left: 8px;
      margin-right: 8px;
    }
  }
`;

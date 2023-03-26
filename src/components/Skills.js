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
            <img src="/img/html.png" alt="" />
          </div>
          <div>
            <img src="/img/css.png" alt="" />
          </div>
          <div>
            <img src="/img/js.png" alt="" />
          </div>
          <div>
            <img src="/img/atom.png" alt="" />
          </div>
          <div>
            <img src="/img/java.png" alt="" />
          </div>
          <div>
            <img src="/img/android.png" alt="" />
          </div>
          <div>
            <img src="/img/android1.png" alt="" />
          </div>
          <div>
            <img src="/img/kotlin.png" alt="" />
          </div>
          <div>
            <img src="/img/c-.png" alt="" />
          </div>
          <div>
            <img src="/img/clogo.png" alt="" />
          </div>
          <div>
            <img src="/img/firebase.png" alt="" />
          </div>
          <div>
            <img src="/img/git.png" alt="" />
          </div>
          <div>
            <img src="/img/github.png" alt="" />
          </div>
          <div>
            <img src="/img/tailwind.png" alt="" />
          </div>
          <div>
            <img src="/img/materialUI.png" alt="" />
          </div>
          <div>
            <img src="/img/bootstrap.png" alt="" />
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

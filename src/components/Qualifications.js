import React, { useEffect } from "react";
import "../index.css";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
function Qualifications() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <QualificationMain>
      <img src="/img/waveQuali.svg" alt="" />
      <Container>
        <AboutQualification data-aos="fade-up">
          <div>
            <p className="qualification">Qualifications</p>
          </div>
        </AboutQualification>
        <DetailQualification>
          <div className="q_data" data-aos="fade-right">
            <div className="q_heading">
              <div>
                <img src="/img/location.png" alt="" />
              </div>
              <div>
                <p className="title q_top">O.P.Jindal</p>
                <p className="title">University</p>
              </div>
            </div>
            <div className="q_details">
              <span>
                <p>B.Tech - CSE</p>
                <p>Currently in</p>
                <p>6th Sem</p>
              </span>
              <span>
                <p>2020-2024</p>
              </span>
            </div>
          </div>
          <div className="q_data" data-aos="fade-right">
            <div className="q_heading">
              <div>
                <img src="/img/location.png" alt="" />
              </div>
              <div>
                <p className="title q_top">O.P.Jindal</p>
                <p className="title">School</p>
              </div>
            </div>
            <div className="q_details">
              <span>
                <p>CBSE XII</p>
                <p>2019-2020</p>
              </span>
            </div>
          </div>
          <div className="q_data" data-aos="fade-right">
            <div className="q_heading">
              <div>
                <img src="/img/location.png" alt="" />
              </div>
              <div>
                <p className="title q_top">St.Ann's Hig.</p>
                <p className="title">Sec. School</p>
              </div>
            </div>
            <div className="q_details">
              <span>
                <p>CGBSE X</p>
                <p>2017-2018</p>
              </span>
            </div>
          </div>
        </DetailQualification>
      </Container>
    </QualificationMain>
  );
}

export default Qualifications;

const QualificationMain = styled.div`
  background-color: #443c68;
  height: 500px;
`;

const Container = styled.div`
  margin-left: 300px;
  margin-right: 300px;
  margin-top: -200px;
  @media (max-width: 768px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

const AboutQualification = styled.div`
  margin-top: -400px;

  .qualification {
    font-size: 100px;
    font-family: "Horizon";
    display: flex;
    color: #443c68;
    opacity: 90%;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      font-size: 30px;
    }
  }
`;

const DetailQualification = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 30px;

  .q_data {
    border: 1px solid white;
    width: 250px;
    border-radius: 20px;
    height: 200px;
    background: #443c68;

    &:hover {
      scale: 110%;
      transition: all 0.25s;
    }

    @media (max-width: 768px) {
      margin: 5px;
    }
  }
  .title {
    font-family: "Horizon";
    align-items: center;
    display: flex;
    color: white;
    justify-content: center;
  }
  .q_top {
    margin-top: 15px;
  }
  img {
    width: 20px;
    margin-top: 10px;
    margin-right: -25px;
  }
  .q_heading {
    align-items: center;
    justify-content: space-evenly;
    display: flex;
  }
  p {
    font-family: "Quicksand", sans-serif;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .q_details {
    margin-top: 30px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

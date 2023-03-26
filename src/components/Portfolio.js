import React, { useEffect } from "react";
import styled from "styled-components";

import Aos from "aos";
import "aos/dist/aos.css";

function Portfolio() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <MainContainer>
      <Container>
        <PortHeader data-aos="fade-up">
          <div>
            <p className="portfolio">Portfolio</p>
          </div>
          <div>
            <p className="projects">Projects</p>
          </div>
        </PortHeader>
        <PortDetails>
          <CardSection>
            <WebDev>
              <p data-aos="fade-right">Web Dev</p>
              <div data-aos="fade-right">
                <div className="card1">
                  {/* <img src="/img/musicplayer.jpg" alt="" /> */}
                  <div className="details">
                    <p className="title">Google Search Engine</p>
                    <p className="desc">
                      A clone of Google search which gives 10
                    </p>
                    <p className="desc"> result on single search</p>

                    <p className="desc">
                      <div className="links_">
                        Tech Stack used :
                        <img src="/img/atom.png" alt="" />
                        <img src="/img/materialUI.png" alt="" />
                      </div>
                    </p>

                    <div className="links">
                      <a href="https://www.linkedin.com/posts/tushar-sahu-buddy_connections-react-google-activity-7035718911648018432-MJCz?utm_source=share&utm_medium=member_desktop">
                        <img src="/img/linkedin.png" alt="" />
                      </a>
                      <a href="https://github.com/TusharSahu02/google-clone">
                        <img src="/img/github.png" alt="" />
                      </a>
                      <a href="https://google-clone-tusharsahu02.vercel.app/">
                        <img src="/img/deployed.png" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card2">
                  <img src="/img/googleClone.svg" alt="" />
                </div>
              </div>

              <div data-aos="fade-right" className="webCard">
                <div className="card1">
                  {/* <img src="/img/musicplayer.jpg" alt="" /> */}
                  <div className="details">
                    <p className="title">Weather App</p>
                    <p className="desc">
                      A live preview of weather data , temp. humidity
                    </p>
                    <p className="desc">
                      weather based icon , min and max temp and many more
                    </p>

                    <p className="desc">
                      <div className="links_">
                        Tech Stack used :
                        <img src="/img/atom.png" alt="" />
                        <img src="/img/css.png" alt="" />
                      </div>
                    </p>

                    <div className="links">
                      <a href="https://www.linkedin.com/posts/tushar-sahu-buddy_folks-project-reactjs-activity-7034077139171745792-pUMT?utm_source=share&utm_medium=member_desktop">
                        <img src="/img/linkedin.png" alt="" />
                      </a>
                      <a href="https://github.com/TusharSahu02/Weather-App">
                        <img src="/img/github.png" alt="" />
                      </a>
                      <a href="https://weather-app-tushar.vercel.app/">
                        <img src="/img/deployed.png" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card2">
                  <img src="/img/weatherApp.svg" alt="" />
                </div>
              </div>
              <div data-aos="fade-right" className="webCard">
                <div className="card1">
                  {/* <img src="/img/musicplayer.jpg" alt="" /> */}
                  <div className="details">
                    <p className="title">Preview-It</p>
                    <p className="desc">
                      A Makdown file editor ,which can act as a live server
                    </p>
                    <p className="desc">
                      left side is for coding .md file and will preview the
                      updates live on right side
                    </p>

                    <p className="desc">
                      <div className="links_">
                        Tech Stack used :
                        <img src="/img/atom.png" alt="" />
                        <img src="/img/css.png" alt="" />
                      </div>
                    </p>

                    <div className="links">
                      <a href="https://www.linkedin.com/posts/tushar-sahu-buddy_connections-greetings-react-activity-7032042936812859392-l2yg?utm_source=share&utm_medium=member_desktop">
                        <img src="/img/linkedin.png" alt="" />
                      </a>
                      <a href="https://github.com/TusharSahu02/MarkDown-Preview">
                        <img src="/img/github.png" alt="" />
                      </a>
                      <a href="https://tushar-sahu-markdown.netlify.app/">
                        <img src="/img/deployed.png" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card2">
                  <img src="/img/readme.svg" alt="" />
                </div>
              </div>
              <div data-aos="fade-right" className="webCard">
                <div className="card1">
                  {/* <img src="/img/musicplayer.jpg" alt="" /> */}
                  <div className="details">
                    <p className="title">Landing Page</p>
                    <p className="desc">
                      A fully resonsive web page with react-typing-animation
                    </p>
                    <p className="desc">
                      with different components ,react-icons and many more..{" "}
                    </p>

                    <p className="desc">
                      <div className="links_">
                        Tech Stack used :
                        <img src="/img/atom.png" alt="" />
                        <img src="/img/tailwind.png" alt="" />
                      </div>
                    </p>

                    <div className="links">
                      <a href="https://www.linkedin.com/posts/tushar-sahu-buddy_connections-share-project-activity-7032663113380290560-_iEU?utm_source=share&utm_medium=member_desktop">
                        <img src="/img/linkedin.png" alt="" />
                      </a>
                      <a href="https://github.com/TusharSahu02/da-app">
                        <img src="/img/github.png" alt="" />
                      </a>
                      <a href="https://tusharsahu02.github.io/da-app/">
                        <img src="/img/deployed.png" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card2">
                  <img src="/img/response.svg" alt="" />
                </div>
              </div>
            </WebDev>
            <AndroidDev>
              <p data-aos="fade-left"> Android Dev</p>
              <div data-aos="fade-left">
                <div className="card1">
                  {/* <img src="/img/music01.jpg" alt="" /> */}
                  <div className="details">
                    <p className="title">Music Player</p>
                    <p className="desc">
                      An offline music player which takes access from the user
                      and fetches data from local storage and display in app
                    </p>
                    <p className="desc">User can : </p>
                    <p className="desc">• Add to Favourite </p>
                    <p className="desc">• Create PLaylist </p>
                    <p className="desc">• Share music </p>
                    <p className="desc">• Equilizer </p>

                    <p className="desc">
                      <div className="links_">
                        Tech Stack used :
                        <img src="/img/kotlin.png" alt="" />
                        <img src="/img/xml.png" alt="" />
                      </div>
                    </p>

                    <div className="links">
                      <a href="https://www.linkedin.com/posts/tushar-sahu-buddy_connections-share-android-activity-7040789857094279168-rPJT?utm_source=share&utm_medium=member_desktop">
                        <img src="/img/linkedin.png" alt="" />
                      </a>
                      <a href="https://github.com/TusharSahu02/Music-Player">
                        <img src="/img/github.png" alt="" />
                      </a>
                      <a href="https://drive.google.com/file/d/1VleOl1Xw2-suAhMsoaDk3u8VaikKWqzQ/view">
                        <img src="/img/android.png" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card2">
                  <img src="/img/music.svg" alt="" />
                </div>
              </div>
              <div data-aos="fade-left">
                <div className="card1">
                  {/* <img src="/img/musicplayer.jpg" alt="" /> */}
                  <div className="details">
                    <p className="title">BMI calculator</p>
                    <p className="desc">
                      A basic BMI calculator which takes input as following
                      display the BMI result
                    </p>
                    <p className="desc">• Male/Female</p>
                    <p className="desc">• Age </p>
                    <p className="desc">• Height in Inch </p>
                    <p className="desc">• Weight </p>

                    <p className="desc">
                      <div className="links_">
                        Tech Stack used :
                        <img src="/img/java.png" alt="" />
                        <img src="/img/xml.png" alt="" />
                      </div>
                    </p>

                    <div className="links">
                      <a href="https://www.linkedin.com/in/tushar-sahu-buddy/">
                        <img src="/img/linkedin.png" alt="" />
                      </a>
                      <a href="https://github.com/TusharSahu02/BMI-App">
                        <img src="/img/github.png" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card2">
                  <img src="/img/bmi.svg" alt="" />
                </div>
              </div>
              <div data-aos="fade-left">
                <div className="card1">
                  {/* <img src="/img/musicplayer.jpg" alt="" /> */}
                  <div className="details">
                    <p className="title">Notes App</p>
                    <p className="desc">
                      A morden notes taking app as google Keep in which user can
                    </p>
                    <p className="desc">• Add Note</p>
                    <p className="desc">• Delete </p>
                    <p className="desc">• Pin </p>
                    <p className="desc">• Update </p>
                    <p className="desc">• Search </p>

                    <p className="desc">
                      <div className="links_">
                        Tech Stack used :
                        <img src="/img/java.png" alt="" />
                        <img src="/img/xml.png" alt="" />
                      </div>
                    </p>

                    <div className="links">
                      <a href="https://www.linkedin.com/posts/tushar-sahu-buddy_android-noteapp-beginner-activity-6973273380418433024-_0d0?utm_source=share&utm_medium=member_desktop">
                        <img src="/img/linkedin.png" alt="" />
                      </a>
                      <a href="https://github.com/TusharSahu02/NotesApp">
                        <img src="/img/github.png" alt="" />
                      </a>
                      <a href="https://drive.google.com/file/d/1tW7NEVGMhhq6YS11IwdmluSZFzoj4kDd/view">
                        <img src="/img/android.png" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card2">
                  <img src="/img/music.svg" alt="" />
                </div>
              </div>

              <div data-aos="fade-left">
                <div className="card_">
                  {/* <img src="/img/musicplayer.jpg" alt="" /> */}
                  <div className="details">
                    <p className="title">Meme Share App</p>
                    <p className="desc">
                      A app that fetches data from reddit meme API and with the
                      help of volly library and showing datas into app
                    </p>
                    <p className="desc">User Can do: </p>
                    <p className="desc">• Next button for new Meme </p>
                    <p className="desc">• Share with friends</p>

                    <p className="desc">
                      <div className="links_">
                        Tech Stack used :
                        <img src="/img/java.png" alt="" />
                        <img src="/img/xml.png" alt="" />
                      </div>
                    </p>

                    <div className="links">
                      <a href="https://www.linkedin.com/in/tushar-sahu-buddy/">
                        <img src="/img/linkedin.png" alt="" />
                      </a>
                      <a href="https://github.com/TusharSahu02/Meme-Share-App">
                        <img src="/img/github.png" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card3">
                  <img src="/img/meme.svg" alt="" />
                </div>
              </div>
            </AndroidDev>
          </CardSection>
        </PortDetails>
      </Container>
    </MainContainer>
  );
}

export default Portfolio;

const MainContainer = styled.div`
  background-color: #443c68;
`;
const Container = styled.div`
  margin-left: 300px;
  margin-right: 300px;
  /* margin-top: 50px; */

  @media (max-width: 768px) {
    margin-left: 0;
    margin-right: 0;
  }
`;
const PortHeader = styled.div`
  .portfolio {
    font-size: 100px;
    font-family: "HorizonOutlined";
    display: flex;
    opacity: 50%;
    color: white;
    justify-content: center;
    align-items: center;

    padding: 10px;
    letter-spacing: 2px;
    transition: all 0.25s;

    &:hover {
      letter-spacing: 15px;
    }

    @media (max-width: 768px) {
      font-size: 30px;
    }
  }
  .projects {
    font-size: 60px;
    font-family: "Horizon";
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -80px;
    color: white;

    @media (max-width: 768px) {
      font-size: 20px;
      margin-top: -35px;
    }
  }
`;

const PortDetails = styled.div`
  margin-top: 20px;
`;
const WebDev = styled.div`
  width: 600px;
  font-family: "Lastica";
  font-size: 30px;
  color: white;
  text-align: center;
  /* border: 1px solid black; */
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  .webCard {
    margin-top: -50px;
  }
  .card1 {
    margin: 20px;
    width: 560px;
    overflow: hidden;
    border-radius: 20px;
    height: 300px;
    border: 1px solid white;
    /* transition: all 600ms cubic-bezier(0.2, 0, 0, 0.8); */
    display: flex;
    align-items: center;
    justify-content: right;
    transition: 1s ease;

    &:hover {
      transform: scale(1.1);
      z-index: 2;
    }

    .details {
      width: 60%;
      .title {
        font-family: "Aquire";
        font-size: 1.5rem;
      }
      .desc {
        margin-top: 5px;
        font-size: 0.8rem;
        font-family: "Roboto";
      }
      .links {
        cursor: pointer;
        margin-top: 30px;
        img {
          width: 30px;
          margin: 4px;

          &:hover {
            scale: 110%;
          }
        }
      }
      .links_ {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 30px;
        img {
          width: 20px;
          margin: 4px;

          &:hover {
            scale: 110%;
          }
        }
      }
    }
    @media (max-width: 768px) {
      height: 200px;
    }
  }

  .card2 {
    img {
      width: 500px;
      margin-top: -420px;
      margin-left: -450px;
    }
  }
`;
const AndroidDev = styled.div`
  width: 600px;
  font-size: 30px;
  text-align: center;
  color: white;
  margin-top: -40px;
  font-family: "Lastica";

  /* border: 1px solid black; */
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  .card1 {
    margin: 20px;
    width: 560px;
    overflow: hidden;
    border-radius: 20px;
    height: 300px;
    border: 1px solid white;

    display: flex;
    align-items: center;
    justify-content: right;

    transition: 1s ease;

    &:hover {
      transform: scale(1.1);
      z-index: 2;
    }

    .details {
      width: 60%;
      .title {
        font-family: "Aquire";
        font-size: 1.5rem;
      }
      .desc {
        margin-top: 5px;
        font-size: 0.8rem;
        font-family: "Roboto";
      }
      .links {
        cursor: pointer;
        margin-top: 10px;
        img {
          width: 30px;
          margin: 4px;

          &:hover {
            scale: 110%;
          }
        }
      }
      .links_ {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 30px;
        img {
          width: 20px;
          margin: 4px;

          &:hover {
            scale: 110%;
          }
        }
      }
    }
    @media (max-width: 768px) {
      height: 200px;
    }
  }
  .card_ {
    margin: 20px;
    width: 560px;
    overflow: hidden;
    border-radius: 20px;
    height: 300px;
    border: 1px solid white;

    display: flex;
    align-items: center;
    justify-content: left;

    transition: 1s ease;

    &:hover {
      transform: scale(1.1);
      z-index: 2;
    }

    .details {
      width: 60%;
      .title {
        font-family: "Aquire";
        font-size: 1.5rem;
      }
      .desc {
        margin-top: 5px;
        font-size: 0.8rem;
        font-family: "Roboto";
      }
      .links {
        cursor: pointer;
        margin-top: 10px;
        img {
          width: 30px;
          margin: 4px;

          &:hover {
            scale: 110%;
          }
        }
      }
      .links_ {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 30px;
        img {
          width: 20px;
          margin: 4px;

          &:hover {
            scale: 110%;
          }
        }
      }
    }
    @media (max-width: 768px) {
      height: 200px;
    }
  }
  .card2 {
    img {
      width: 500px;
      margin-top: -520px;
      margin-left: -350px;
    }
  }
  .card3 {
    img {
      object-fit: contain;
      width: 450px;
      margin-top: -420px;
      margin-right: -400px;
    }
  }
`;
const CardSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

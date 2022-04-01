import React from "react";
import { Container, Left, Right } from "./styles";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

export function Dashboard() {
  return (
    <Container>
      <Left>
        <div className="avatar">
          <img
            src="http://www.designstub.com/demos/onepageresume/assets/images/my-pic.jpg"
            alt="avatar"
          />
        </div>
        <div className="name">
          <h1>Kayque Avelar</h1>
          <span>Egenheiro de Software</span>
        </div>
        <div className="social-icons">
          <IconButton className="itemMain">
            <FaLinkedin />
          </IconButton>
          <IconButton className="itemMain">
            <FaGithub />
          </IconButton>
        </div>

        <div className="main-nav">
          <Button variant="text" className="itemMain" href="#about">
            SOBRE MIM
          </Button>
          <Button variant="text" className="itemMain">
            EXPERIÊNCIA
          </Button>
          <Button variant="text" className="itemMain">
            FORMAÇÃO
          </Button>
          <Button variant="text" className="itemMain">
            TRABALHOS
          </Button>
        </div>
      </Left>
      <Right>
        <section id="about">
          <div className="header">
            <h2>SOBRE MIM</h2>
            <div>Download Resume</div>
          </div>
          <div className="intro">
            <p>
              Hello, My name is John Doe. Lorem ipsum dolor sit amet, usu sumo
              dicant vulputate in. Quando fabellas adipiscing nam an. An vis
              congue oporteat, no eros facer suavitate eos. An debet affert
              aliquid ius. Veritus placerat est ea, est ne nominavi suscipit
              maluisset.
            </p>
            <div className="info">
              <div className="line">
                <div className="atribute">Birthday:</div>
                <div className="response">August 14, 1982</div>
              </div>
              <div className="line">
                <div className="atribute">Location:</div>
                <div className="response">Central Main Rd, Australia</div>
              </div>
              <div className="line">
                <div className="atribute">Email:</div>
                <div className="response">contact@yourmail.com</div>
              </div>
              <div className="line">
                <div className="atribute">Phone:</div>
                <div className="response">+111 1234-1234</div>
              </div>
              <div className="skills">
                <div className="skill">
                  <div className="header">
                    <h3 className="name">React</h3>
                    <span className="value">90%</span>
                  </div>
                  <div className="bar">
                    <div></div>
                  </div>
                </div>
                <div className="skill">
                  <div className="header">
                    <h3 className="name">React</h3>
                    <span className="value">90%</span>
                  </div>
                  <div className="bar">
                    <div></div>
                  </div>
                </div>
                <div className="skill">
                  <div className="header">
                    <h3 className="name">React</h3>
                    <span className="value">90%</span>
                  </div>
                  <div className="bar">
                    <div></div>
                  </div>
                </div>
                <div className="skill">
                  <div className="header">
                    <h3 className="name">React</h3>
                    <span className="value">90%</span>
                  </div>
                  <div className="bar">
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="education">
            <div className="header">
              <h2>EDUCAÇÃO</h2>
            </div>
            <div className="itemEducation">
              <h2>Master Degree Of Design</h2>
              <span>JANUARY, 2007</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
                maxime laborum sequi, magni earum quo soluta sint velit numquam,
                ipsum illum! Nostrum possimus illo architecto praesentium ut
                aliquam dolorem.
              </p>
            </div>

            <div className="itemEducation">
              <h2>Master Degree Of Design</h2>
              <span>JANUARY, 2007</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
                maxime laborum sequi, magni earum quo soluta sint velit numquam,
                ipsum illum! Nostrum possimus illo architecto praesentium ut
                aliquam dolorem.
              </p>
            </div>

            <div className="itemEducation">
              <h2>Master Degree Of Design</h2>
              <span>JANUARY, 2007</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
                maxime laborum sequi, magni earum quo soluta sint velit numquam,
                ipsum illum! Nostrum possimus illo architecto praesentium ut
                aliquam dolorem.
              </p>
            </div>
          </div>
        </section>
      </Right>
    </Container>
  );
}

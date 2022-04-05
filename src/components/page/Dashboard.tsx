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
            src="https://media-exp1.licdn.com/dms/image/C4E03AQEaqAc7f1ntrQ/profile-displayphoto-shrink_800_800/0/1543589025612?e=1654128000&v=beta&t=vP2bmeu8RzDWu_xP_-wjwfDdb08T5aa9TeLCcViTZqs"
            alt="avatar"
          />
        </div>
        <div className="name">
          <h1>Kayque Avelar</h1>
          <span>Egenheiro de Software</span>
        </div>
        <div className="social-icons">
          <IconButton className="itemMain">
            <a
              href="https://www.linkedin.com/in/slooock/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </IconButton>
          <IconButton className="itemMain">
            <a
              href="https://github.com/slooock"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </IconButton>
        </div>

        <div className="main-nav">
          <Button variant="text" className="itemMain" href="#about">
            SOBRE MIM
          </Button>

          <Button variant="text" className="itemMain" href="#education">
            EDUCAÇÃO
          </Button>
          <Button variant="text" className="itemMain" href="#experiencia">
            EXPERIÊNCIA
          </Button>
          {/* <Button variant="text" className="itemMain">
            TRABALHOS
          </Button> */}
        </div>
      </Left>
      <Right>
        <section id="about">
          <div className="about">
            <div className="header">
              <h2>SOBRE MIM</h2>
              {/* <div>Download Resume</div> */}
            </div>
            <div className="intro">
              <p>
                Olá eu sou o Kayque Avelar, bacharel em Ciência da Computação
                pela Universidade Federal de Viçosa. Em essência sou bom em
                resolução de problemas e em enxergar como individualidades podem
                gerar melhores resultados se tratadas com atenção. Minhas força
                de vontade e resiliência me guiam por estes desafios de forma
                diária.
              </p>
              <div className="info">
                <div className="line">
                  <div className="atribute">Nascimento:</div>
                  <div className="response">26 Abril, 1993</div>
                </div>
                <div className="line">
                  <div className="atribute">Endereço:</div>
                  <div className="response">Belo Horizonte - MG</div>
                </div>
                <div className="line">
                  <div className="atribute">Email:</div>
                  <div className="response">kayque.avelar@gmail.com</div>
                </div>
                <div className="line">
                  <div className="atribute">Phone:</div>
                  <div className="response">31 97546 0850</div>
                </div>
                <div className="skills">
                  <h3>Linguagens e Frameworks</h3>
                  TypeScript, React, Angular, React, Native, Golang, VueJS,
                  Python, Flutter, Flask.
                  {/* <div className="skill">
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
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="education">
          <div className="education">
            <div className="header">
              <h2>EDUCAÇÃO</h2>
            </div>
            <div className="itemEducation">
              <div className="headerEducation">
                <h2>GoStack</h2>
                <div className="flex">
                  <span className="organization">Rocketseat, Brasil</span>
                  <span className="date">2020-2020</span>
                </div>
              </div>
              <p>
                No GoStack o aluno vai a fundo nas tecnologias NodeJS, ReactJS e
                React Native, e todo o ecossistema ao redor dessas ferramentas,
                do zero ao deploy.
              </p>
            </div>
          </div>

          <div className="education">
            <div className="itemEducation">
              <div className="headerEducation">
                <h2>Bacharel em Ciência da Computação</h2>
                <div className="flex">
                  <span className="organization">
                    Universidade Federal de Viçosa - Florestal, Brasil
                  </span>
                  <span className="date">2014–2019</span>
                </div>
              </div>
              <p>
                No GoStack o aluno vai a fundo nas tecnologias NodeJS, ReactJS e
                React Native, e todo o ecossistema ao redor dessas ferramentas,
                do zero ao deploy.
              </p>
            </div>
          </div>
        </section>

        <section id="experiencia">
          <div className="education">
            <div className="header">
              <h2>EXPERIÊNCIA</h2>
            </div>
            <div className="itemEducation">
              <div className="headerEducation">
                <h2>Engenheiro de Software</h2>
                <div className="flex">
                  <span className="organization">Agility</span>
                  <span className="date">2020–Atual</span>
                </div>
              </div>
              <p>
                Desenvolvimento do Eagle, produto que tem como objetivo
                encontrar vulnerabilidades de segurança nos sistemas dos
                clientes. Foco na construção de novos layouts utilizando
                Angular, desenvolvimento de cli utilizando Golang e planejamento
                e criação de pipelines CI/CD com Gitlab CI, Jenkins.
              </p>
            </div>
          </div>

          <div className="education">
            <div className="itemEducation">
              <div className="headerEducation">
                <h2>Engenheiro de Software</h2>
                <div className="flex">
                  <span className="organization">TEDx Belo Horizonte</span>
                  <span className="date">2020–2022</span>
                </div>
              </div>
              <p>
                No GoStack o aluno vai a fundo nas tecnologias NodeJS, ReactJS e
                React Native, e todo o ecossistema ao redor dessas ferramentas,
                do zero ao deploy.
              </p>
            </div>
          </div>

          <div className="education">
            <div className="itemEducation">
              <div className="headerEducation">
                <h2>Engenheiro de Software</h2>
                <div className="flex">
                  <span className="organization">Apsis Tecnologia</span>
                  <span className="date">2019–2020</span>
                </div>
              </div>
              <p>
                Desenvolvimento web utilizando JavaScript, Vue.js, Java,
                Hibernate. Construção de novos layout e manutenção nos layout
                existentes. Implementação de testes automat- izados utilizando
                Selenium Webdriver e Junit.
              </p>
            </div>
          </div>

          <div className="education">
            <div className="itemEducation">
              <div className="headerEducation">
                <h2>Cientista de Dados - Estágio</h2>
                <div className="flex">
                  <span className="organization">Localiza Hert</span>
                  <span className="date">2019–2019</span>
                </div>
              </div>
              <p>
                Aplicando técnicas de Machine Learning para classificação e
                predição de resultados, ger- ando novos dados e informações
                através do aprendizado e análise de padrões a partir de dados
                históricos.
              </p>
            </div>
          </div>

          <div className="education">
            <div className="itemEducation">
              <div className="headerEducation">
                <h2>Redator - Freelancer</h2>
                <div className="flex">
                  <span className="organization">Rock Content</span>
                  <span className="date">2018–2019</span>
                </div>
              </div>
              <p>
                Redação de textos e e-books relacionados a Tecnologia da
                Informação para sites e blogs.
              </p>
            </div>
          </div>

          <div className="education">
            <div className="itemEducation">
              <div className="headerEducation">
                <h2>Monitor - Bolsista</h2>
                <div className="flex">
                  <span className="organization">
                    Universidade Federal de Viçosa - Florestal, Brasil
                  </span>
                  <span className="date">2018–2018</span>
                </div>
              </div>
              <p>
                Auxílio no laboratório, entrevistas e correção de trabalhos
                práticos referentes à matéria Algoritmos e Estrutura de Dados.
              </p>
            </div>
          </div>

          <div className="education">
            <div className="itemEducation">
              <div className="headerEducation">
                <h2>Diretor Gestão de Pessoas</h2>
                <div className="flex">
                  <span className="organization">
                    SetApp - Empresa Júnior de Ciência da Computação, UFV
                  </span>
                  <span className="date">2016–2018</span>
                </div>
              </div>
              <p>
                Responsável por recrutamento, resolução de conflitos internos,
                delegação de tarefas, auxílio no desenvolvimento de projetos.
              </p>
            </div>
          </div>

          <div className="education">
            <div className="itemEducation">
              <div className="headerEducation">
                <h2>Desenvolvedor - Bolsista FAPEMIG</h2>
                <div className="flex">
                  <span className="organization">
                    Universidade Federal de Viçosa - Florestal, Brasil
                  </span>
                  <span className="date">2014–2016</span>
                </div>
              </div>
              <p>
                Levantamento de requisitos, desenvolvimento utilizando a
                linguagem JAVA e persistên- cia de dados com MySQL, a fim de
                incorporar novas tecnologias para a sistematização da
                assistência de enfermagem.
              </p>
            </div>
          </div>

          <div className="education">
            <div className="itemEducation">
              <div className="headerEducation">
                <h2>Auxiliar Administrativo</h2>
                <div className="flex">
                  <span className="organization">Detran-MG</span>
                  <span className="date">2009–2011</span>
                </div>
              </div>
              <p>
                Controle de correspondências e documentos, elaboração de
                relatórios e planilhas.
              </p>
            </div>
          </div>
        </section>
      </Right>
    </Container>
  );
}

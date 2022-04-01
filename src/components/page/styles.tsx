import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  height: 100vh;

  display: grid;

  grid-template-columns: 260px 1fr;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const Left = styled.div`
  background-color: #5655da;
  padding: 46px;
  color: #fff;

  .avatar {
    overflow: hidden;
    width: 165px;
    height: 165px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    border-radius: 50%;

    img {
      max-width: 100%;
      height: auto;
    }
  }

  .name {
    margin: 15px 0;
    width: 300px;

    h1 {
      font-family: "Poppins", sans-serif;
      font-size: 25px;
      font-weight: 700;
      color: #fff;
      letter-spacing: 1px;
      margin: 0 0 5px;
      height: 33px;
    }

    span {
      color: #d8d8e9;
      font-family: "Poppins", sans-serif;
      font-size: 15px;
      font-weight: 600;
    }
  }

  .social-icons {
    display: flex;
    margin-left: -10px;

    margin-bottom: 15px;
    div + div {
      margin-left: 5px;
      cursor: pointer;
    }

    .itemMain {
      color: white;
      font-size: 20px;
    }
  }

  .main-nav {
    display: flex;
    flex-direction: column;
    align-items: self-start;
    .itemMain {
      color: #fff;
      font-family: "Poppins", sans-serif;
      font-size: 12px;
      font-weight: 500;
      letter-spacing: 2px;
      text-transform: uppercase;
      position: relative;
      -webkit-transition: all 0.3s ease-in-out;
      -moz-transition: all 0.3s ease-in-out;
      -o-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
      margin-bottom: 10px;
      cursor: pointer;
      padding: 0px;
      Button {
        color: white;
      }
    }
  }
`;

export const Right = styled.div`
  @media (max-width: 800px) {
    overflow: visible;
  }
  background-color: white;
  overflow: auto;
  scroll-behavior: smooth;
  max-width: 740px;

  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
  }

  section {
    padding: 60px 0px 60px 0px;
    border-bottom: solid 1px #eee;
    .about {
      margin-left: 70px;
      margin-right: 70px;
    }
  }

  h2 {
    color: #f74470;
    display: inline-block;
    font-family: "Poppins", sans-serif;
    font-size: 17px;
    font-weight: 700;
    letter-spacing: 3px;
    margin: 0;
    text-transform: uppercase;
    position: relative;
  }

  p {
    color: #2c2c2c;
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 28px;
  }

  .info {
    margin-top: 40px;
    font-size: 14px;
    .line {
      margin-top: 7px;
      margin-bottom: 7px;
      display: flex;
      .atribute {
        font-weight: 700;
        margin-right: 5px;
      }
    }
  }

  .skills {
    margin-top: 60px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;

    .skill {
      width: 100%;
      max-width: 250px;

      .header {
        display: flex;
        justify-content: space-between;
        h3 {
          font-family: "Poppins", sans-serif;
          font-size: 14px;
          margin: 0;
        }
        span {
          font-family: "Poppins", sans-serif;
          font-size: 12px;
          font-weight: 300;
          color: #9c9c9c;
        }
      }
      .bar {
        background-color: #e0e0e0;
        height: 4px;
        width: 100%;
        div {
          width: 90%;
          background-color: #f74470;
          height: 100%;
        }
      }
    }
  }

  .education {
    .header {
      margin-left: 70px;
    }
    .itemEducation {
      margin-bottom: 30px;

      .headerEducation {
        .date {
          width: 80px;
        }
        h2 {
          width: 100%;
        }
        .organization {
          /* width: 70px; */
          margin: 0px;
        }

        .flex {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          width: 300px;
          padding-right: 30px;

          .organization {
            text-align: end;
          }
          .date {
            text-align: end;
          }
        }
      }

      h2 {
        font-size: 16px;
        font-weight: 700;
        margin: 0 0 10px;
        color: black;
        margin-left: 70px;
      }

      span {
        color: #666;
        display: block;
        font-size: 12px;
        font-weight: 300;
        margin: 0 0 10px;
      }

      div {
        display: flex;
        /* justify-content: flex-end; */
      }

      p {
        color: #2c2c2c;
        font-family: "Poppins", sans-serif;
        font-size: 14px;

        line-height: 20px;
        margin-bottom: 0;
        padding: 0 70px 0 70px;
      }
    }
  }
`;

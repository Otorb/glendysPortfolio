import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitlte";
import astronaut from "../assets/Images/spaceman.png";

const Box = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`;
const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
`;
const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: black;
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: "Ubuntu Mono", monospace;
  font-style: italic;
`;

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticleComponent theme="dark" />

        <Spaceman>
          <img src={astronaut} alt="spaceman" />
        </Spaceman>
        <Main>
          Diseñadora gráfica desde hace 8 años, estudie en la universidad nueva
          Esparta.
          <br /> <br />
          Considero que el diseño es una manera de mostrar grandes cosas de
          manera sencilla que todas puedan recordar y entender fácilmente. Me
          gusta el minimalismo y la elegancia mientras a la hora de diseñar.
          <br /> <br />
          Hace 2 años incursiones en el mundo de la fotografía, lo cual me
          encantó, en este arte uno puede expresar más de lo que se puede decir
          con una sola imagen. Soy una persona que ve en lo cotidiano cosas
          extraordinarias, en lo común lo increíble, recuerda todo tiene un
          significado y yodo es hermoso según el ojo que lo mira.
        </Main>

        <BigTitle text="ABOUT" top="10%" left="5%" />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;

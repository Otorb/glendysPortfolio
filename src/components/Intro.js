import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Me from "../assets/Images/profile-img.png";

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 65vw;
  height: 55vh;
  display: flex;

  background: linear-gradient(
        to right,
        
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
       
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};

  z-index: 1;
`;
const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  

  .pic {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 130%;
    height: auto;
  }
  @media screen and (max-width: 1000px) {
    .pic{
      width: 200%;
      height: auto;
    }
  }
  @media screen and (max-width: 700px) {
    .pic{
      width: 230%;
      height: 80%;
    }
  }


  @media screen and (max-width: 400px) {
    width: 20%;
  

    .pic{
      width: 350px;
      height: 300px;
      margin-left:100px;
      margin-bottom:125px;
    }
  }


`;

const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  color: ${(props) => props.theme.body};
  padding: 2rem;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > *:last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
  }
  @media screen and (max-width: 400px) {

    .hello{
      margin-left:-28px;
      margin-top:-50px;
    }
    .hello2{
      margin-left:-20px;
    }
    .hello3{
      margin-left:-20px;
      font-size:20px;
      
    }
  }
`;

const Intro = () => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: "55vh" }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <SubBox>
        <Text>
          <h1 className="hello">¡Hola! Soy</h1>
          <h3 className="hello2">Glendys Bolívar</h3>
          <h5 className="hello3" >Diseñadora, Fotógrafa</h5>
        </Text>
      </SubBox>
      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <img className="pic" src={Me} alt="Profile Pic" />
        </motion.div>
      </SubBox>
    </Box>
  );
};

export default Intro;

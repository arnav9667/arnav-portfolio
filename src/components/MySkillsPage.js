import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import { Design, Develope } from "./AllSvgs";
import { FaLinkedinIn } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
// import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitlte";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 1300px){
    flex-direction: column;
    padding: 8rem 0px;
    height: auto;
  }
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  cursor: pointer;

  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
  @media (max-width: 30em)> :nth-child(5) {
    margin-bottom: 4rem;
  }
  @media (max-width: 50em)> :nth-child(5) {
    margin-bottom: 5rem;
  }
  @media (max-width: 60rem){
    width: 50vw;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 4rem;
  }

`;



const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
  @media (max-width: 1300px){
    font-size: calc(1em + 2vw);
    margin-bottom: 1rem 
    margin:0;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;
  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
`;

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      
      <Box>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        {/* <PowerButton /> */}
        <ParticleComponent theme="light" />
        <Main>
          <Title>
            <Develope width={40} height={40} />Digital Marketing
          </Title>
          <Description >A Digital Marketer creates and optimizes online campaigns to drive traffic, generate leads, and boost brand awareness.</Description>
          <Description>
            <strong>Skills</strong>
            <p>
            SEO (On-page, Off-page, Technical), Google & Social Media Ads, Content & Email Marketing, CRO, Web Analytics (GA4), Affiliate Marketing
            </p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>Google Ads, Facebook Ads Manager, Google Analytics, SEMrush, Ahrefs, Mailchimp, WordPress, Canva</p>
          </Description>
        </Main>

        <ParticleComponent theme="light" />
        <Main>
          <Title>
            <Develope width={40} height={40} />Web Development 
          </Title>
          <Description>
          A Web Developer designs, develops, and maintains websites and web applications for a seamless user experience.
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>HTML, CSS (Tailwind, Bootstrap), JavaScript (ES6+), React.js, Next.js, Vue.js, API Integration (REST & GraphQL), Git & GitHub, Responsive Design, UI/UX Fundamentals.</p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>VS Code, GitHub, npm, Webpack, Figma, Vercel, Netlify.</p>
          </Description>
        </Main>
        <BigTitle text="SKILLS" top="5%" right="30%" />
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;

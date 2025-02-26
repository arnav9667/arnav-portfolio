import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import { Design, Develope } from "./AllSvgs";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
// import PowerButton from '../subComponents/PowerButton';
import { FaLinkedinIn } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
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
  @media (max-width: 1300px) {
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
  line-height: 1.5;
  cursor: pointer;
  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
  @media (max-width: 30em) > :nth-child(5) {
    margin-bottom: 4rem;
  }
  @media (max-width: 50em) > :nth-child(5) {
    margin-bottom: 5rem;
  }
  @media (max-width: 60rem) {
    width: 50vw;
    height: 330px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 4rem;
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);
  @media (max-width: 50em) {
    grid-template-columns: 100%;
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
  @media (max-width: 1300px) {
    font-size: calc(1em + 2vw);
    margin-bottom: 1rem;
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
  li {
    ::marker {
      unicode-bidi: isolate;
      font-variant-numeric: tabular-nums;
      text-transform: none;
      text-indent: 0px !important;
      text-align: start !important;
      text-align-last: start !important;
    }
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
        <Grid>
          <Main>
            <Title>
              Glove Overseas Pvt Ltd (Jan) 2025 - Present
            </Title>
            <Description>
              • liftingmachines.in / A website for Globe Overseas Pvt Ltd, showcasing a variety of lifting machines and industrial equipment.
              <br />• Professional Role / I work at Globe Overseas Pvt Ltd and actively 
              contribute to improving the website, including refining its headings.
            </Description>
          </Main>
          <Main>
            <Title>Taaza News Factory (Freelancing) 2022 </Title>
            <Description>
              • taazanewsfactory.com / A news website designed to deliver the latest updates, articles, and trending stories across various categories.
              <br />• Freelancing Work / I developed this website to create a seamless and user-friendly platform for consuming news content efficiently.
            </Description>
          </Main>
        </Grid>
        <BigTitle text="Experience" top="4%" right="-1%" />
      </Box>
      <Box>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        {/* <PowerButton /> */}
        <ParticleComponent theme="light" />
        <Grid>
          <Main>
            <Title>Elephant Kitchen Strainers (Freelancing) 2024 </Title>
            <Description>
              • zupa.in / A website designed for Elephant Kitchen Strainers to showcase their high-quality kitchen strainers and related products.
              <br />• Freelancing Work / I worked as a freelancer 
              for Elephant Kitchen Strainers and developed this website to enhance their online presence and product visibility.
            </Description>
          </Main>
          <Main>
            <Title>ASADEEP FURNISHING PVT LTD 2022 - 2024 </Title>
            <Description>
              • asadeep.com / Showcases premium furnishing fabrics and home décor solutions.
              <br />• outdoorfabrics.co.in / Highlights outdoor textiles and durable fabrics.
              <br />• I developed these websites as a freelancer for Asadeep Furnishing Pvt Ltd.
            </Description>
          </Main>
        </Grid>
        <BigTitle text="Experience" top="4%" right="-1%" />
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;

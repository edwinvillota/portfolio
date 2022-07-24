import React from "react";
import {
  HeroSection,
  Grid,
  Title,
  Description,
  StyledHeroIlustration,
} from "./styles";
import { NavBar } from "../../components/NavBar";

export const Hero = () => (
  <HeroSection>
    <NavBar />
    <Grid>
      <Title>
        Hello, My name is Edwin Villota and I&apos;m Javascript Developer
      </Title>
      <StyledHeroIlustration />
      <Description>
        I am from Colombia, I am 28 years old and 5 years of experience
        programming with Javascript. I love software development and learn
        something new every day.
      </Description>
    </Grid>
  </HeroSection>
);

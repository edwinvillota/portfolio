import React from 'react'
import { HeroSection, Grid, Title, Description, StyledHeroIlustration } from './styles'
import { NavBar } from '../../components/NavBar'

export const Hero = () => (
  <HeroSection>
    <NavBar />
    <Grid>
      <Title>
        Hello, My name is Edwin Villota and I&apos;m a Javascript Developer
      </Title>
      <StyledHeroIlustration />
      <Description>
        I am from Colombia, I am 26 years old and 2 years of experience with web
        technologies. I love programming and learn something new every day.
      </Description>
    </Grid>
  </HeroSection>
)

import React from 'react'
import { Section, Title, Grid, Paragraph, StyledAboutIlustration } from './styles'
import { Fade } from '../../components/Fade'
export const AboutMe = () => {
  return (
    <Section>
      <Fade direction='up'>
        <Title>About Me</Title>
      </Fade>
      <Grid>
        <Fade>
          <Paragraph>
            I&apos; a passionate about technology and software development.
            I&apos; always looking for learn new skills. Working in software
            is my dream and live doing what i love, sounds perfect to me!.
          </Paragraph>
        </Fade>
        <StyledAboutIlustration/>
        <Fade>
          <Paragraph>
            On my free time, I like play video games, learn something new,
            listen music and wach videos on Youtube.
          </Paragraph>
        </Fade>
      </Grid>
    </Section>
  )
}

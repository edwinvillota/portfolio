import React from "react";
import {
  Section,
  Title,
  Grid,
  Paragraph,
  StyledAboutIlustration,
} from "./styles";
import { Fade } from "../../components/Fade";
export const AboutMe = () => {
  return (
    <Section>
      <Fade direction="up">
        <Title>About Me</Title>
      </Fade>
      <Grid>
        <Fade>
          <Paragraph>
            I&apos; a passionate about technology and software development.
            I&apos; always looking for learn new skills and technical
            challenges.
          </Paragraph>
        </Fade>
        <StyledAboutIlustration />
        <Fade>
          <Paragraph>
            I like play video games, watch series or movies and listen to music.
          </Paragraph>
        </Fade>
      </Grid>
    </Section>
  );
};

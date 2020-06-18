import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Theme } from './styles/Theme'
import { GlobalStyle } from './styles/GlobalStyle'
import { Hero } from './containers/Hero'
import { AboutMe } from './containers/AboutMe'
import { Education } from './containers/Education'
import { Projects } from './containers/Projects'
import { ContactMe } from './containers/ContactMe'

const App = () => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={Theme}>
      <Hero />
      <AboutMe />
      <Education />
      <Projects />
      <ContactMe />
    </ThemeProvider>
  </div>
)

export default App

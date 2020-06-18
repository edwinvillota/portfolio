import React from 'react'
import { Project } from '../Project'
import { Preview, DesktopView, MobileView, DesktopImg, MobileImg } from './styles'
import Desktop from '../../../public/media/fm-challenge-1-desktop.png'
import Mobile from '../../../public/media/fm-challenge-1-mobile.png'

export const FMC1Project = () => {
  return (
    <Project
      details={{ name: 'Frontend Mentor Challenge 1', description: 'A simple frontend challenge from frontend mentor.', skills: ['CSS3', 'CSS Grids', 'Responsive Design'] }}
      links={[
        { provider: 'Github', url: 'https://github.com/edwinvillota' },
        { provider: 'Vercel', url: 'https://vercel.com' }
      ]}
    >
      <Preview>
        <DesktopView>
          <DesktopImg src={Desktop} alt='Desktop'/>
        </DesktopView>
        <MobileView>
          <MobileImg src={Mobile} alt='Mobile' />
        </MobileView>
      </Preview>
    </Project>
  )
}

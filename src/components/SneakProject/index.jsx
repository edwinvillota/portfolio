import React from 'react'
import { Project } from '../Project'
import { Preview, DesktopView, MobileView, Img } from './styles'
import Desktop from '../../../public/media/Sneak_Desktop.png'
import Mobile from '../../../public/media/Sneak_mobile.png'

export const SneakProject = () => {
  return (
    <Project
      details={{ name: 'Sneak Landing Page', description: 'A landing page create for a technical test of frontend developer job.', skills: ['React', 'Vanilla Js', 'CSS Grids', 'Responsive Design'] }}
      links={[
        { provider: 'Github', url: 'https://github.com/edwinvillota/landing-page-2' },
        { provider: 'Vercel', url: 'https://landing-page-2.now.sh/' }
      ]}
    >
      <Preview>
        <DesktopView>
          <Img src={Desktop} alt='Desktop'/>
        </DesktopView>
        <MobileView>
          <Img src={Mobile} alt='Mobile'/>
        </MobileView>
      </Preview>
    </Project>
  )
}

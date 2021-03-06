import React from 'react'
import { Project } from '../Project'
import { Preview, Img } from './styles'
import { Fade } from '../Fade'
import Modules from '../../../public/media/Gea_modules.png'
import Roles from '../../../public/media/Gea_roles.png'

export const GeaProject = () => {
  return (
    <Project
      direction='right'
      details={{ name: 'GEA', description: 'A management platform to control operative processes.', skills: ['NodeJs', 'MySQL', 'React', 'Redux', 'API Rest', 'SSR'] }}
      links={[
        { provider: 'Github', url: 'https://github.com/edwinvillota/gea' }
      ]}
    >
      <Fade>
        <Preview>
          <Img src={Roles} alt='Roles'/>
          <Img src={Modules} alt='Modules'/>
        </Preview>
      </Fade>
    </Project>
  )
}

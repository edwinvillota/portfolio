import React from 'react'
import { Project } from '../Project'
import { Preview, Img } from './styles'
import Home from '../../../public/media/mecapp-2.png'
import Resume from '../../../public/media/mecapp-3.png'
import Node from '../../../public/media/mecapp-4.png'
import Form from '../../../public/media/mecapp-5.png'

export const DataCaptureProject = () => {
  return (
    <Project
      details={{ name: 'Data Capture App', description: 'An application to capture data of electric transformers.', skills: ['React-Native', 'Redux', 'SQLite'] }}
      links={[
        { provider: 'Github', url: 'https://github.com/edwinvillota/mecapp' }
      ]}
    >
      <Preview>
        <Img src={Home} alt='Home'/>
        <Img src={Resume} alt='Resume'/>
        <Img src={Node} alt='Node'/>
        <Img src={Form} alt='Form'/>
      </Preview>
    </Project>
  )
}

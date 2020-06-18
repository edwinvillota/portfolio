import React from 'react'
import { Project } from '../Project'
import { Preview, DashboardImg, BoxesImg, UpdateDBImg } from './styles'
import Dashboard from '../../../public/media/Pmp_dashboard.png'
import Boxes from '../../../public/media/Pmp_boxes.png'
import UpdateDB from '../../../public/media/Pmp_update_db.png'

export const PmpProject = () => {
  return (
    <Project
      details={{ name: 'Projects Application', description: 'A single page application for management of operative projects', skills: ['React', 'React', 'Nodejs', 'MongoDB'] }}
      links={[
        { provider: 'Github', url: 'https://github.com/edwinvillota/pmp' }
      ]}
    >
      <Preview>
        <DashboardImg src={Dashboard} alt='Dashboard'/>
        <BoxesImg src={Boxes} alt='Boxes'/>
        <UpdateDBImg src={UpdateDB} alt='UpdateDB'/>
      </Preview>
    </Project>
  )
}

import { FiGithub, FiTwitter, FiMail } from 'react-icons/fi'
import { FaLinkedinIn } from 'react-icons/fa'

export const education = {
  professional: [
    {
      title: 'Systems Engineer',
      institution: 'Universidad Nacional Abierta y a Distancia',
      country: 'Colombia',
      year: 'In Process'
    },
    {
      title: 'Systems Technology',
      institution: 'Servicio Nacional de Aprendizaje SENA',
      country: 'Colombia',
      year: '2014'
    }
  ],
  technology: [
    {
      title: 'Javascript Career',
      institution: 'Platzi',
      country: 'Colombia',
      year: '2020'
    },
    {
      title: 'Internet Of Things',
      institution: 'Universidad Tecnológica Nacional',
      country: 'Argentina',
      year: '2019'
    }
  ]
}

export const contact = [
  { Icon: FiGithub, provider: 'Github', url: 'https://github.com/edwinvillota' },
  { Icon: FiTwitter, provider: 'Twitter', url: 'https://twitter.com/edwinvillota43' },
  { Icon: FiMail, provider: 'Email', url: 'mailto:edwinvillota@hotmail.com' },
  { Icon: FaLinkedinIn, provider: 'LinkedIn', url: 'https://linkedin.com/in/edwinvillota43' }
]

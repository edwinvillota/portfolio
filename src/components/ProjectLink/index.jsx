import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { Link, Text } from './styles'

export const ProjectLink = ({ provider, url }) => (
  <Link href={url}>
    <Text> View on {provider} </Text>
    <IoIosArrowRoundForward size={25}/>
  </Link>
)

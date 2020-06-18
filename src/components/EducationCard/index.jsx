import React from 'react'
import { Container, Title, Institution, Details, Country, Year } from './styles'

export const EducationCard = ({ title, institution, country, year }) => (
  <Container>
    <Title>
      {title}
    </Title>
    <Institution>
      {institution}
    </Institution>
    <Details>
      <Country>
        {country}
        {' - '}
      </Country>
      <Year>
        {year}
      </Year>
    </Details>
  </Container>
)

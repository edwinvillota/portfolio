import React from 'react'
import { Container, Column, IconColumn, Title, Url } from './styles'

export const ContactCard = ({ Icon, provider, url }) => (
  <Container href={url}>
    <IconColumn>
      <Icon size={25}/>
    </IconColumn>
    <Column>
      <Title>
        {provider}
      </Title>
      <Url>
        {url}
      </Url>
    </Column>
  </Container>
)

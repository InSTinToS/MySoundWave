import { Container, PlayIcon } from './styles'

import React, { HTMLProps } from 'react'

interface Props extends HTMLProps<HTMLButtonElement> {}

const PlayButton = ({ className }: Props) => (
  <Container className={className}>
    <PlayIcon />
  </Container>
)

export default PlayButton

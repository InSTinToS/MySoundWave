import PlayButtonSVG from '../../../../public/play.svg'
import { Container } from './styles'

import React, { HTMLProps } from 'react'

interface Props extends HTMLProps<HTMLButtonElement> {}

const PlayButton = ({ className }: Props) => (
  <Container className={className}>
    <PlayButtonSVG />
  </Container>
)

export default PlayButton

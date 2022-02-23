import { CloseIcon, Container, Text } from './styles'
import Presence from '../Presence'

import transition from 'frontend/styles/transition'

import { Variants } from 'framer-motion'
import React, { SyntheticEvent, useState } from 'react'

interface Props {
  title: string
  fontSize?: number
  onCloseClick?: (event: SyntheticEvent) => void
}

const showCloseAnimation: Variants = {
  exit: { opacity: 0 },
  initial: { opacity: 0 },
  enter: { opacity: 1 }
}

const moveTextAnimation: Variants = {
  initial: { x: 0 },
  exit: { x: [40, 0] },
  enter: { x: [0, 40] }
}

const ToCloseButton = ({ title, fontSize = 16, onCloseClick }: Props) => {
  const [showClose, setShowClose] = useState(false)

  return (
    <Container
      onMouseEnter={() => setShowClose(true)}
      onMouseLeave={() => setShowClose(false)}
    >
      <Presence
        condition={showClose}
        transition={transition}
        variants={showCloseAnimation}
      >
        <button type='button' onClick={onCloseClick}>
          <CloseIcon />
        </button>
      </Presence>

      <Text
        initial='initial'
        fontSize={fontSize}
        showClose={showClose}
        transition={transition}
        variants={moveTextAnimation}
        animate={showClose ? 'enter' : 'exit'}
      >
        {title}
      </Text>
    </Container>
  )
}

export default ToCloseButton

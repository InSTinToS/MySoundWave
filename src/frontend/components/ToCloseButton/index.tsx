import { CloseIcon, Container, Text } from './styles'
import Presence from '../Presence'

import transition from 'frontend/styles/transition'

import { Variants } from 'framer-motion'
import React, { useState } from 'react'

interface Props {
  name: string
  fontSize?: number
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

const ToCloseButton = ({ name, fontSize = 16 }: Props) => {
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
        <CloseIcon />
      </Presence>

      <Text
        initial='initial'
        fontSize={fontSize}
        showClose={showClose}
        transition={transition}
        variants={moveTextAnimation}
        animate={showClose ? 'enter' : 'exit'}
      >
        {name}
      </Text>
    </Container>
  )
}

export default ToCloseButton

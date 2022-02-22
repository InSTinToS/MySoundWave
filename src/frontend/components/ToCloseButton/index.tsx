import { CloseIcon, CloseWrapper, Container, Text } from './styles'
import Presence from '../Presence'

import { Transition, Variants } from 'framer-motion'
import React, { useState } from 'react'

interface Props {
  name: string
}

const transition: Transition = {
  duration: 0.3,
  type: 'tween'
}

const showCloseAnimation: Variants = {
  initial: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 }
}

const moveTextAnimation: Variants = {
  initial: { x: 0 },
  exit: { x: [40, 0] },
  enter: { x: [0, 40] }
}

const ToCloseButton = ({ name }: Props) => {
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
        <CloseWrapper>
          <CloseIcon />
        </CloseWrapper>
      </Presence>

      <Text
        initial='initial'
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

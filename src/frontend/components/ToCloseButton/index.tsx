import { Children, CloseIcon, Container } from './styles'
import Presence from '../Presence'

import transition from 'frontend/styles/transition'

import { Variants } from 'framer-motion'
import React, { HTMLProps, SyntheticEvent, useState } from 'react'

interface Props extends HTMLProps<HTMLDivElement> {
  onCloseClick?: (event: SyntheticEvent) => void
}

const showCloseAnimation: Variants = {
  exit: { opacity: 0 },
  enter: { opacity: 1 },
  initial: { opacity: 0 }
}

const moveChildrenAnimation: Variants = {
  initial: { x: 0 },
  exit: { x: [40, 0] },
  enter: { x: [0, 40] }
}

const ToCloseButton = ({ children, className, onCloseClick }: Props) => {
  const [showClose, setShowClose] = useState(false)

  return (
    <Container
      className={className}
      onMouseEnter={() => setShowClose(true)}
      onMouseLeave={() => setShowClose(false)}
    >
      <Presence
        role='button'
        condition={showClose}
        onClick={onCloseClick}
        transition={transition}
        variants={showCloseAnimation}
      >
        <CloseIcon />
      </Presence>

      <Children
        initial='initial'
        isShowing={showClose}
        transition={transition}
        variants={moveChildrenAnimation}
        animate={showClose ? 'enter' : 'exit'}
      >
        {children}
      </Children>
    </Container>
  )
}

export default ToCloseButton

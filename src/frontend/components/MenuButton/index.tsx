import { Container, PlayIcon } from './styles'

import transition from 'frontend/styles/transition'

import { motion, Variants } from 'framer-motion'
import React, { HTMLProps } from 'react'

interface Props extends HTMLProps<HTMLButtonElement> {
  to: number
  from: number
  condition: boolean
}

const MenuButton = ({ from, condition, to, type, ...props }: Props) => {
  const menuButtonAnimation: Variants = {
    to: { rotate: to },
    from: { rotate: from }
  }

  return (
    <Container type='button' {...(props as any)}>
      <motion.div
        initial='from'
        transition={transition}
        variants={menuButtonAnimation}
        animate={condition ? 'to' : 'from'}
      >
        <PlayIcon from={from} />
      </motion.div>
    </Container>
  )
}

export default MenuButton

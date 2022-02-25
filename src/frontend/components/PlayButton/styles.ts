import OriginalPlayIcon from '../../../../public/play.svg'
import OriginalPauseIcon from '../../../../public/pause.svg'

import { motion } from 'framer-motion'
import styled from 'styled-components'

export const PauseIcon = styled(OriginalPauseIcon as any)`
  height: 26px;

  fill: ${({ theme }) => theme.colors.primary};
`

export const PlayIcon = styled(OriginalPlayIcon as any)`
  height: 26px;

  fill: ${({ theme }) => theme.colors.primary};
`

export const Container = styled(motion.button)``

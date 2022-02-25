import OriginalCloseIcon from '../../../../public/close.svg'

import { motion } from 'framer-motion'
import styled from 'styled-components'

interface ChildrenProps {
  isShowing: boolean
}

export const CloseIcon = styled(OriginalCloseIcon as any)`
  position: absolute;
  top: 50%;
  left: 0;

  width: 24px;
  margin-top: 4px;
  transform: translateY(-50%);

  fill: ${({ theme }) => theme.colors.primary};
`

export const Children = styled(motion.div)<ChildrenProps>`
  height: 100%;
  transition: width 0.3s ease-in-out;
  width: ${({ isShowing }) => (isShowing ? 'calc(100% - 40px)' : '100%')};
`

export const Container = styled.div`
  position: relative;

  display: flex;
  align-items: center;
`

import OriginalCloseIcon from '../../../../public/close.svg'

import { motion } from 'framer-motion'
import styled from 'styled-components'

interface TextProps {
  showClose: boolean
  fontSize: number
}

export const CloseIcon = styled(OriginalCloseIcon as any)`
  position: absolute;
  top: 50%;
  left: 0;

  width: 32px;
  height: 32px;
  margin-top: 4px;
  transform: translateY(-50%);
`

export const Text = styled(motion.div)<TextProps>`
  transition: width 0.2s ease-in-out;
  width: calc(100% - 40px);

  font-weight: 500;
  font-size: ${({ fontSize }) => fontSize}px;
  color: ${({ theme }) => theme.colors.quaternary};
`

export const Container = styled.div`
  position: relative;

  display: flex;
  align-items: center;
`

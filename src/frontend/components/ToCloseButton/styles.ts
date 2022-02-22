import OriginalCloseIcon from '../../../../public/close.svg'

import { motion } from 'framer-motion'
import styled from 'styled-components'

interface TextProps {
  showClose: boolean
}

export const CloseWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);

  max-width: 24px;
  max-height: 24px;
`

export const CloseIcon = styled(OriginalCloseIcon as any)`
  width: 100%;
  height: 100%;
`

export const Text = styled(motion.div)<TextProps>`
  font-size: 18px;
  font-weight: 500;
  transition: width 0.3s ease-in-out;
  width: ${({ showClose }) => (showClose ? 'calc(100% - 56px)' : '100%')};
`

export const Container = styled.div`
  position: relative;

  display: flex;
  align-items: center;
`

import OriginalPlayIcon from '../../../../public/play.svg'

import styled from 'styled-components'

export const PlayIcon = styled(OriginalPlayIcon)`
  fill: ${({ theme }) => theme.colors.tertiary};
`

export const Container = styled.button`
  height: 42px;
  width: 35px;
`

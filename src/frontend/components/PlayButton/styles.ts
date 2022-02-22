import OriginalPlayIcon from '../../../../public/play.svg'

import styled from 'styled-components'

export const PlayIcon = styled(OriginalPlayIcon)`
  transform: rotate(0deg);

  fill: ${({ theme }) => theme.colors.primary};
`

export const Container = styled.button``

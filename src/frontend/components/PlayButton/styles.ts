import OriginalPlayIcon from '../../../../public/play.svg'
import OriginalPauseIcon from '../../../../public/pause.svg'

import styled from 'styled-components'

export const PauseIcon = styled(OriginalPauseIcon)``

export const PlayIcon = styled(OriginalPlayIcon)`
  transform: rotate(0deg);

  fill: ${({ theme }) => theme.colors.primary};
`

export const Container = styled.button``

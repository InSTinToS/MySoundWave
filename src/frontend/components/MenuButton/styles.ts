import OriginalPlayIcon from '../../../../public/play.svg'

import styled from 'styled-components'

export const PlayIcon = styled(OriginalPlayIcon as any)`
  height: 26px;

  fill: ${({ theme }) => theme.colors.tertiary};
`

export const Container = styled.button``

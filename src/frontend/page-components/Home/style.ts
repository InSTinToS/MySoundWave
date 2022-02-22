import OriginalBackgroundLogo from '../../../../public/backgroundLogo.svg'
import OriginalPlayButton from '../../components/PlayButton'

import styled from 'styled-components'

export const PlayButton = styled(OriginalPlayButton)`
  position: absolute;
  right: 48px;
  bottom: 48px;
`

export const BackgroundLogo = styled(OriginalBackgroundLogo)`
  width: min(40%, 517px);
`

export const Container = styled.main`
  width: 100vw;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.secondary};

  section {
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
  }
`

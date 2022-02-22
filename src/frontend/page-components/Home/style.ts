import OriginalBackgroundLogo from '../../../../public/backgroundLogo.svg'
import OriginalPlayButton from '../../components/PlayButton'
import OriginalUploadIcon from '../../../../public/upload.svg'

import OriginalMenuButton from 'frontend/components/MenuButton'

import styled from 'styled-components'

interface ContainerProps {
  sidebarIsOpen: boolean
}

export const MenuButton = styled(OriginalMenuButton)`
  position: absolute;
  right: 24px;
  bottom: 24px;
`

export const UploadIcon = styled(OriginalUploadIcon as any)`
  height: 44px;
`

export const Footer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 24px;
  background-color: ${({ theme }) => theme.colors.secondary};
`

export const PlayButton = styled(OriginalPlayButton)`
  position: absolute;
  z-index: 1;
  bottom: 24px;

  width: 35px;
  height: 42px;

  transition: all 0.3s ease-in-out;
`

export const BackgroundLogo = styled(OriginalBackgroundLogo as any)`
  width: min(40%, 517px);
`

export const Container = styled.main<ContainerProps>`
  width: 100vw;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.secondary};

  section {
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 100vh;
    width: ${({ sidebarIsOpen }) =>
      sidebarIsOpen ? 'calc(100vw - 400px)' : '100vw'};

    transition: width 0.3s ease-in-out;
  }

  ${PlayButton} {
    right: ${({ sidebarIsOpen }) => (sidebarIsOpen ? 24 : 95)}px;
  }
`

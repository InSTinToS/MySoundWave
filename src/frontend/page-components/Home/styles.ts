import OriginalBackgroundLogo from '../../../../public/backgroundLogo.svg'
import OriginalPlayButton from '../../components/PlayButton'

import OriginalMenuButton from 'frontend/components/MenuButton'

import { motion } from 'framer-motion'
import YouTube from 'react-youtube'
import styled from 'styled-components'

interface SidebarIsOpenProp {
  sidebarIsOpen: boolean
}

export const MenuButton = styled(OriginalMenuButton)``

export const PlayButton = styled(OriginalPlayButton)<SidebarIsOpenProp>`
  margin-right: 24px;
`

export const BackgroundLogo = styled(OriginalBackgroundLogo as any)`
  width: min(40%, 517px);
`

export const YoutubeVideo = styled(YouTube)`
  display: none;
`

export const Footer = styled(motion.footer)`
  position: absolute;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 95px;
  padding: 0 24px;
`

export const Container = styled.main<SidebarIsOpenProp>`
  width: 100vw;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.secondary};

  section {
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 100vh;
    transition: width 0.3s ease-in-out;
    width: ${({ sidebarIsOpen }) =>
      sidebarIsOpen ? 'calc(100vw - 400px)' : '100vw'};
  }
`

import OriginalBackgroundLogo from '../../../../public/backgroundLogo.svg'
import OriginalSoundIcon from '../../../../public/sound.svg'
import OriginalPlayButton from '../../components/PlayButton'

import OriginalMenuButton from 'frontend/components/MenuButton'

import { motion } from 'framer-motion'
import YouTube from 'react-youtube'
import styled from 'styled-components'

interface SidebarIsOpenProp {
  sidebarIsOpen: boolean
}

export const RangeWrapper = styled.div`
  position: absolute;
  left: 0px;

  display: flex;
  align-items: center;

  width: 100px;
  height: 30px;
  transform: rotate(-90deg) translate(calc(15px - 50%), calc(-50px + 50%));
`

export const SoundIcon = styled(OriginalSoundIcon as any)`
  position: absolute;
  bottom: 0px;

  height: 26px;
  margin-right: 24px;

  fill: ${({ theme }) => theme.colors.primary};
`

export const SoundControl = styled(motion.div)`
  position: absolute;

  bottom: 0px;
  width: 100%;
  height: 100%;
`

export const SoundWrapper = styled.div`
  position: relative;

  width: 30px;
  height: 30px;
`

export const BackgroundLogo = styled(OriginalBackgroundLogo as any)`
  width: min(40%, 517px);

  fill: ${({ theme }) => theme.colors.primary};
`

export const YoutubeVideo = styled(YouTube)`
  display: none;
`

export const MenuButton = styled(OriginalMenuButton)`
  margin: 0 24px;
`

export const PlayButton = styled(OriginalPlayButton)<SidebarIsOpenProp>`
  margin-right: 24px;
`

export const Footer = styled(motion.footer)`
  position: absolute;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 95px;

  > div {
    display: flex;

    margin-left: 24px;
  }
`

export const Container = styled.main<SidebarIsOpenProp>`
  position: relative;

  width: 100vw;
  height: 100vh;
  overflow: hidden;

  color: ${({ theme }) => theme.colors.quaternary};
  background-color: ${({ theme }) => theme.colors.secondary};

  section {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100vh;
    transition: width 0.3s ease-in-out;
    width: ${({ sidebarIsOpen }) =>
      sidebarIsOpen ? 'calc(100% - 400px)' : '100%'};
  }
`

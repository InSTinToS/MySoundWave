import { Container, PauseIcon, PlayIcon } from './styles'

import { IMyYoutube } from 'frontend/page-components/Home'

import React, { HTMLProps } from 'react'
import PlayerStates from 'youtube-player/dist/constants/PlayerStates'

interface Props extends HTMLProps<HTMLButtonElement> {
  video?: IMyYoutube
}

const PlayButton = ({ className, onClick, video }: Props) => (
  <Container className={className} onClick={onClick}>
    {video?.state !== PlayerStates.PLAYING && (
      <PlayIcon
        onClick={() => {
          video.target.playVideo()
        }}
      />
    )}

    {video?.state === PlayerStates.PLAYING && (
      <PauseIcon
        onClick={() => {
          video.target.pauseVideo()
        }}
      />
    )}
  </Container>
)

export default PlayButton

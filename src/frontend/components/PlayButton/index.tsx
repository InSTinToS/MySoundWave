import { Container, PauseIcon, PlayIcon } from './styles'

import React, { HTMLProps } from 'react'
import PlayerStates from 'youtube-player/dist/constants/PlayerStates'
import { YouTubePlayer } from 'youtube-player/dist/types'

export interface IMyYoutube {
  state: number
  target: YouTubePlayer
}

interface Props extends HTMLProps<HTMLButtonElement> {
  video?: IMyYoutube
}

const PlayButton = ({ className, onClick, video }: Props) => {
  return (
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
}
export default PlayButton

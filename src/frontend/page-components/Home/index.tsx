import Head from 'next/head'

import {
  BackgroundLogo,
  Container,
  Footer,
  MenuButton,
  PlayButton,
  RangeWrapper,
  SoundControl,
  SoundIcon,
  SoundWrapper,
  YoutubeVideo
} from './styles'

import transition from 'frontend/styles/transition'

import Sidebar, { RefProps as SidebarRefProps } from 'frontend/components/Sidebar'
import Presence from 'frontend/components/Presence'

import { Variants } from 'framer-motion'
import { ChangeEvent, FC, ReactNode, useEffect, useRef, useState } from 'react'
import { Form } from 'react-bootstrap'
import { Options } from 'react-youtube'
import { YouTubePlayer } from 'youtube-player/dist/types'

const youtubeOptions: Options = {
  playerVars: {
    rel: 0,
    loop: 1,
    showinfo: 0,
    autoplay: 1,
    controls: 0,
    enablejsapi: 1,
    modestbranding: 1,
    iv_load_policy: 3
  }
}

const footerAnimation: Variants = {
  open: { width: 400 },
  closed: { width: 'auto' }
}

const soundControlAnimation: Variants = {
  initial: { opacity: 0, y: -75 },
  enter: { opacity: 1, y: -108 },
  exit: { opacity: 0, y: -75 }
}

export interface IMyYoutube {
  state: number
  target: YouTubePlayer
}

interface IVolumeConfig {
  volume: number
  hovering: boolean
}

const Home = (): ReactNode => {
  const sidebarRef = useRef<SidebarRefProps>(null)

  const [videoId, setVideoId] = useState('')
  const [video, setVideo] = useState<IMyYoutube>()
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
  const [volumeConfig, setVolumeConfig] = useState<IVolumeConfig>({
    hovering: false,
    volume: 70
  })

  const onYoutubeReady = ({ target }: { target: YouTubePlayer }) => {
    setVideo({ target, state: -1 })
    target.setVolume(70)
  }

  const onYoutubeChangeState = ({ data }) => {
    setVideo(prev => ({ target: prev.target, state: data }))
  }

  const onYoutubeEnd = () => {
    sidebarRef.current?.playNextVideo()
  }

  const onVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newSoundValue = Number(e.target.value)

    video.target.setVolume(newSoundValue)

    setVolumeConfig(prev => ({
      ...prev,
      volume: newSoundValue
    }))
  }

  return (
    <>
      <Head>
        <title>My Sound Wave</title>
      </Head>

      <Container sidebarIsOpen={sidebarIsOpen}>
        <section>
          <BackgroundLogo />

          <YoutubeVideo
            videoId={videoId}
            onEnd={onYoutubeEnd}
            opts={youtubeOptions}
            onReady={onYoutubeReady}
            onStateChange={onYoutubeChangeState}
          />
        </section>

        <Sidebar
          ref={sidebarRef}
          open={sidebarIsOpen}
          setPlayingVideoId={setVideoId}
        />

        <Footer
          initial='closed'
          transition={transition}
          variants={footerAnimation}
          animate={sidebarIsOpen ? 'open' : 'closed'}
        >
          <div>
            <PlayButton video={video} sidebarIsOpen={sidebarIsOpen} />

            <SoundWrapper>
              <SoundControl
                onMouseEnter={() => {
                  setVolumeConfig(prev => ({
                    ...prev,
                    hovering: true
                  }))
                }}
                onMouseLeave={() =>
                  setVolumeConfig(prev => ({ ...prev, hovering: false }))
                }
              >
                <Presence
                  transition={transition}
                  variants={soundControlAnimation}
                  condition={volumeConfig.hovering}
                >
                  <RangeWrapper>
                    <Form.Range
                      value={volumeConfig.volume}
                      onChange={onVolumeChange}
                    />
                  </RangeWrapper>
                </Presence>

                <SoundIcon />
              </SoundControl>
            </SoundWrapper>
          </div>

          <MenuButton
            to={0}
            from={-180}
            condition={sidebarIsOpen}
            onClick={() => setSidebarIsOpen(prev => !prev)}
          />
        </Footer>
      </Container>
    </>
  )
}

export default Home

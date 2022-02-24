import Head from 'next/head'

import {
  BackgroundLogo,
  Container,
  Footer,
  MenuButton,
  PlayButton,
  YoutubeVideo
} from './styles'

import transition from 'frontend/styles/transition'

import Sidebar, { RefProps as SidebarRefProps } from 'frontend/components/Sidebar'

import { Variants } from 'framer-motion'
import { useRef, useState } from 'react'
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
  closed: { width: 126 }
}

const Home = () => {
  const sidebarRef = useRef<SidebarRefProps>(null)

  const [videoId, setVideoId] = useState('')
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
  const [video, setVideo] = useState<{ target: YouTubePlayer; state: number }>()

  const onYoutubeReady = ({ target }) => {
    setVideo({ target, state: -1 })
  }

  const onYoutubeChangeState = ({ data }) => {
    setVideo(prev => ({ target: prev.target, state: data }))
  }

  const onYoutubeEnd = () => {
    sidebarRef.current?.playNextVideo()
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
          <PlayButton video={video} sidebarIsOpen={sidebarIsOpen} />

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

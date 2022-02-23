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

import youtube from 'frontend/services/youtube'

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
  closed: { width: 'auto' }
}

const Home = () => {
  const sidebarRef = useRef<SidebarRefProps>(null)

  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
  const [videoId, setVideoId] = useState('')

  const [video, setVideo] = useState<{ target: YouTubePlayer; state: number }>()

  const findVideoBySearch = async (search: string) => {
    const res = await youtube('/search', {
      params: { part: 'snippet', q: search, autoPlay: 1 }
    })

    const { id, snippet } = res.data.items.find(
      (item: any) => item.id.kind === 'youtube#video'
    )

    console.log(
      res.data.items.find((item: any) => item.id.kind === 'youtube#video')
    )

    return {
      id: id.videoId,
      title: snippet.title,
      channelTitle: snippet.channelTitle
    }
  }

  const onYoutubeChangeState = ({ target, data }) => {
    setVideo({ target, state: data })
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
            opts={youtubeOptions}
            onStateChange={onYoutubeChangeState}
            onEnd={() => {
              const nextVideoId = sidebarRef.current.getNextVideoId()
              nextVideoId && setVideoId(nextVideoId)
            }}
          />
        </section>

        <Sidebar open={sidebarIsOpen} search={findVideoBySearch} />

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

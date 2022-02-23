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

import Sidebar from 'frontend/components/Sidebar'

import { Variants } from 'framer-motion'
import { useState } from 'react'
import { Options } from 'react-youtube'
import { v4 as uuid } from 'uuid'
import { YouTubePlayer } from 'youtube-player/dist/types'

const fakeSidebarItems = [
  {
    id: uuid(),
    name: 'Hallasen & Ludwiig - eoh ft. Julia Hallåsen'
  },
  {
    id: uuid(),
    name: 'Hallasen & Ludwiig - eoh ft. Julia Hallåsen'
  },
  {
    id: uuid(),
    name: 'Hallasen & Ludwiig - eoh ft. Julia Hallåsen'
  },
  {
    id: uuid(),
    name: 'Hallasen & Ludwiig - eoh ft. Julia Hallåsen'
  },
  {
    id: uuid(),
    name: 'Hallasen & Ludwiig - eoh ft. Julia Hallåsen'
  }
]

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
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
  const [videoId, setVideoId] = useState('')

  const [video, setVideo] = useState<{ target: YouTubePlayer; state: number }>()

  const findVideoBySearch = async (search: string) => {
    const res = await youtube('/search', {
      params: { part: 'snippet', q: search, autoPlay: 1 }
    })

    const videoId = res.data.items.find(
      (item: any) => item.id.kind === 'youtube#video'
    ).id.videoId

    setVideoId(videoId)
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
          />
        </section>

        <Sidebar
          open={sidebarIsOpen}
          items={fakeSidebarItems}
          search={findVideoBySearch}
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

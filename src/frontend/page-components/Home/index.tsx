import Head from 'next/head'

import {
  BackgroundLogo,
  Container,
  MenuButton,
  PlayButton,
  YoutubeVideo
} from './style'

import Sidebar from 'frontend/components/Sidebar'

import { useEffect, useState } from 'react'
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

const Home = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
  const [videoId, setVideoId] = useState('')

  const [video, setVideo] = useState<{ target: YouTubePlayer; state: number }>()

  useEffect(() => {
    ;(async () => {
      // const res = await youtube('/search', {
      //   params: { part: 'snippet', q: 'future house', autoPlay: 1 }
      // })

      // const videoId = res.data.items[1].id.videoId

      setVideoId(`u4Yf9Ia1e6Q`)
    })()
  }, [])

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

          <PlayButton video={video} />

          <div>test</div>

          <YoutubeVideo
            videoId={videoId}
            opts={youtubeOptions}
            onStateChange={onYoutubeChangeState}
          />
        </section>

        <Sidebar open={sidebarIsOpen} />

        <MenuButton
          to={0}
          from={-180}
          condition={sidebarIsOpen}
          onClick={() => setSidebarIsOpen(prev => !prev)}
        />
      </Container>
    </>
  )
}

export default Home

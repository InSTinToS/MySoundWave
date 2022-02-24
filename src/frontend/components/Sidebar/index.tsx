import {
  Container,
  Content,
  DragIcon,
  Header,
  Playlist,
  PlaylistItem,
  Search,
  ToCloseButton,
  UploadIcon,
  VideoTitle
} from './styles'

import transition from 'frontend/styles/transition'

import youtube from 'frontend/services/youtube'

import { Variants } from 'framer-motion'
import React, {
  Dispatch,
  HTMLProps,
  SetStateAction,
  SyntheticEvent,
  useImperativeHandle,
  useState
} from 'react'
import { v4 } from 'uuid'

interface IVideo {
  id: string
  title: string
  videoId: string
  channelTitle: string
}

export interface RefProps {
  playNextVideo: () => void
  playPreviousVideo: () => void
}

interface Props extends HTMLProps<HTMLDivElement> {
  open: boolean
  setPlayingVideoId: Dispatch<SetStateAction<IVideo['id']>>
}

const showSidebarAnimation: Variants = {
  initial: { x: 400, opacity: 0 },
  enter: { x: 0, opacity: 1 },
  exit: { x: 400, opacity: 0 }
}

const Sidebar = React.forwardRef<RefProps, Props>(
  ({ className, open, setPlayingVideoId }, ref) => {
    const [playingIndex, setPlayingIndex] = useState(0)
    const [videos, setVideos] = useState<IVideo[]>([
      {
        channelTitle: '1asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdas',
        videoId: '1',
        title: '1asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdas',
        id: v4()
      },
      {
        channelTitle: '2',
        videoId: '2',
        title:
          'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        id: v4()
      },
      { channelTitle: '2', videoId: '2', title: '2', id: v4() },
      { channelTitle: '2', videoId: '2', title: '2', id: v4() },
      { channelTitle: '2', videoId: '2', title: '2', id: v4() },
      { channelTitle: '2', videoId: '2', title: '2', id: v4() },
      { channelTitle: '2', videoId: '2', title: '2', id: v4() },
      { channelTitle: '2', videoId: '2', title: '2', id: v4() },
      { channelTitle: '2', videoId: '2', title: '2', id: v4() },
      { channelTitle: '2', videoId: '2', title: '2', id: v4() },
      { channelTitle: '2', videoId: '2', title: '2', id: v4() },
      { channelTitle: '3', videoId: '3', title: '3', id: v4() }
    ])

    const removeVideo = (index: number) => {
      const newVideos = videos.map(t => t)
      newVideos.splice(index, 1)

      setVideos(newVideos)
    }

    const searchVideo = async (query: string): Promise<IVideo> => {
      const res = await youtube('/search', {
        params: { part: 'snippet', q: query, autoPlay: 1 }
      })

      const { id, snippet } = res.data.items.find(
        (item: any) => item.id.kind === 'youtube#video'
      )

      return {
        id: v4(),
        videoId: id.videoId,
        title: snippet.title,
        channelTitle: snippet.channelTitle
      }
    }

    const onSearchSubmit = async (event: SyntheticEvent): Promise<void> => {
      event.preventDefault()

      const { value } = event.target[0]
      const newVideo = await searchVideo(value)

      if (videos.length === 0) {
        setPlayingVideoId(newVideo.videoId)
        setVideos([newVideo])
      } else setVideos(prev => [...prev, newVideo])
    }

    const playNextVideo = () => {
      const nextVideoId = videos[playingIndex + 1]?.videoId

      if (nextVideoId) {
        setPlayingIndex(prev => prev + 1)
        setPlayingVideoId(nextVideoId)
      }
    }

    const playPreviousVideo = () => {
      const previousVideoId = videos[playingIndex - 1]?.id

      if (previousVideoId) {
        setPlayingIndex(prev => prev - 1)
        setPlayingVideoId(previousVideoId)
      }
    }

    useImperativeHandle(ref, () => ({ playNextVideo, playPreviousVideo }))

    return (
      <Container className={className}>
        <Content
          condition={open}
          transition={transition}
          variants={showSidebarAnimation}
        >
          {videos.length > 0 && (
            <>
              <Header>
                <ToCloseButton onCloseClick={() => removeVideo(playingIndex)}>
                  <VideoTitle>{videos[playingIndex].title}</VideoTitle>
                </ToCloseButton>

                <input type='range' />
              </Header>

              <Playlist
                axis='y'
                layoutScroll
                values={videos}
                onReorder={setVideos}
              >
                {videos.map((video, index) => (
                  <PlaylistItem
                    value={video}
                    key={video.id}
                    isPlaying={playingIndex === index}
                  >
                    <ToCloseButton onCloseClick={() => removeVideo(index)}>
                      <VideoTitle>
                        <span>{video.title}</span>
                      </VideoTitle>
                    </ToCloseButton>

                    <DragIcon />
                  </PlaylistItem>
                ))}
              </Playlist>
            </>
          )}

          <Search
            autoComplete='off'
            onSubmit={onSearchSubmit}
            hasVideos={videos.length > 0}
          >
            <input
              type='text'
              name='search'
              placeholder='Pesquisar no youtube'
            />

            <button>
              <UploadIcon />
            </button>
          </Search>
        </Content>
      </Container>
    )
  }
)

export default Sidebar

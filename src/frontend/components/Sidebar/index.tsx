import ToCloseButton from '../ToCloseButton'
import {
  Container,
  Content,
  DragIcon,
  Header,
  Playlist,
  PlaylistItem,
  Search,
  UploadIcon
} from './styles'

import transition from 'frontend/styles/transition'

import { Variants } from 'framer-motion'
import React, {
  HTMLProps,
  SyntheticEvent,
  useImperativeHandle,
  useState
} from 'react'

interface IVideo {
  id: string
  title: string
  channelTitle: string
}

export interface RefProps {
  getNextVideoId: () => string
}

interface Props extends HTMLProps<HTMLDivElement> {
  open: boolean
  search: (valueToSearch: string) => Promise<IVideo>
}

const showSidebarAnimation: Variants = {
  initial: { x: 400, opacity: 0 },
  enter: { x: 0, opacity: 1 },
  exit: { x: 400, opacity: 0 }
}

const Sidebar = React.forwardRef<RefProps, Props>(
  ({ className, open, search }, ref) => {
    const [items, setItems] = useState<IVideo[]>([])

    const getNextVideoId = () => {
      let nextVideoId: string

      setItems(prev => {
        const newItems = prev
        newItems.shift()

        nextVideoId = newItems[0].id

        return newItems
      })

      return nextVideoId
    }

    useImperativeHandle(ref, () => ({ getNextVideoId }))

    const onSearchSubmit = async (event: SyntheticEvent) => {
      event.preventDefault()
      const { value } = event.target[0]
      const newVideo = await search(value)

      setItems(prev => [...prev, newVideo])
    }

    return (
      <Container className={className}>
        <Content
          condition={open}
          transition={transition}
          variants={showSidebarAnimation}
        >
          {items.length > 0 && (
            <>
              <Header>
                <ToCloseButton title={items[0].title} fontSize={19} />

                <input type='range' />
              </Header>

              <Playlist axis='y' values={items} onReorder={setItems}>
                {items.map(item => (
                  <PlaylistItem key={item.id} value={item}>
                    <ToCloseButton
                      title={item.title}
                      onCloseClick={() => {
                        setItems(prev =>
                          prev.filter(prevItem => prevItem.id !== item.id)
                        )
                      }}
                    />
                    <DragIcon />
                  </PlaylistItem>
                ))}
              </Playlist>
            </>
          )}

          <Search onSubmit={onSearchSubmit} autoComplete='off'>
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

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
import React, { HTMLProps, SyntheticEvent } from 'react'

interface Props extends HTMLProps<HTMLDivElement> {
  open: boolean
  items: { name: string; id: string }[]
  search: (valueToSearch: string) => Promise<void>
}

const showSidebarAnimation: Variants = {
  initial: { x: 400, opacity: 0 },
  enter: { x: 0, opacity: 1 },
  exit: { x: 400, opacity: 0 }
}

const Sidebar = ({ className, open, search, items }: Props) => {
  const onSearchSubmit = (event: SyntheticEvent) => {
    event.preventDefault()
    const { value } = event.target[0]
    search(value)
  }

  return (
    <Container className={className}>
      <Content
        condition={open}
        transition={transition}
        variants={showSidebarAnimation}
      >
        <Header>
          <ToCloseButton name={items[0].name} fontSize={19} />

          <input type='range' />
        </Header>

        <Playlist>
          {items.map(({ name, id }) => (
            <PlaylistItem key={id}>
              <ToCloseButton name={name} />
              <DragIcon />
            </PlaylistItem>
          ))}
        </Playlist>

        <Search onSubmit={onSearchSubmit}>
          <input name='search' type='text' placeholder='Pesquisar no youtube' />

          <button>
            <UploadIcon />
          </button>
        </Search>
      </Content>
    </Container>
  )
}

export default Sidebar

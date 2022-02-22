import {
  Container,
  Content,
  DragIcon,
  Footer,
  Header,
  Playlist,
  PlaylistItem,
  UploadIcon
} from './styles'
import ToCloseButton from '../ToCloseButton'
import Presence from '../Presence'

import transition from 'frontend/styles/transition'

import { Variants } from 'framer-motion'
import React, { HTMLProps } from 'react'
import { v4 as uuid } from 'uuid'

interface Props extends HTMLProps<HTMLDivElement> {
  open: boolean
}

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

const showSidebarAnimation: Variants = {
  initial: { x: 400, opacity: 0 },
  enter: { x: 0, opacity: 1 },
  exit: { x: 400, opacity: 0 }
}

const Sidebar = ({ className, open }: Props) => {
  return (
    <Container className={className}>
      <Presence
        condition={open}
        transition={transition}
        variants={showSidebarAnimation}
      >
        <Content>
          <Header>
            <ToCloseButton name={fakeSidebarItems[0].name} fontSize={19} />

            <input type='range' />
          </Header>

          <Playlist>
            {fakeSidebarItems.map(({ name, id }) => (
              <PlaylistItem key={id}>
                <ToCloseButton name={name} />

                <DragIcon />
              </PlaylistItem>
            ))}
          </Playlist>
        </Content>
      </Presence>

      <Footer isOpen={open}>
        <Presence
          condition={open}
          transition={transition}
          variants={showSidebarAnimation}
        >
          <UploadIcon />
        </Presence>
      </Footer>
    </Container>
  )
}

export default Sidebar

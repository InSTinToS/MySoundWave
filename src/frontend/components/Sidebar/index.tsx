import { Container, DragIcon, Header, Playlist, PlaylistItem } from './styles'
import ToCloseButton from '../ToCloseButton'

import React, { HTMLProps } from 'react'
import { v4 as uuid } from 'uuid'

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

interface Props extends HTMLProps<HTMLDivElement> {}

const Sidebar = ({ className }: Props) => {
  return (
    <Container className={className}>
      <Header></Header>

      <Playlist>
        {fakeSidebarItems.map(({ name, id }) => (
          <PlaylistItem key={id}>
            <ToCloseButton name={name} />

            <DragIcon />
          </PlaylistItem>
        ))}
      </Playlist>
    </Container>
  )
}

export default Sidebar

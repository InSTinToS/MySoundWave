import OriginalDragIcon from '../../../../public/drag.svg'

import styled from 'styled-components'

export const DragIcon = styled(OriginalDragIcon as any)``

export const Header = styled.div``

export const Playlist = styled.ul`
  li + li {
    margin-top: 8px;
  }
`

export const PlaylistItem = styled.li`
  display: flex;
  align-items: center;
`

export const Container = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;

  width: 400px;
  padding: 24px;

  color: ${({ theme }) => theme.colors.quaternary};
  background-color: ${({ theme }) => theme.colors.quinary}; ;
`

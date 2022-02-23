import OriginalDragIcon from '../../../../public/drag.svg'
import OriginalUploadIcon from '../../../../public/upload.svg'

import styled from 'styled-components'

interface FooterProps {
  isOpen: boolean
}

export const UploadIcon = styled(OriginalUploadIcon as any)`
  transform: translateY(8px);
  height: 42px;
`

export const DragIcon = styled(OriginalDragIcon as any)``

export const Footer = styled.div<FooterProps>`
  position: absolute;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;

  padding: 24px;
  transition: width 0.3s ease-in-out;
  width: ${({ isOpen }) => (isOpen ? '400px' : '95px')};
`

export const Header = styled.div`
  padding: 30px 24px;

  input {
    width: 100%;
    margin-top: 16px;
  }
`

export const Playlist = styled.ul`
  padding: 24px;
  padding-top: 0px;

  li + li {
    margin-top: 16px;
  }
`

export const PlaylistItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 48px;
`

export const Content = styled.aside`
  width: 400px;
  height: calc(100vh - 95px);

  background-color: ${({ theme }) => theme.colors.quinary}; ;
`

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
`

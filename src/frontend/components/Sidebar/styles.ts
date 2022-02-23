import OriginalDragIcon from '../../../../public/drag.svg'
import OriginalUploadIcon from '../../../../public/upload.svg'
import Presence from '../Presence'

import { Reorder } from 'framer-motion'
import styled from 'styled-components'

export const Search = styled.form`
  position: absolute;
  left: 0;
  bottom: 0;

  display: flex;

  width: 100%;
  height: 42px;
  padding: 0 24px;

  input {
    flex: 1;
    height: 100%;

    border: none;
    background-color: transparent;

    &,
    &::placeholder {
      font-weight: 500;

      color: ${({ theme }) => theme.colors.quaternary};
    }
  }
`

export const UploadIcon = styled(OriginalUploadIcon as any)`
  height: 24px;
`

export const DragIcon = styled(OriginalDragIcon as any)``

export const Header = styled.div`
  padding: 30px 24px;

  input {
    width: 100%;
    margin-top: 16px;
  }
`

export const Playlist = styled(Reorder.Group)`
  padding: 24px;
  padding-top: 0px;

  li + li {
    margin-top: 16px;
  }
`

export const PlaylistItem = styled(Reorder.Item)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 48px;
`

export const Content = styled(Presence)`
  position: relative;

  width: 400px;
  height: calc(100vh - 95px);

  background-color: ${({ theme }) => theme.colors.quinary}; ;
`

export const Container = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
`

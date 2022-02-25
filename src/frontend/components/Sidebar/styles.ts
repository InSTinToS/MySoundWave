import OriginalDragIcon from '../../../../public/drag.svg'
import OriginalUploadIcon from '../../../../public/upload.svg'
import Presence from '../Presence'
import OriginalToCloseButton from '../ToCloseButton'

import { Reorder } from 'framer-motion'
import styled, { css } from 'styled-components'

interface PlaylistItemProps {
  isPlaying: boolean
}

interface SearchProps {
  hasVideos: boolean
}

export const Search = styled.form<SearchProps>`
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
      opacity: 0.6;

      color: ${({ theme }) => theme.colors.quaternary};
    }
  }

  ${({ hasVideos }) =>
    !hasVideos &&
    css`
      position: absolute;
      left: 0;
      bottom: 0;
    `};
`

export const UploadIcon = styled(OriginalUploadIcon as any)`
  height: 24px;
  margin-left: 16px;

  fill: ${({ theme }) => theme.colors.tertiary};
`

export const DragIcon = styled(OriginalDragIcon as any)`
  width: 24px;
  margin-left: 16px;

  fill: ${({ theme }) => theme.colors.senary};
`

export const VideoTitle = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 100%;

  span {
    overflow: hidden;

    white-space: nowrap;
    text-overflow: ellipsis;
  }
`

export const ToCloseButton = styled(OriginalToCloseButton)`
  flex: 1;

  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const PlaylistItem = styled(Reorder.Item)<PlaylistItemProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 48px;

  cursor: grab;

  ${({ isPlaying, theme }) =>
    isPlaying &&
    css`
      color: ${theme.colors.primary};
    `};
`

export const Playlist = styled(Reorder.Group)`
  flex: 1;

  overflow-y: scroll;
  overflow-x: hidden;
  padding: 0 24px 42px;

  &::-webkit-scrollbar {
    width: 14px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 16px;

    background-color: ${({ theme }) => theme.colors.tertiary};
    border: 4px solid ${({ theme }) => theme.colors.quinary};
  }

  li + li {
    margin-top: 24px;
  }
`

export const Header = styled.div`
  padding: 30px 24px;

  ${ToCloseButton} {
    height: 48px;
  }
`

export const Content = styled(Presence)`
  position: relative;

  display: flex;
  flex-direction: column;

  width: 400px;
  height: calc(100% - 95px);

  background-color: ${({ theme }) => theme.colors.quinary}; ;
`

export const Container = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
`

import axios from 'axios'

const youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    key: 'AIzaSyBL_iNwhhRCYWHsXaJGYZh0I3n2SDI_n4Q'
  }
})

export default youtube

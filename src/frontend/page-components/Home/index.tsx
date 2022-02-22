import Head from 'next/head'

import { BackgroundLogo, Container, PlayButton } from './style'

import Sidebar from 'frontend/components/Sidebar'

const Home = () => {
  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>

      <Container>
        <section>
          <BackgroundLogo />

          <PlayButton />
        </section>

        <Sidebar />
      </Container>
    </>
  )
}

export default Home

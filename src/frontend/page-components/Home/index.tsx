import Head from 'next/head'

import { BackgroundLogo, Container, MenuButton, PlayButton } from './style'

import Sidebar from 'frontend/components/Sidebar'

import { useState } from 'react'

const Home = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)

  return (
    <>
      <Head>
        <title>My Sound Wave</title>
      </Head>

      <Container sidebarIsOpen={sidebarIsOpen}>
        <section>
          <BackgroundLogo />

          <PlayButton />
        </section>

        <Sidebar open={sidebarIsOpen} />

        <MenuButton
          to={0}
          from={-180}
          condition={sidebarIsOpen}
          onClick={() => setSidebarIsOpen(prev => !prev)}
        />
      </Container>
    </>
  )
}

export default Home

import type { NextPage } from 'next'
import Layout from '@components/Layout'
import Hero from '@components/Hero'
import About from '@components/About'
import Gallery from '@components/Gallery'
import Features from '@components/Features'
import Contacts from '@components/Contacts'
import Steps from "@components/Steps";


const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <Hero />
      <About />
      <Gallery />
      <Features />
      <Steps/>
      <Contacts />
    </Layout>
  )
}

export default Home

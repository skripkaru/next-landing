import { FC, ReactNode } from 'react'
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import SvgSprite from '@components/SvgSprite'

interface LayoutProps {
  title: string
  children: ReactNode | JSX.Element
}

const Layout: FC<LayoutProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Description"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col h-full">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <SvgSprite />
      </div>
    </>
  )
}

export default Layout

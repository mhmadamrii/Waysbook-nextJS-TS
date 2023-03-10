import Head from 'next/head'
import { Inter } from '@next/font/google'

import { Button } from '@mui/material'

import Authentication from './authentication'
import BackgroundLayer from '@/components/layer-background'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>WaysBook | The best store</title>
      </Head>
      <main>
        <BackgroundLayer />
        <Authentication />
      </main>
    </>
  )
}

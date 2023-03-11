import Head from 'next/head'
import { Inter } from '@next/font/google'

import { Button } from '@mui/material'

import Authentication from './authentication'
import BackgroundLayer from '@/components/layer-background'
import ThumbNail from '@/components/ThumbNails'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>WaysBook | The best store</title>
      </Head>
      <main>
        <div>
          <BackgroundLayer />
          <Authentication />
        </div>

        <div style={{ height: 500, backgroundColor: '#E5E5E5' }}>
          <ThumbNail />
        </div>
      </main>
    </>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

import { Button } from '@mui/material'

import BackgroundLayer from '@/components/layer-background'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <BackgroundLayer />
        <Button variant='contained' color='primary'>Click here</Button>
      </main>
    </>
  )
}

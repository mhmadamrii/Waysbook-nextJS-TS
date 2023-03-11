import React, { useState } from 'react'

import Image from 'next/image'

import Layer1 from '#/assets/assets/layer1.png'
import Layer2 from '#/assets/assets/layer2.png'

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    // border: '1px solid blue'
  },
  images: {
    width: 600,
    height: 500,
  },
}

const BackgroundLayer: React.FC = () => {
  return (
    <React.Fragment>
      <div style={styles.container}>
        <Image src={Layer1} alt="Layer left" style={styles.images} />
        <Image src={Layer2} alt="Layer left" style={styles.images} />
      </div>
    </React.Fragment>
  )
}

export default BackgroundLayer

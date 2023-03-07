import React, { useState } from 'react'

import Image from 'next/image'

import Layer1 from '#/assets/assets/layer1.png'

const BackgroundLayer: React.FC = () => {
  return (
    <React.Fragment>
      <Image
        src={Layer1}
        alt="Layer left"
        style={{ width: 200, height: 150 }}
      />
      <h1>
        Proident dolor fugiat enim incididunt officia Lorem exercitation aute
        elit. Cupidatat occaecat ad officia ad consequat id eu. Excepteur anim
        qui deserunt aute aliqua elit ut aliquip fugiat. Fugiat culpa fugiat
        laborum est aute proident enim. Sit mollit ea aliquip aliqua duis culpa.
        Incididunt duis consequat pariatur ut aliquip. Proident occaecat tempor
        sit magna culpa.
      </h1>
    </React.Fragment>
  )
}

export default BackgroundLayer

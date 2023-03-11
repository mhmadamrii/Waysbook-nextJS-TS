import React from 'react'
import Image from 'next/image'

import Book1 from '#/assets/assets/book1.png'
import Book2 from '#/assets/assets/book2.png'
import Book3 from '#/assets/assets/book3.png'

const styles = {
  container: {
    display: 'flex'
  }
}

const ThumbNail: React.FC = () => {
  return (
    <React.Fragment>
      <div style={styles.container}>
        <div>
          <Image src={Book1} alt="Book 1" />
          <div>
            <h1>hello</h1>
            <h2>World</h2>
          </div>
        </div>

        <div>
          <Image src={Book2} alt="Book 2" />
        </div>

        <div>
          <Image src={Book3} alt="Book 3" />
        </div>
      </div>
    </React.Fragment>
  )
}

export default ThumbNail

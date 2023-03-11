import React from 'react'
import Image from 'next/image'

import Book1 from '#/assets/assets/book1.png'
import Book2 from '#/assets/assets/book2.png'
import Book3 from '#/assets/assets/book3.png'

import { IStylesThumbnail } from 'interfaces/interface'

const styles: IStylesThumbnail = {
  container: {
    display: 'flex',
    border: '1px solid red',
    position: 'absolute',
    gap: 40,
    left: 0,
    right: 0,
    top: 500,
  },
  bookWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // border: '1px solid',
    height: 350,
  },
  prices: {
    border: '1px solid red',
    width: 240,
    height: '80%',
  },
}

const ThumbNail: React.FC = () => {
  return (
    <React.Fragment>
      <div style={styles.container}>
        <div style={styles.bookWrapper}>
          <Image src={Book1} alt="Book 1" />
          <div style={styles.prices}>
            <h1>hello</h1>
            <h2>World</h2>
          </div>
        </div>

        <div style={styles.bookWrapper}>
          <Image src={Book2} alt="Book 1" />
          <div style={styles.prices}>
            <h1>hello</h1>
            <h2>World</h2>
          </div>
        </div>

        <div style={styles.bookWrapper}>
          <Image src={Book3} alt="Book 1" />
          <div style={styles.prices}>
            <h1>hello</h1>
            <h2>World</h2>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ThumbNail

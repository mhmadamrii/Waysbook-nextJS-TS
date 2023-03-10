import React from 'react'
import Image from 'next/image'

import Logo from "#/assets/assets/Logo.png"

import { Button, Theme, Grid } from '@mui/material'
import { ITheme } from 'interfaces/interface'
// import { makeStyles } from '@mui/styles'

interface IStyles {
  container: {
    display: string;
    position: 'absolute' | 'relative' | 'fixed';
    top: number;
  };
}

// const useStyles = makeStyles({
//   container: {
//     display: 'flex',
//     position: 'absolute',
//     top: 10,
//   },
// })

const styles: IStyles = {
  container: {
    display: 'flex',
    position: 'absolute',
    top: 10,
  },
}

export const NavbarAdmin: React.FC = () => {
  // const classes = useStyles()
  return (
    <React.Fragment>
      <div style={styles.container}>
        <h1>Navbar option</h1>
      </div>
    </React.Fragment>
  )
}

export const NavbarUser: React.FC = () => {
  return (
    <React.Fragment>
      <div style={styles.container}>

        <div>
          <Image src={Logo} alt="Brand Logo" />
        </div>

        <div>
          <Button variant='outlined'>Login</Button>
          <Button variant='contained'>Register</Button>
        </div>
      </div>
    </React.Fragment>
  )
}

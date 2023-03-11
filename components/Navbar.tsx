import React from 'react'
import Image from 'next/image'

import Logo from '#/assets/assets/Logo.png'

import { Button, Theme, Grid, withStyles } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { ITheme } from 'interfaces/interface'

interface IStyles {
  container: {
    display: string
    justifyContent: string
    position: 'absolute' | 'relative' | 'fixed'
    top: number
    right: number
    left: number
    padding: string
    alignItems: string
    height: number
  }
  imageLogo: {
    width: number
    height: number
  }
}

const styles: IStyles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 10,
    right: 0,
    left: 0,
    padding: '10px 70px 10px 70px',
    height: 60,
    alignItems: 'center',
    // border: '1px solid red'
  },
  imageLogo: {
    width: 100,
    height: 50,
  },
}

const useStyles = makeStyles({
  registerButton: {
    backgroundColor: 'black',
    color: '#FFFF',
    width: 100,
    height: 30,
    fontSize: 10,
  },
  loginButton: {
    border: '1px solid',
    width: 100,
    height: 30,
    fontSize: 10,
    color: 'black',
  },
})

export const NavbarAdmin: React.FC = () => {
  return (
    <React.Fragment>
      <div style={styles.container}>
        <h1>Navbar option</h1>
      </div>
    </React.Fragment>
  )
}

export const NavbarUser: React.FC = () => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <div style={styles.container}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Image src={Logo} alt="Brand Logo" style={styles.imageLogo} />
        </div>

        <div
          style={{
            gap: 10,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Button variant="outlined" className={classes.loginButton}>
            Login
          </Button>
          <Button variant="contained" className={classes.registerButton}>
            Register
          </Button>
        </div>
      </div>
    </React.Fragment>
  )
}

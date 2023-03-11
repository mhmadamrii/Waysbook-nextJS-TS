import React, { useState } from 'react'
import { NavbarAdmin, NavbarUser } from '@/components/Navbar'

import { Typography, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  typographies: {
    fontSize: 40,
    textAlign: 'center'
  }
})

type container = {
  justifyContent: string
  border?: string
  position: 'absolute' | 'relative' | 'fixed'
  display: string
  top: number
  left: number
  right: number
}

interface IStyles {
  container: container
}

const styles: IStyles = {
  container: {
    justifyContent: 'center',
    // border: '1px solid red',
    position: 'absolute',
    display: 'flex',
    top: 100,
    left: 0,
    right: 0,
  },
}

const Authentication: React.FC = () => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false)
  const classes = useStyles()

  return (
    <React.Fragment>
      {isAdmin ? <NavbarAdmin /> : <NavbarUser />}
      <div style={styles.container}>
        <div>
          <Typography className={classes.typographies}>With us, you can shop online & help</Typography>
          <Typography className={classes.typographies}>save your high street at the same time</Typography>
        </div>

        <div>
          
        </div>
      </div>
    </React.Fragment>
  )
}

export default Authentication

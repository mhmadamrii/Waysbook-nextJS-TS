import React, { useState } from 'react'
import { NavbarAdmin, NavbarUser } from '@/components/Navbar'

import { Typography, Button } from '@mui/material'

const Authentication: React.FC = () => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false)

  return (
    <React.Fragment>
      {isAdmin ? <NavbarAdmin /> : <NavbarUser />}
      <Button variant="contained" color="error">
        Click me
      </Button>
      <Typography>With us, you can shop online & help</Typography>
      <Typography>save your high street at the same time</Typography>
    </React.Fragment>
  )
}

export default Authentication

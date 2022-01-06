import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  AppBar: {
    backgroundColor: 'black',
  },
  Link: {
    textDecoration: 'none',
  },
  title: {
    cursor: 'pointer',
    color: 'white',
    fontFamily: 'Krona One'
  }
}))

export default function AppNavigator() {

  const classes = useStyles()

  return (
    <AppBar position='fixed' className={classes.AppBar}>
      <Toolbar>
        <Link to='/' className={classes.Link}>
          <Typography className={classes.title} variant='h6'>
            Final Fantasy Encyclopedia
          </Typography>
        </Link>    
        <Typography style={{ marginLeft: 15, color: 'white' }}>
          /
        </Typography> 
        <Link to='/favorites' className={classes.Link}>
          <Typography className={classes.title} variant='subtitle1' style={{ marginLeft: 15 }}>
            Favorites
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  )
}

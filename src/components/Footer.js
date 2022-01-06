import React from 'react'
import {
  AppBar,
  Box,
  Link,
  Grid,
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: 'black',
    margin: '1em 0em 0em 0em',
    paddingTop: '2.5em',
    width: '100vw',
    minHeight: '12em',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  gitHub: {
    color: 'white',
    width: '30px',
    height: '30px',
    '&:hover': {
      color: 'gray'
    }
  },
  instagram: {
    color: 'white',
    width: '30px',
    height: '30px',
    '&:hover': {
      color: '#d5303e'
    }
  },
  facebook: {
    color: 'white',
    width: '30px',
    height: '30px',
    '&:hover': {
      color: '#3b5998'
    }
  }
}))

export default function Footer() {

  const classes = useStyles()

  return (
    <AppBar position='static' className={classes.footer}>
      <Box>
        <Grid container spacing={2} justifyContent='center'>

          <Grid item xs={2}>
            <Link href='https://www.facebook.com/goosecode'>
              <Typography>
                <FacebookIcon
                  className={classes.facebook}
                />
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={2}>
            <Link href='https://www.instagram.com/gustavoerivero'>
              <Typography>
                <InstagramIcon
                  className={classes.instagram}
                />
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={2}>
            <Link href='https://github.com/gustavoerivero'>
              <Typography>
                <GitHubIcon
                  className={classes.gitHub}
                />
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Typography style={{ color: 'white' }} variant='body2' align='center'>
              &copy; Gustavo Rivero | 2021
              <br />
              <Link href='https://www.moogleapi.com/'>
                <Typography style={{ color: 'gray', paddingBottom: '2em' }} variant='caption' >
                  moogleAPI
                </Typography>
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </AppBar>
  )
}

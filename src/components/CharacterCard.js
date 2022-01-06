import React from 'react'
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  card: {
    cursor: 'pointer',
    color: 'white',
    '&:hover': {
      backgroundColor: theme.palette.primary.main
    }
  },
  cardMedia: {
    margin: 'auto',
    width: 100,
    height: 100
  },
  cardContent: {
    textAlign: 'center'
  },
  link: {
    textDecoration: 'none',
  },
}))

export default function CharacterCard(props) {

  const { character, picture } = props
  const { id, name } = character

  const classes = useStyles()

  return (
    <Grid item xs={6} sm={4} md={2}>
      <Link to={`/character/${name}`} className={classes.link}>
        <Card className={classes.card} elevation={5} id={id}>
          <CardMedia
            image={picture}
            className={classes.cardMedia}
          >
          </CardMedia>
          <CardContent className={classes.cardContent}>
            <Typography>
              <b>{name}</b>
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  )
}

import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'
import { CHARACTER } from '../config'
import {
  IconButton,
  CircularProgress,
  Grid,
  Paper,
  Divider,
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { toggleFavorite } from '../redux/actions'

import '../assets/styles/main.css'

function CharacterDetails(props) {

  const useStyles = makeStyles((theme) => ({
    container: {
      textAlign: 'center',
      padding: '70px 10px 0px 10px',
      minHeight: '75vh',
    },
    paper: {
      minHeight: '80vh',
      minWidth: '85vw',
      padding: 20,
    },
    title: {
      fontFamily: 'Space Mono',
      textShadow: '1.5px 1.5px 1.5px #2A0944'
    },
    image: {
      height: '45vh',
    },
    fav: {
      height: 50,
      width: 50
    },
    span: {
      fontWeight: 'bold',
      textShadow: '1.5px 1.5px 1.5px #2A0944',
      fontSize: 18,
      color: theme.palette.secondary.main,
    },
  }))

  const classes = useStyles()

  const [character, setCharacter] = useState(null)

  let { name } = useParams()

  useEffect(() => {
    axios.get(CHARACTER(name))
      .then(res => {
        if (res.status >= 200 && res.status < 300) {
          setCharacter(res.data[0])
        }
      })
      .catch(error => console.log('Error: ', error))
  }, [name])

  const favoriteChecker = (char) => {
    let found = false
    props.favorites.map((fav) => ( found = (fav.id === char.id ? true : false) ))
    return found
  }

  return (
    <div>
      <Grid container justifyContent='center' alignItems='center' spacing={2} className={classes.container}>
        {character ?
          <Grid item>
            <Paper elevation={5} className={classes.paper}>
              <Grid container justifyContent='center' alignItems='center' spacing={2} >
                <Grid item xs={12}>
                  <Typography variant='h4' component='h2' className={classes.title}>
                    {character.name}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item xs={12} md={8}>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography align='left'>
                        <span className={classes.span}><b>Japanese name: </b></span> {character.japaneseName}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography align='left'>
                        <span className={classes.span}><b>Description: </b></span> {character.description}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography align='left'>
                        <span className={classes.span}><b>Job: </b></span> {character.job}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography align='left'>
                        <span className={classes.span}><b>Origin: </b></span> {character.origin}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography align='left'>
                        <span className={classes.span}><b>Race: </b></span> {character.race}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography align='left'>
                        <span className={classes.span}><b>Gender: </b></span> {character.gender}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography align='left'>
                        <span className={classes.span}><b>Age: </b></span> {character.age}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography align='left'>
                        <span className={classes.span}><b>Height: </b></span> {character.height}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={4}>
                  <img
                    src={character.pictures[0] ? character.pictures[0].url : null}
                    className={classes.image}
                    alt={character.name}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item xs={12}>
                  <IconButton className={classes.fav} onClick={() => props.toggleFavorite(character)}>
                    <FavoriteIcon 
                      style={{ 
                        fontSize: 50, 
                        color: favoriteChecker(character) ? 'red' : 'white',
                      }} 
                    />
                  </IconButton>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          :
          <Grid item>
            <CircularProgress />
          </Grid>
        }
      </Grid>
    </div>
  )

}

const mapStateToProps = (state) => ({
  favorites: state.favorites
})

const mapDispatchToProps = (dispatch) => ({
  toggleFavorite: (character) => dispatch(toggleFavorite(character))
})

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetails)
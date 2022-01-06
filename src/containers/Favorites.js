import React from 'react'
import { connect } from 'react-redux'
import {
  Box,
  Grid
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CharacterCard from '../components/CharacterCard'

import '../assets/styles/main.css'

function Favorites(props) {

  const useStyles = makeStyles((theme) => ({
    container: {
      textAlign: 'center',
      padding: '70px 10px 0px 10px',
      minHeight: '75vh',
    }
  }))

  const classes = useStyles()

  return (
    <Box>
      <Grid container spacing={2} className={classes.container}>
        {props.favorites.map((element, i) => {
          return (
            <CharacterCard 
              key={i}
              character={element}
              picture={element.pictures[0] ? element.pictures[0].url : null}
            />
          )
        })}
      </Grid>
    </Box>
  )
}

const mapStateToProps = (state) => ({
  favorites: state.favorites
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)

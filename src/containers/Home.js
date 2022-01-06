import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  CircularProgress,
  InputAdornment,
  Grid,
  Paper,
  TextField,
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CharacterCard from '../components/CharacterCard'
import MonsterCarousel from '../components/MonsterCarousel'
import GameCarousel from '../components/GameCarousel'
import { FINAL_FANTASY_API_URL, CHARACTER, MONSTER } from '../config'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import SearchIcon from '@material-ui/icons/Search'

import '../assets/styles/main.css'

export default function Home() {

  const useStyles = makeStyles((theme) => ({
    container: {
      textAlign: 'center',
      padding: '80px 10px 0px 10px',
      minHeight: '72vh',
    },
  }))

  const classes = useStyles()

  const [FFData, setFFData] = useState(null)
  const [monsters, setMonsters] = useState(null)
  const [games, setGames] = useState(null)

  const [search, setSearch] = useState(null)

  useEffect(() => {
    if (search === null || search === '') {
      axios.get(FINAL_FANTASY_API_URL + 'characters')
        .then(res => {
          if (res.status >= 200 && res.status < 300) {
            let object = []
            res.data.forEach((element, index) => {
              index++
              let FFObject = {
                id: index,
                name: element.name,
                picture: (element.pictures[0] ? element.pictures[0].url : null)
              }
              object.push(FFObject)
            });
            setFFData(object)
          }
        })
      axios.get(FINAL_FANTASY_API_URL + 'monsters')
        .then(res => {
          if (res.status >= 200 && res.status < 300) {
            let object = []
            res.data.forEach((element, index) => {
              index++
              let FFObject = {
                id: index,
                name: element.name,
                japaneseName: element.japaneseName,
                description: element.description,
                elementalAffinity: element.elementalAffinity,
                elementalWeakness: element.elementalWeakness,
                hitPoints: element.hitPoints,
                manaPoints: element.manaPoints,
                attack: element.attack,
                defense: element.defense,                
                game: element.game,
                picture: (element.picture ? element.picture : null)
              }
              object.push(FFObject)
            });
            setMonsters(object)
          }
        })
      axios.get(FINAL_FANTASY_API_URL + 'games')
        .then(res => {
          if (res.status >= 200 && res.status < 300) {
            let object = []
            res.data.forEach((game, index) => {
              index++
              let FFObject = {
                id: index,
                title: game.title,
                platform: game.platform,
                releaseDate: game.releaseDate,
                description: game.description,
                picture: (game.picture ? game.picture : null)
              }
              object.push(FFObject)
            });
            setGames(object)
          }
        })
    } else {
      axios.get(CHARACTER(search))
        .then(res => {
          if (res.status >= 200 && res.status < 300) {
            let object = []
            res.data.forEach((element, index) => {
              index++
              let FFObject = {
                id: index,
                name: element.name,
                picture: (element.pictures[0] ? element.pictures[0].url : null)
              }
              object.push(FFObject)
            });
            setFFData(object)
          }
        })
      axios.get(MONSTER(search))
        .then(res => {
          if (res.status >= 200 && res.status < 300) {
            let object = []
            res.data.forEach((element, index) => {
              index++
              let FFObject = {
                id: index,
                name: element.name,
                picture: (element.picture ? element.picture : null)
              }
              object.push(FFObject)
            });
            setMonsters(object)
          }
        })
      axios.get(FINAL_FANTASY_API_URL + 'games')
        .then(res => {
          if (res.status >= 200 && res.status < 300) {
            let object = []
            res.data.forEach((game, index) => {
              index++
              let FFObject = {
                id: index,
                title: game.title,
                picture: (game.picture ? game.picture : null)
              }
              object.push(FFObject)
            });
            setGames(object)
          }
        })
    }
  }, [search])

  return (
    <Box>
      {FFData && monsters && games ?
        <Grid
          container
          spacing={1}
          className={classes.container}
          justifyContent='center'
          alignContent='flex-start'
        >

          <Grid item xs={12}>
            <TextField
              variant='outlined'
              fullWidth
              label='Filter the information about Final Fantasy that you want to find.'
              onChange={(e) => setSearch(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <Paper elevation={0} variant='outlined'>
              <Grid container spacing={1}>

                <Grid item xs={12}>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <Typography>
                        Characters
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid container spacing={2}>
                        {FFData.map((element, i) => {
                          return (
                            <CharacterCard
                              key={i}
                              character={element}
                              picture={element.picture}
                            />
                          )
                        })}
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
                </Grid>

                <Grid item xs={12}>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <Typography>
                        Monsters
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          {monsters.length > 0 ? <MonsterCarousel props={monsters} /> : null}
                        </Grid>
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
                </Grid>

                <Grid item xs={12}>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <Typography>
                        Games
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                          {games.length > 0 ? <GameCarousel props={games} /> : null}
                        </Grid>
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
                </Grid>
              </Grid>

            </Paper>
          </Grid>


        </Grid>
        :
        <Grid container alignItems='center' justifyContent='center' alignContent='center' className={classes.container}>
          <Grid item>
            <CircularProgress />
          </Grid>
        </Grid>
      }
    </Box>
  )
}

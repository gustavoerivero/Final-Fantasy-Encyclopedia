import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import {
  Grid,
  Paper,
  Typography,
  Button,
  MobileStepper
} from '@material-ui/core'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100vw',
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 255,
    maxWidth: '50vw',
    overflow: 'hidden',
    width: '100%',
    alignItems: 'center',
    alignContent: 'center',
  },
  span: {
    fontWeight: 'bold',
    textShadow: '1.5px 1.5px 1.5px #2A0944',
    fontSize: 18,
    color: theme.palette.secondary.main,
  },
}))

export default function MonsterCarousel({ props }) {
  const classes = useStyles()
  const theme = useTheme()
  const [activeStep, setActiveStep] = React.useState(0)
  const maxSteps = props.length

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  return (
    <div className={classes.root}>
      <Paper elevation={5} className={classes.header}>
        <Typography><b>{props[activeStep].name}</b></Typography>
      </Paper>
      <Paper square>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <img
              className={classes.img}
              src={props[activeStep].picture ? props[activeStep].picture : null}
              alt={props[activeStep].name}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Grid container>
              <Grid item xs={12}>
                <Typography align='left'>
                  <span className={classes.span}><b>Japanese name: </b></span> {props[activeStep].japaneseName}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography align='left'>
                  <span className={classes.span}><b>Description: </b></span> {props[activeStep].description}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography align='left'>
                  <span className={classes.span}><b>Elemental Affinity: </b></span> {props[activeStep].elementalAffinity}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography align='left'>
                  <span className={classes.span}><b>Elemental Weakness: </b></span> {props[activeStep].elementalWeakness}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography align='left'>
                  <span className={classes.span}><b>Hit Points: </b></span> {props[activeStep].hitPoints}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography align='left'>
                  <span className={classes.span}><b>Mana Points: </b></span> {props[activeStep].manaPoints}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography align='left'>
                  <span className={classes.span}><b>Attack: </b></span> {props[activeStep].attack}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography align='left'>
                  <span className={classes.span}><b>Defense: </b></span> {props[activeStep].defense}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography align='left'>
                  <span className={classes.span}><b>Game: </b></span> {props[activeStep].game}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>
  )
}

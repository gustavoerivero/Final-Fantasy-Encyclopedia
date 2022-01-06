import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Theme from './static/theme/Theme'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './redux/store'
import AppNavigator from './components/AppNavigator'
import Footer from './components/Footer'
import Home from './containers/Home'
import CharacterDetails from './containers/CharacterDetails'
import Favorites from './containers/Favorites'

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={Theme}>
          <Router>
            <CssBaseline />
            <AppNavigator />
            <Route exact path='/' component={Home} />
            <Route exact path='/character/:name' component={CharacterDetails} />
            <Route exact path='/favorites' component={Favorites} />
            <Footer />
          </Router>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

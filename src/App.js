import {BrowserRouter, Navigate, Routes, Route} from 'react-router-dom'
import homePage from './screens/homePage/homePage'
import loginPage from './screens/loginPage/loginpage'
import ProfilePage from './screens/profilePage/profilePage'

import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import {CssBaseline, ThemeProvider} from '@mui/material'
import { createTheme } from '@mui/material/styles'
import {themeSettings} from './theme'


function App() {

const mode = useSelector((state) => state.mode) //..call from redux 
const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  return (
  
    <div className="App">
      <BrowserRouter>
      <ThemeProvider theme={theme}>
      <CssBaseline/>
        <Routes>
          <Route path='/' element={<loginPage/>} /> 
          <Route path='/home' element={<homePage/>}/>
          <Route path='/profile/:userId' element={<ProfilePage/>}/>
        </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
    )
}

export default App;

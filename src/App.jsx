import { Box, ThemeProvider } from '@mui/material'
import React, { useState } from 'react'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import { Mytheme } from './Mytheme'
import Carousel from './Components/Carousel'
import MuiTable from './Components/MuiTable'
import Cards from './Components/Cards'
import MyBarChart from './Components/MyBarChart'

function App() {
  const [darkMode,setDarkMode]=useState(false);
  const tagleDarkerMode =()=>{
    setDarkMode(!darkMode);
  }
  return (
    <ThemeProvider theme={Mytheme(darkMode)}>
    <Box>
    <NavBar darkMode={darkMode} tagleDarkerMode={tagleDarkerMode} />
    <Hero/>
    </Box>
    <Carousel/>
    <MuiTable/>
    <Cards/>
    <MyBarChart/>
   </ThemeProvider>
  )
}

export default App

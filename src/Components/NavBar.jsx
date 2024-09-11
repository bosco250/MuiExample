import { AppBar, Box, CssBaseline, Switch, ThemeProvider, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Mytheme } from '../Mytheme';

function NavBar({darkMode,tagleDarkerMode}) {

  return (
    <ThemeProvider theme={Mytheme(darkMode)} >
    <Box sx={{
      }}>
      <CssBaseline>
        <AppBar sx={{
          display:"flex",flexDirection:"row",justifyContent:"center", alignItems:'center',backgroundColor:(theme)=> theme.palette.appbar.background,
          color: (theme)=>theme.palette.appbar.text
        
        }
        }>
          <Typography variant='h3' marginLeft={5} p={1} style={{flexGrow:"1", paddingRight:"40px"}}>
            Hello! Bosco
          </Typography>
          <Box>
            <Switch checked={darkMode} onChange={tagleDarkerMode}/>
          </Box>
        </AppBar>
      </CssBaseline>
    </Box>
    </ThemeProvider>
  )
}

export default NavBar

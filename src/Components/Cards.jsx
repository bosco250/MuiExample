import React from 'react'
import MyCard from './MyCard'
import { Box } from '@mui/material'

function Cards() {
  return (
    <Box sx={{
      display:'flex' ,flexDirection:'row',flexWrap:'wrap', justifyContent:'center',gap:5
    }}>
      <MyCard/>
      <MyCard/>
      <MyCard/>
      <MyCard/>
      <MyCard/>
      <MyCard/>
    </Box>
  )
}

export default Cards

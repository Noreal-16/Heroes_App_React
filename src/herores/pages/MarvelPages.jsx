import React from 'react'
import { HeroList } from '../components/HeroList'

export const MarvelPages = () => {
  return (
  <>
  <h1>Marvel Heros</h1>
  <hr/>
      <HeroList publisher='Marvel Comics' />
  </>  
  )
}

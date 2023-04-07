import React from 'react'
import { Navbar } from '../../ui'
import { Navigate, Route, Routes } from 'react-router-dom'
import { MarvelPages, DCPages, SearchPage, HeroPage } from '../pages'

export const HeroesRoutes = () => {
  return (
    <>
    <Navbar/>
    <div className='container'>
    <Routes>
        <Route path='marvel' element={<MarvelPages/>} />
        <Route path='dc' element={<DCPages/>} />
        <Route path='search' element={<SearchPage/>} />
        <Route path='hero/:heroId' element={<HeroPage/>} />

        <Route path='/' element={<Navigate to={"/marvel"} />} />
    </Routes>
    </div>
    </>
  )
}

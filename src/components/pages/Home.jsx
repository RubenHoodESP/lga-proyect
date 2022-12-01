import React from 'react'
import { Navbar, HomeIntro } from '../../components'
import './Home.css'

export const Home = () => {
  return (
    <div className='vh-100 bg-home'>
      <Navbar />
      <div className="home-intro container d-flex flex-column text-center justify-content-center">
        <HomeIntro />
      </div>
    </div>
  )
}

import React from 'react'
import { Navbar, CVList } from '../../components'
import './CV.css'

export const CV = () => {
  return (
    <div className='vh-100 bg-cv'>
      <Navbar />
      <div className="cv-intro container d-flex flex-column text-center justify-content-center">
        <CVList />
      </div>
    </div>
  )
}

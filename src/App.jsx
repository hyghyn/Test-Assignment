import React, { useState } from 'react'
import './App.css'

import PlaceData from './data/example_data.json'

import Navbar from './components/Navbar'
import Card from './components/Card'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='Place__list'>
        {PlaceData.map((place) => {
          return(
            <Card key={place.id}
              id={place.id}
              name={place.name}
              imgProfile={place.profile_image_url}
              rating={place.rating}
              operateTime={place.operation_time}
              images={place.images}
            />
          )
        })}
      </div>
    </div>
  )
}
export default App

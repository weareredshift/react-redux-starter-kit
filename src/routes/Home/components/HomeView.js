import React from 'react'
import DuckImage from 'routes/Home/assets/Duck.jpg'
import './HomeView.scss'

export const HomeView = () => (
  <div className="py4">
    <h4 className="typ--center">Welcome!</h4>
    <img alt='This is a duck, because Redux!' className='duck' src={DuckImage} />
  </div>
)

export default HomeView

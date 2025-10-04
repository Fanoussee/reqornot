import React from 'react'
import Navigation from './Navigation'
import Menu from './Menu'
import useMesure from '../hooks/useMesure'
import Resume from './Resume'

const Body = () => {
  const { mesureHandler } = useMesure();

  return (
    <div className='website-body'>
      <Navigation mesureHandler={mesureHandler} />
      <div className='menu-resume'>
        <Menu mesureHandler={mesureHandler} />
        <Resume mesureHandler={mesureHandler} />
      </div>
    </div>
  )
}

export default Body;

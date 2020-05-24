import React from 'react'

import { characters } from '../characters'
import Character from './Character/Character'
import Heading from './Heading/Heading'

const App = () => {
  return (
    <div className='App'>
      <Heading />
      {characters.map((character, index) => {
        return (
          <Character character={character} index={index} key={character.name} />
        )
      })}
    </div>
  )
}

export default App

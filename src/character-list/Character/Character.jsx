import React from 'react'

import Terminal from '../Terminal/Terminal'
import { Main, Name, Settings, StyledCharacter } from './Character.style'

const Character = ({ character, index }) => {
  const terminalOrder = index % 2 === 1 ? 2 : 1
  const settingsOrder = index % 2 === 0 ? 2 : 1
  return (
    <StyledCharacter>
      <Name>{character.displayName}</Name>
      <Main>
        <Settings order={settingsOrder}>
          <p>
            Side: <code>{character.side}</code>
          </p>
          <p>
            Setting Name: <code>{character.name}</code>
          </p>
        </Settings>
        <Terminal character={character} order={terminalOrder} />
      </Main>
    </StyledCharacter>
  )
}

export default Character

import React, { useState, useEffect } from 'react'

import { characters } from '../../characters'
import { CountTitle, SubTitle, Title } from './Heading.style'

const Heading = () => {
  const [characterCount, setCharacterCount] = useState(0)
  useEffect(() => {
    let count = 0
    characters.map(() => {
      count += 1
    })
    setCharacterCount(count)
  }, [characterCount])

  return (
    <>
      <Title>Hyper Female Super Heroes</Title>
      <SubTitle>
        Hyper female super heroes are here to save your boring terminal.
      </SubTitle>
      <CountTitle>{characterCount} available characters</CountTitle>
    </>
  )
}

export default Heading

import React, { useState, useEffect } from 'react'

import { characters } from '../../characters'
import { CountTitle, SubTitle, Title, Logo } from './Heading.style'
import svgLogo from './hyperthemebanner.svg'

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
      <Logo src={svgLogo} alt={'hyper female super hero and villains'}/>
      <Title>Hyper Female Super Heroes</Title>
      <SubTitle>
        Hyper female super heroes are here to save your boring terminal.
      </SubTitle>
      <CountTitle>{characterCount} available characters</CountTitle>
    </>
  )
}

export default Heading

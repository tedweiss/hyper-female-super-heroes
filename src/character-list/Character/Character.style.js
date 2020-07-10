import styled from 'styled-components'

export const StyledCharacter = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto 50px;
`
export const Name = styled.h2`
  font-family: Bangers;
  font-size: 26px;
  letter-spacing: 2px;
  text-align: center;
  margin: 0 0 20px;
`
export const Main = styled.div`
  text-align: center;
  code {
    font-size: 18px;
  }
  @media screen and (min-width: 900px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: left;
  }
`
export const Settings = styled.div`
  font-family: Comic Neue;
  font-size: 20px;
  @media screen and (min-width: 900px) {
    order: ${({ order }) => order};
  }
`

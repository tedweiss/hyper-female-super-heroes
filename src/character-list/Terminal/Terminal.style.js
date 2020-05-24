import styled from 'styled-components'

export const Main = styled.div`
  border: 1px solid ${({ header }) => header};
  border-radius: 5px;
  background-color: ${({ primary }) => primary};
  width: 100%;
  max-width: 525px;
  text-align: left;
  margin: 0 auto;
  @media screen and (min-width: 900px) {
    order: ${({ order }) => order};
  }
`
export const Header = styled.div`
  background-color: ${({ header }) => header};
  font-size: 12px;
`
export const Nav = styled.div`
  color: ${({ color }) => color};
  max-height: 34px;
  display: flex;
  flex-flow: row;
  list-style-type: none;
`
export const Dots = styled.div`
  width: 76px;
  display: flex;
  justify-content: space-evenly;
  align-self: center;
  padding: 0 5px;
`
export const Dot = styled.div`
  width: 13px;
  height: 13px;
  border-radius: 50%;
`
export const LeftDot = styled(Dot)`
  background-color: #ff605c;
`
export const MiddleDot = styled(Dot)`
  background-color: #ffbd44;
`
export const RightDot = styled(Dot)`
  background-color: #00ca4e;
`
export const Tabs = styled.div`
  display: flex;
  width: 100%;
`
export const Tab = styled.div`
  background-color: ${({ tab }) => tab};
  border-bottom: solid 4px ${({ header }) => header};
  border-left: solid 2px ${({ header }) => header};
  text-align: center;
  display: flex;
  height: 30px;
  font-family: arial;
  width: 100%;
`
export const AvtiveTab = styled(Tab)`
  background-color: ${({ activeTab }) => activeTab};
  border-bottom: solid 4px ${({ activeTabBottomColor }) => activeTabBottomColor};
  border-left: solid 2px ${({ header }) => header};
`
export const TabTitle = styled.span`
  align-self: center;
  margin: 0 auto;
`
export const Body = styled.div`
  padding: 20px;
`
export const InnerBody = styled.div`
  background: ${({ background }) => background};
  height: 300px;
`
export const TerminalText = styled.div`
  font-family: 'Space Mono', monospace;
  font-size: 14px;
`
export const Directory = styled.div`
  color: ${({ color }) => color};
`
export const Path = styled.div`
  display: inline-block;
  color: ${({ color }) => color};
`
export const Command = styled.div`
  display: inline-block;
  color: ${({ color }) => color};
  margin-left: 10px;
`
export const Cursor = styled.div`
  display: inline-block;
  width: 10px;
  height: 20px;
  background-color: ${({ color }) => color};
  margin-left: 10px;
  vertical-align: bottom;
`

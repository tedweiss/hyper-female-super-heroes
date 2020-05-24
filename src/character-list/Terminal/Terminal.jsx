import React from 'react'
import color from 'color'

import {
  AvtiveTab,
  Body,
  Command,
  Cursor,
  Directory,
  Dots,
  Header,
  InnerBody,
  LeftDot,
  Main,
  MiddleDot,
  Nav,
  Path,
  RightDot,
  Tab,
  TabTitle,
  Tabs,
  TerminalText
} from './Terminal.style'

const Terminal = ({ character, order }) => {
  const colors = character.colors
  const terminalTextColors = character.terminalTextColors
  const primary = colors.backgroundColor
  const header = '#333F42'
  const tab = color(header).lighten(0.3)
  const activeTab = colors.tabs
  const activeTabBottomColor = colors.activeTabBottomColor
  const characterName = character.name
  const backgroundContent =
    'url("../hyper-female-super-heroes/src/images/' +
    characterName +
    '.png") right 30% / 55% no-repeat'

  return (
    <Main header={header} order={order} primary={primary}>
      <Header header={header}>
        <Nav color={primary}>
          <Dots>
            <LeftDot />
            <MiddleDot />
            <RightDot />
          </Dots>
          <Tabs>
            <Tab tab={tab} header={header}>
              <TabTitle>hyper-strength</TabTitle>
            </Tab>
            <AvtiveTab
              activeTab={activeTab}
              activeTabBottomColor={activeTabBottomColor}
              header={header}
            >
              <TabTitle>hyper-strength</TabTitle>
            </AvtiveTab>
          </Tabs>
        </Nav>
      </Header>
      <Body>
        <InnerBody background={backgroundContent}>
          <TerminalText>
            <Directory color={terminalTextColors.blue}>
              hyper-strength
            </Directory>
            <Path color={terminalTextColors.lightCyan}> ~ </Path>
            <Command color={terminalTextColors.white}>
              echo 'character: '{character.name}''
            </Command>
            <Cursor />
          </TerminalText>
        </InnerBody>
      </Body>
    </Main>
  )
}

export default Terminal

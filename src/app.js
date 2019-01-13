'use strict'
import color from 'color'
import path from 'path'

exports.decorateConfig = config => {
  const character = {
    name: 'x-23',
    side: 'hero',
    colors: {
      backgroundColor: '#7d929d',
      header: '#333f42',
      tabs: '#38464e',
      activeTabBottomColor: '#9b8463'
    },
    terminalTextColors: {
      black: '#000000',
      red: '#ED0C05',
      green: '#34E60F',
      yellow: '#E5D30F',
      blue: '#0A29CC',
      magenta: '#CD0DE8',
      cyan: '#07CCD9',
      white: '#FFFFFF',
      lightBlack: '#000000',
      lightRed: '#FF0D06',
      lightGreen: '#3AFF11',
      lightYellow: '#FFEB10',
      lightBlue: '#0C33FF',
      lightMagenta: '#E10EFF',
      lightCyan: '#08F0FF',
      lightWhite: '#FFFFFF'
    }
  }
  const colors = character.colors
  const primary = colors.backgroundColor
  const header = colors.header
  const fontColor = primary
  const tab = color(header).lighten(0.3)
  const activeTab = colors.tabs
  const activeTabBottomColor = colors.activeTabBottomColor
  const characterName = character.name
  const backgroundPath = path.resolve(__dirname, 'src/images')
  const backgroundContent =
    'url("file://' + backgroundPath + '/' + characterName + '.png") bottom right / contain no-repeat'
  const schemeBackgroundColor = color(primary)
    .alpha(0)
    .string()
  const schemeBorderColor = header
  const schemeCursorColor = colors.tabs
  const terminalTextColors = character.terminalTextColors
  const scheme = {
    backgroundColor: schemeBackgroundColor,
    borderColor: schemeBorderColor,
    cursorColor: schemeCursorColor,
    colors: terminalTextColors
  }
  return Object.assign({}, config, scheme, {
    css: `
      .hyper_main {
        background-color: ${primary};
      }
      .terms_terms {
        background: ${backgroundContent};
      }
      .header_shape, .header_appTitle {
        color: ${header};
      }
      .header_header, .header_windowHeader {
        background-color: ${header} !important;
      }
      .tabs_nav .tabs_list {
        border-bottom: 0;
      }
      .tabs_nav .tabs_title,
      .tabs_nav .tabs_list .tab_tab {
        color: ${fontColor};
        border: 0;
      }
      .tab_icon {
        color: ${fontColor};
        width: 15px;
        height: 15px;
      }
      .tab_icon:hover {
        background-color: ${primary};
      }
      .tab_shape {
        color: ${fontColor};
        width: 7px;
        height: 7px;
      }
      .tab_shape:hover {
        color: ${fontColor};
      }
      .tab_active {
        background-color: ${activeTab};
      }
      .tabs_nav .tabs_list .tab_tab:not(.tab_active) {
        background-color: ${tab};
      }
      .tabs_nav .tabs_list {
        color: ${fontColor};
      }
      .tab_tab {
        border-bottom: solid 4px ${header} !important;
        border-left: solid 2px ${header} !important;
      }
      .tab_active {
        border: none !important;
        border-left: solid 2px ${header} !important;
      }
      .tab_tab::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 4px;
        background-color: ${activeTabBottomColor};
        transform: scaleX(0);
        transition: none;
        -webkit-box-shadow: ${activeTabBottomColor};
      }
      .tab_tab.tab_active::before {
        transform: scaleX(1);
        transition: all 400ms cubic-bezier(0.0, 0.0, 0.2, 1)
      }
      .terms_terms .terms_termGroup .splitpane_panes .splitpane_divider {
        background-color: ${primary} !important;
      }
    `
  })
}
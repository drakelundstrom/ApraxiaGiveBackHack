

import { DARK_NAVY, ROYAL_BLUE, ROYAL_PURPLE, NEUTRAL_BLUE, 
    GOLD, SILVER, CREAM, LIGHT_PURPLE, BROWN, BURNT_ORANGE, 
    BRIGHT_RED, OFF_WHITE, BLACK, BURGUNDY, WHITE, LIGHT_TURQUOISE, GREY, LIGHT_BROWN, EGGSHELL, DARK_GREY, NAVY_BLUE } from '../Colors';
  
  import { Theme } from './Theme';
  export const darkBlueTheme = () : Theme => ({
      name : 'DarkBlueTheme',
    background: {
      layerOne: EGGSHELL,
      layerTwo: OFF_WHITE,
      layerThree: CREAM,
      layerFour: NEUTRAL_BLUE,
    },
    heading: {
      primary: DARK_NAVY,
      secondary: ROYAL_BLUE,
    },
    text: {
      primary: DARK_GREY,
      secondary: GREY,
      tertiary: LIGHT_BROWN,
      quaternary: BURNT_ORANGE,
      negative: BRIGHT_RED,
    },
  
    button: {
      border: {
        primary: OFF_WHITE,
        secondary: BROWN,
        negative: BURGUNDY,
      },
      text: {
        primary: OFF_WHITE,
        secondary: BROWN,
        negative: WHITE,
      },
      background: {
        primary: LIGHT_PURPLE,
        secondary: LIGHT_TURQUOISE,
        negative: BRIGHT_RED,
      },
    },
  
    common: {
      black: BLACK,
      white: WHITE,
      grey: GREY,
    },
  })
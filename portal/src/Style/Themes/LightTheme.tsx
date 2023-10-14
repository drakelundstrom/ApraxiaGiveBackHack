import {
	DARK_NAVY,
	ROYAL_BLUE,
	NEUTRAL_BLUE,
	CREAM,
	BROWN,
	BURNT_ORANGE,
	BRIGHT_RED,
	OFF_WHITE,
	BLACK,
	BURGUNDY,
	WHITE,
	LIGHT_TURQUOISE,
	GREY,
	LIGHT_BROWN,
	EGGSHELL,
	DARK_GREY,
	NAVY_BLUE,
} from '../Colors'

export const LightTheme = {
	name: 'LightTheme',
	background: {
		layerOne: EGGSHELL,
		layerTwo: CREAM,
		layerThree: OFF_WHITE,
		layerFour: NEUTRAL_BLUE,
	},
	heading: {
		primary: NAVY_BLUE,
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
			primary: GREY,
			secondary: BROWN,
			negative: BURGUNDY,
		},
		text: {
			primary: DARK_NAVY,
			secondary: BROWN,
			negative: WHITE,
		},
		background: {
			primary: CREAM,
			secondary: LIGHT_TURQUOISE,
			negative: BRIGHT_RED,
		},
	},

	common: {
		black: BLACK,
		white: WHITE,
		grey: GREY,
	},
}

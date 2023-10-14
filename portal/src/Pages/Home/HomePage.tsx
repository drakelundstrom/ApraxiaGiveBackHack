import styled from 'styled-components'
import picture from '../../assets/Hedgehog.png'
import { LightTheme } from '../../Style/Themes/LightTheme'
import { AppBox } from './Components/AppBox'

export const HomePage = (): JSX.Element => {
	return (
		<>
			<VerticalBox>
				<HeaderBox>
					<Header>Home</Header>
					<ProfileImage src={picture} alt='profile picture' />
				</HeaderBox>
				<AppBox />
				<AppBox />

				<AppBox />
				<AppBox />
				<AppBox />
			</VerticalBox>
		</>
	)
}

const Header = styled.h1`
	font-size: 3em;
`

const HeaderBox = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-around;
	align-items: center;
`

const VerticalBox = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: center;
`

const ProfileImage = styled.img`
	width: 15vh;
	border-radius: 50%;
	border: solid 4px ${LightTheme.button.border.primary};
`

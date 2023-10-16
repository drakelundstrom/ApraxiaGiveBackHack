import styled from 'styled-components'
import picture from '../../assets/Hedgehog.png'
import { LightTheme } from '../../Style/Themes/LightTheme'
import { AppBox } from './Components/AppBox'
import { DECISIONS_ROUTE, STEP_BY_STEP_ROUTE } from '../../Routes'
import StepByStepIcon from '../../assets/StepByStepIcon.svg'
import eigthBallIcon from '../../assets/eigthBallIcon.svg'
import FoodIcon from '../../assets/FoodIcon.svg'
import EyeIcon from '../../assets/EyeIcon.svg'
import DecisionsIcon from '../../assets/DecisionsIcon.svg'
import MailIcon from '../../assets/MailIcon.svg'

import { SignUpBox } from './Components/SignUpBox'

export const HomePage = (): JSX.Element => {
	return (
		<>
			<VerticalBox>
				<HeaderBox>
					<Header>Home</Header>
					<Header></Header>
					<ProfileImage src={picture} alt='profile picture' />
				</HeaderBox>
				<SignUpBox title='Get Updates' description='Join our mailling list to hear about our indegogo campaign.' picture={MailIcon} />
				<AppBox title='Step by Step' description='Breaking down overwelming challenges' redirectRoute={STEP_BY_STEP_ROUTE} picture={StepByStepIcon} />
				<AppBox title='Decisions' description='Friendly help making decisions' redirectRoute={DECISIONS_ROUTE} picture={DecisionsIcon} />
				<AppBox title='Finance Genie' description='(Not yet implimented): Checking if purchases will break the bank' redirectRoute={''} picture={eigthBallIcon} />
				<AppBox title='Outings' description='(Not yet implimented): Finding restaurants that meet diet and sensory needs' redirectRoute={''} picture={FoodIcon} />
				<AppBox title='Overload' description='(Not yet implimented): Automatic SOS call in overstimulating enviroments' redirectRoute={''} picture={EyeIcon} />
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

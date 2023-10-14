import styled from 'styled-components'
import picture from '../../assets/Hedgehog.png'
import { LightTheme } from '../../Style/Themes/LightTheme'
import { AppBox } from './Components/AppBox'
import { STEPS_ROUTE } from '../../Routes'
import StepByStepIcon from '../../assets/StepByStepIcon.svg'

export const HomePage = (): JSX.Element => {
	return (
		<>
			<VerticalBox>
				<HeaderBox>
					<Header>Home</Header>
					<ProfileImage src={picture} alt='profile picture' />
				</HeaderBox>
				<AppBox title='Step by Step' description='Breaking down overwelming challenges' redirectRoute={STEPS_ROUTE} picture={StepByStepIcon} />
				<AppBox title='Pick One' description='Friendly help making decisions' redirectRoute={STEPS_ROUTE} picture={StepByStepIcon} />
				<AppBox title='Magic 8 Ball' description='Checking if purchases will break the bank' redirectRoute={STEPS_ROUTE} picture={StepByStepIcon} />
				<AppBox title='Food with Friends' description='Finding restaurants that meet diet and sensory needs' redirectRoute={STEPS_ROUTE} picture={StepByStepIcon} />
				<AppBox title='Danger Will Robinson' description='Automatic SOS call in overstimulating enviroments' redirectRoute={STEPS_ROUTE} picture={StepByStepIcon} />
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

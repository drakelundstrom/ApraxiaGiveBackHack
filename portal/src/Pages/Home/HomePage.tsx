import styled from 'styled-components'
import picture from '../../assets/Hedgehog.png'
import { LightTheme } from '../../Style/Themes/LightTheme'
import { AppBox } from './Components/AppBox'
import { DECISIONS_ROUTE, STEP_BY_STEP_ROUTE } from '../../Routes'
import StepByStepIcon from '../../assets/StepByStepIcon.svg'

export const HomePage = (): JSX.Element => {
	return (
		<>
			<VerticalBox>
				<HeaderBox>
					<Header>Home</Header>
					<ProfileImage src={picture} alt='profile picture' />
				</HeaderBox>
				<AppBox title='Step by Step' description='Breaking down overwelming challenges' redirectRoute={STEP_BY_STEP_ROUTE} picture={StepByStepIcon} />
				<AppBox title='Pick One' description='Friendly help making decisions' redirectRoute={DECISIONS_ROUTE} picture={StepByStepIcon} />
				<AppBox title='Magic 8 Ball' description='(Not yet implimented): Checking if purchases will break the bank' redirectRoute={''} picture={StepByStepIcon} />
				<AppBox title='Food with Friends' description='(Not yet implimented): Finding restaurants that meet diet and sensory needs' redirectRoute={''} picture={StepByStepIcon} />
				<AppBox title='Danger Will Robinson' description='(Not yet implimented): Automatic SOS call in overstimulating enviroments' redirectRoute={''} picture={StepByStepIcon} />
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

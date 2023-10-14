import { BLACK, addOpacityToColor } from '../../../Style/Colors'
import { LightTheme } from '../../../Style/Themes/LightTheme'
import styled from 'styled-components'
import picture from '../../../assets/footsteps-sharp.svg'

export const AppBox = (): JSX.Element => {
	return (
		<AppBoxWrapper>
			<AppBoxImage src={picture} alt='footsteps' />
			<VerticalBox>
				<TitleText>Step By Step</TitleText>
				<DescriptionText>Breaking down the overwelming challenges</DescriptionText>
			</VerticalBox>
		</AppBoxWrapper>
	)
}

const AppBoxWrapper = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	background-color: ${LightTheme.background.layerTwo};
	max-width: 90%;
	padding: 1rem;
	box-shadow: 0px 0px 10px 3px ${addOpacityToColor(BLACK, 0.2)};
	border-radius: 1rem;
	margin: 1rem;
`

const AppBoxImage = styled.img`
	height: 15vh;
`
const VerticalBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
`

const TitleText = styled.div`
	font-size: 4vw;
	font-weight: 500;
	color: ${LightTheme.heading.primary};
	@media only screen and (max-width: 750px) {
		font-size: 30px;
	}
`
const DescriptionText = styled.div`
	font-size: 2vw;
	color: ${LightTheme.text.primary};
	text-align: start;
	@media only screen and (max-width: 750px) {
		font-size: 15px;
	}
`

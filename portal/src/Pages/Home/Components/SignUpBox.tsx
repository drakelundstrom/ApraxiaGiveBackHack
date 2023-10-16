import { BLACK, addOpacityToColor } from '../../../Style/Colors'
import { LightTheme } from '../../../Style/Themes/LightTheme'
import styled from 'styled-components'

type AppBoxProps = {
	readonly picture: string
	readonly title: string
	readonly description: string
}

export const SignUpBox = ({ picture, title, description }: AppBoxProps): JSX.Element => {
	return (
		<a href='http://eepurl.com/ingwrE' target='_blank'>
			<AppBoxWrapper>
				<AppBoxImage src={picture} alt='footsteps' />
				<VerticalBox>
					<TitleText>{title}</TitleText>
					<DescriptionText>{description}</DescriptionText>
					<DescriptionText>This app is a beta version and there are a lot more things to come!</DescriptionText>
				</VerticalBox>
			</AppBoxWrapper>
		</a>
	)
}

const AppBoxWrapper = styled.div`
	display: flex;
	justify-content: start;
	flex-wrap: wrap;
	background-color: ${LightTheme.background.layerTwo};
	width: 80vw;
	padding: 1rem;
	box-shadow: 0px 0px 10px 3px ${addOpacityToColor(BLACK, 0.2)};
	border-radius: 1rem;
	margin: 1rem;
`

const AppBoxImage = styled.img`
	height: 135px;
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
	text-align: start;
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

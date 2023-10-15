import { TaskResponse } from '../../Models/TaskResponse'
import { LightTheme } from '../../Style/Themes/LightTheme'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import loadingIcon from '../../assets/loadingIcon.gif'
import returnIcon from '../../assets/returnIcon.svg'
import arrowBackIcon from '../../assets/arrowBackIcon.svg'

import arrowForwardIcon from '../../assets/arrowForwardIcon.svg'

import shape0 from '../../assets/stepShapes/shape0.svg'
import shape1 from '../../assets/stepShapes/shape1.svg'
import shape2 from '../../assets/stepShapes/shape2.svg'
import shape3 from '../../assets/stepShapes/shape3.svg'
import shape4 from '../../assets/stepShapes/shape4.svg'
import shape5 from '../../assets/stepShapes/shape5.svg'
import shape6 from '../../assets/stepShapes/shape6.svg'
import shape7 from '../../assets/stepShapes/shape7.svg'
import shape8 from '../../assets/stepShapes/shape8.svg'
import shape9 from '../../assets/stepShapes/shape9.svg'
import shape10 from '../../assets/stepShapes/shape10.svg'
import shape11 from '../../assets/stepShapes/shape11.svg'
import { BLACK, addOpacityToColor } from '../../Style/Colors'

const shapeArray = [shape0, shape1, shape2, shape3, shape4, shape5, shape6, shape7, shape8, shape9, shape10, shape11]

type StepPageProps = {
	readonly taskInFocus: TaskResponse
	readonly clearTaskInFocus: () => void
}

export const StepPage = ({ taskInFocus, clearTaskInFocus }: StepPageProps): JSX.Element => {
	const [currentStep, setCurrentStep] = useState<number>(0)

	const [currentShape, setCurrentShape] = useState<string>(shapeArray[0])

	useEffect(() => {
		setCurrentShape(shapeArray[Math.floor(Math.random() * shapeArray.length)])
	})

	return (
		<>
			<BackIcon src={returnIcon} alt={'return to tasks page'} onClick={() => clearTaskInFocus()} />
			{taskInFocus.id == -1 ? (
				<StepBox>
					<LoadingText>Generating steps for following task:</LoadingText>
					<LoadingText>{taskInFocus.name}</LoadingText>

					<AppBoxImage src={loadingIcon} alt={'loading icon'} />
				</StepBox>
			) : (
				<StepBox>
					<LoadingText>{taskInFocus.steps[currentStep].name}</LoadingText>
					<AppBoxImage src={currentShape} alt={'random shape for decoration'} />
					<HorizontalBox>
						{currentStep !== 0 && <ArrowImages src={arrowBackIcon} alt={'arrow back'} onClick={() => setCurrentStep(currentStep - 1)} />}
						{currentStep !== taskInFocus.steps.length - 1 && <ArrowImages src={arrowForwardIcon} alt={'arrow forward'} onClick={() => setCurrentStep(currentStep + 1)} />}
					</HorizontalBox>
				</StepBox>
			)}
		</>
	)
}

const BackIcon = styled.img`
	height: 8vh;
	position: absolute;
	left: 1rem;
	top: 1rem;
`

const LoadingText = styled.div`
	font-size: 3vw;
	font-weight: 500;
	color: ${LightTheme.heading.secondary};
	text-align: start;
	@media only screen and (max-width: 750px) {
		font-size: 30px;
	}
`
const StepBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	height: 75vh;
	width: 80vw;
	margin-top: 5vh;
	max-width: 800px;
	background-color: ${LightTheme.background.layerTwo};
	border-radius: 30px;
	padding: 2rem;
	box-shadow: 0px 0px 10px 3px ${addOpacityToColor(BLACK, 0.2)};
`
const AppBoxImage = styled.img`
	height: 40vmin;
	hover {
		cursor: pointer;
	}
`
const HorizontalBox = styled.div`
	width: 100%;
	justify-content: space-evenly;
	display: flex;
`

const ArrowImages = styled.img`
	height: 6vw;
	min-height: 80px;
	:hover {
		cursor: pointer;
	}
`

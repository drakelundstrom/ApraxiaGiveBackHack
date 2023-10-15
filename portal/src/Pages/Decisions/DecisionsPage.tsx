import styled from 'styled-components'
import { LightTheme } from '../../Style/Themes/LightTheme'
import { BLACK, addOpacityToColor } from '../../Style/Colors'
import homeIcon from '../../assets/homeIcon.svg'
import { Link } from 'react-router-dom'
import { DecisionFormInput } from '../../Models/DecisionFormInput'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { DecisionResponse } from '../../Models/DecisionResponse'
import loadingIcon from '../../assets/loadingIcon.gif'
import { DecisionRequest } from '../../Models/DecisionRequest'
import { generateDecision } from '../../Services/DecisionService'

export const DecisionsPage = (): JSX.Element => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<DecisionFormInput>()

	const [decisionResponse, setDecisionResponse] = useState<DecisionResponse>({
		decision: '',
		justification: [],
	})

	const [isLoading, setIsLoading] = useState<boolean>(false)
	const makeNewDecisions = async (decisionFormInput: DecisionFormInput) => {
		setIsLoading(true)

		let optionsArray: string[] = []
		decisionFormInput.option1 && optionsArray.push(decisionFormInput.option1)
		decisionFormInput.option2 && optionsArray.push(decisionFormInput.option2)
		decisionFormInput.option3 && optionsArray.push(decisionFormInput.option3)
		decisionFormInput.option4 && optionsArray.push(decisionFormInput.option4)
		const decisionRequest: DecisionRequest = {
			situation: decisionFormInput.situation,
			context: decisionFormInput.context ? decisionFormInput.context : '',
			options: optionsArray,
		}
		const newDecisionResponse = await generateDecision(decisionRequest)
		setDecisionResponse(newDecisionResponse)
		setIsLoading(false)
	}

	return (
		<StepBox>
			<Link to={'/'}>
				<HomeIcon src={homeIcon} alt='home icon' />
			</Link>

			<form
				onSubmit={handleSubmit((formData) => {
					console.log(formData)
					makeNewDecisions(formData)
				})}
			>
				<StyledForm>
					<TopText>Making decisions is hard. Tell us about it:</TopText>
					<InputWrapperBox>
						<DescriptionText>What is the situation?</DescriptionText>
						<input type='text' {...register('situation', { required: true, maxLength: 1000 })} />
						<p>{errors.situation && 'This field has a limit of 1000 characters.'}</p>
					</InputWrapperBox>
					<InputWrapperBox>
						<DescriptionText>What information should we take into consideration when making the decision?</DescriptionText>
						<input type='text' placeholder='optional' {...register('context', { maxLength: 1000 })} />
						<p>{errors.context && 'This field has a limit of 1000 characters.'}</p>
					</InputWrapperBox>
					<HorizontalBox>
						<OptionBox>
							<DescriptionText>Option 1:</DescriptionText>
							<input type='text' placeholder='optional' {...register('option1', { maxLength: 1000 })} />
							<p>{errors.option1 && 'This field has a limit of 1000 characters.'}</p>
						</OptionBox>
						<OptionBox>
							<DescriptionText>Option 2:</DescriptionText>
							<input type='text' placeholder='optional' {...register('option2', { maxLength: 1000 })} />
							<p>{errors.option2 && 'This field has a limit of 1000 characters.'}</p>
						</OptionBox>
					</HorizontalBox>
					<HorizontalBox>
						<OptionBox>
							<DescriptionText>Option 3:</DescriptionText>
							<input type='text' placeholder='optional' {...register('option3', { maxLength: 1000 })} />
							<p>{errors.option3 && 'This field has a limit of 1000 characters.'}</p>
						</OptionBox>
						<OptionBox>
							<DescriptionText>Option 4:</DescriptionText>
							<input type='text' placeholder='optional' {...register('option4', { maxLength: 1000 })} />
							<p>{errors.option4 && 'This field has a limit of 1000 characters.'}</p>
						</OptionBox>
					</HorizontalBox>
					<input type='submit' />
					{isLoading && (
						<>
							<DecisionText>Making a decision . . . </DecisionText>
							<LoadingImage src={loadingIcon} alt={'loading icon'} />
						</>
					)}
					{decisionResponse.decision && decisionResponse.decision !== '' && (
						<>
							{decisionResponse.decision !== 'Error generating decision, please try again' ? (
								<>
									<DescriptionText>Here is a decision:</DescriptionText>
									<DecisionText>{decisionResponse.decision}</DecisionText>
									<DescriptionText>Here are some reasons for it:</DescriptionText>
									{decisionResponse.justification.map((justification) => (
										<DecisionText>- {justification}</DecisionText>
									))}
								</>
							) : (
								<DecisionText>{decisionResponse.decision}</DecisionText>
							)}
						</>
					)}
					<input type='reset' />
				</StyledForm>
			</form>
		</StepBox>
	)
}

const LoadingImage = styled.img`
	height: 20vmin;
`

const HomeIcon = styled.img`
	height: 8vh;
	position: absolute;
	left: 1rem;
	top: 1rem;
`

const StyledForm = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`

const StepBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	height: 75vh;
	width: 80vw;
	margin-top: 5vh;
	max-width: 800px;
	background-color: ${LightTheme.background.layerTwo};
	border-radius: 30px;
	padding: 2rem;
	box-shadow: 0px 0px 10px 3px ${addOpacityToColor(BLACK, 0.2)};
`
const TopText = styled.div`
	font-size: 3vw;
	font-weight: 500;
	color: ${LightTheme.heading.primary};
	text-align: start;
	@media only screen and (max-width: 750px) {
		font-size: 30px;
	}
`
const DescriptionText = styled.div`
	font-size: 1.5;
	color: ${LightTheme.heading.primary};
	text-align: start;
	@media only screen and (max-width: 750px) {
		font-size: 15px;
	}
`
const DecisionText = styled.div`
	font-size: 1.5;
	color: ${LightTheme.text.secondary};
	text-align: start;
	@media only screen and (max-width: 750px) {
		font-size: 15px;
	}
`
const HorizontalBox = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`

const OptionBox = styled.div`
	display: flex;
	flex-direction: column;
	width: 40%;
`

const InputWrapperBox = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`
// const StyledTextInput = styled.div`
// 	background-color: ${LightTheme.background.layerOne};
// 	color: ${LightTheme.text.primary};
// 	height: 4vh;
// 	border-radius: 10px;
// 	border: 1px solid ${LightTheme.button.border.primary};
// 	font-size: 1.2vw;
// 	@media only screen and (max-width: 750px) {
// 		font-size: 12px;
// 	}
// `

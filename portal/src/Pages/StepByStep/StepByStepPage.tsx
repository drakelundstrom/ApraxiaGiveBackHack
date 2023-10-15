// import { useState } from 'react'
import { TaskResponse } from '../../Models/TaskResponse'
import styled from 'styled-components'
import { LightTheme } from '../../Style/Themes/LightTheme'
import { BLACK, addOpacityToColor } from '../../Style/Colors'
import addIcon from '../../assets/addIcon.svg'
import homeIcon from '../../assets/homeIcon.svg'

import { Link } from 'react-router-dom'

export const StepsPage = (): JSX.Element => {
	const tasks: TaskResponse[] = []

	return (
		<>
			<Link to={'/'}>
				<HomeIcon src={homeIcon} alt='home icon' />
			</Link>
			<VerticalBox>
				<MarginBox>
					<TitleText>What task do you want to break down?</TitleText>
				</MarginBox>
				<TaskBoxWrapper>
					<AppBoxImage src={addIcon} alt='plus icon to add a new task' />
					<TitleText>Make a new task</TitleText>
				</TaskBoxWrapper>
				{tasks.map((task) => (
					<TaskBoxWrapper>
						<TitleText>{task.task}</TitleText>
					</TaskBoxWrapper>
				))}
				<TaskBoxWrapper></TaskBoxWrapper>
			</VerticalBox>
		</>
	)
}

const HomeIcon = styled.img`
	height: 8vh;
	position: fixed;
	left: 1 rem;
	top: 1rem;
`

const VerticalBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
`
const AppBoxImage = styled.img`
	height: 135px;
`

const TaskBoxWrapper = styled.div`
	display: flex;
	justify-content: start;
	align-items: center;
	flex-wrap: wrap;
	background-color: ${LightTheme.background.layerTwo};
	width: 80vw;
	padding: 1rem;
	box-shadow: 0px 0px 10px 3px ${addOpacityToColor(BLACK, 0.2)};
	border-radius: 1rem;
	margin: 1rem;
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
const MarginBox = styled.div`
	margin: 1rem;
`

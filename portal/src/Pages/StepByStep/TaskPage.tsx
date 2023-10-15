import { useState } from 'react'
import { TaskResponse } from '../../Models/TaskResponse'
import styled from 'styled-components'
import { LightTheme } from '../../Style/Themes/LightTheme'
import { BLACK, addOpacityToColor } from '../../Style/Colors'
import addIcon from '../../assets/addIcon.svg'
import homeIcon from '../../assets/homeIcon.svg'
import { useForm } from 'react-hook-form'

import { Link } from 'react-router-dom'
import { TaskRequest } from '../../Models/TaskRequest'
import { Button } from '../../Components/Button'
import { generateSteps } from '../../Services/TaskService'
import { StepPage } from './StepPage'
import { SampleTask } from './Components/sampleTask'

export const TaskPage = (): JSX.Element => {
	// const tasks: TaskResponse[] = []
	const [tasks, setTasks] = useState<TaskResponse[]>(SampleTask)
	const [isMakingTask, setIsMakingTask] = useState<boolean>(false)
	const [taskInFocus, setTaskInFocus] = useState<TaskResponse>({
		id: -1,
		steps: [],
		name: '',
	})
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<TaskRequest>()
	const makeNewTask = async (taskRequest: TaskRequest) => {
		setIsMakingTask(false)
		setTaskInFocus({
			id: -1,
			steps: [],
			name: taskRequest.name,
		})
		const newTask: TaskResponse = await generateSteps(taskRequest)
		setTaskInFocus(newTask)
		setTasks([newTask, ...tasks])
	}
	const clearTaskInFocus = () => {
		setTaskInFocus({
			id: -1,
			steps: [],
			name: '',
		})
	}

	return (
		<>
			{taskInFocus.name == '' ? (
				<>
					{isMakingTask ? (
						<form
							onSubmit={handleSubmit((taskRequest) => {
								makeNewTask(taskRequest)
							})}
						>
							<TitleText>Describe the task that you want to have broken down into steps:</TitleText>
							<input type='text' {...register('name', { required: true, maxLength: 200 })} />
							<p>{errors.name && 'This field has a limit of 200 characters.'}</p>

							<input type='submit' />
							<Button onClick={() => setIsMakingTask(false)}>Cancel</Button>
						</form>
					) : (
						<>
							<Link to={'/'}>
								<HomeIcon src={homeIcon} alt='home icon' />
							</Link>
							<VerticalBox>
								<MarginBox>
									<TitleText>What task do you want to break down?</TitleText>
								</MarginBox>
								<TaskBoxWrapper onClick={() => setIsMakingTask(true)}>
									<AppBoxImage src={addIcon} alt='plus icon to add a new task' />
									<TitleText>Make a new task</TitleText>
								</TaskBoxWrapper>
								{tasks.map((task) => (
									<TaskBoxWrapper onClick={() => setTaskInFocus(task)}>
										<TitleText>{task.name}</TitleText>
									</TaskBoxWrapper>
								))}
							</VerticalBox>
						</>
					)}
				</>
			) : (
				<StepPage clearTaskInFocus={clearTaskInFocus} taskInFocus={taskInFocus} />
			)}
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
	hover {
		cursor: pointer;
	}
`

export const TaskBoxWrapper = styled.div`
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
	:hover {
		cursor: pointer;
	}
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

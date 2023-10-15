import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DefaultPage } from './Pages/Default/DefaultPage'
import { HomePage } from './Pages/Home/HomePage'
import { TaskPage } from './Pages/StepByStep/TaskPage'
import { HOME_ROUTE, STEP_BY_STEP_ROUTE } from './Routes'

export const AppRouter = (): JSX.Element => (
	<BrowserRouter>
		<Routes>
			<Route path={HOME_ROUTE} element={<DefaultPage />}>
				<Route path='' element={<HomePage />} />
				<Route path={`${STEP_BY_STEP_ROUTE}`} element={<TaskPage />} />
				<Route
					path='*'
					element={
						<main style={{ padding: '1rem' }}>
							<h2>404: page not found</h2>
						</main>
					}
				/>
			</Route>
		</Routes>
	</BrowserRouter>
)

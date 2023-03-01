import { useState } from 'react'
import Counter from './components/Counter'
import { CounterProvider, initState } from './context/CounterContext'

function App() {
	return (
		<>
			<CounterProvider count={initState.count} text={initState.text}>
				<Counter>{(num: number) => <>Count is {num}</>}</Counter>
			</CounterProvider>
		</>
	)
}

export default App

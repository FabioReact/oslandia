import { useEffect, useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0)

	useEffect(() => {
		// componentDidMount
		console.log('Composant Counter créé')
		return () => {
			// le return du useEffect est comparable à la méthode componentWillUnmount (Classes)
			// Va s'éxécuter avant la destruction du composant
			console.log('Composant Counter détruit')
		}
	}, [])

	useEffect(() => {
		// componentDidMount + componentDidUpdate
		console.log('Counter changé', counter)
		return () => {
			// Va s'éxécuter lorsque avant que la valeur de counter change ET avant la destruction du composant
			console.log('Composant Counter détruit pour la valeur', counter)
		}
	}, [counter])

	const increment = () => {
    setCounter((counter) => counter + 1)
  }
  const updateValue = (value: number) => {
    setCounter((c) => c + value)
  }
	return (
		<>
			<button onClick={increment}>Incrementer - {counter}</button>
			<button onClick={() => updateValue(-1)}>Decrementer - {counter}</button>
		</>
	)
}

export default Counter
import { useEffect, useState, memo, useCallback, useMemo } from 'react'

type VisualCounterProps = {
  counter: number
}

const VisualCounter = ({ counter }: VisualCounterProps) => {
  return <p>Counter Value: {counter}</p>
}

const Title = ({ content }: { content: string }) => {
  console.log('Render of Title')
  return <h1>{content}</h1>
}

const MemoizedTitle = memo(Title)

const Button = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => {
  console.log('Render du button: ', children)
  return <button onClick={onClick}>{children}</button>
}

const MemoizedButton = memo(Button)

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

  const increment = useCallback(() => {
    setCounter((counter) => counter + 1)
  }, [])

  const updateValue = (value: number) => {
    setCounter((c) => c + value)
  }

  const findSmallestPrimeNumber = (n: number) => {
    console.log('Calculating...')
    return n / Math.random()
  }

  const [number, setnumber] = useState(50)

  const smallestPrimeNumber = useMemo(() => findSmallestPrimeNumber(number), [number])

  return (
    <>
      <MemoizedTitle content='Counter Component' />
      <VisualCounter counter={counter} />
      <p>
        {smallestPrimeNumber} -
        <button onClick={() => setnumber((n) => n + 50)}>Change Number</button>
      </p>
      <MemoizedButton onClick={increment}>Incrementer</MemoizedButton>
      <MemoizedButton onClick={() => updateValue(-1)}>Decrementer</MemoizedButton>
    </>
  )
}

export default Counter

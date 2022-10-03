import { useState } from 'react'
import classes from './changeBackground.module.css'

const colors = [
  'rgb(255 247 237)',
  'rgb(255 237 213)',
  'rgb(254 215 170)',
  'rgb(253 186 116)',
  'rgb(251 146 60)',
  'rgb(249 115 22)',
  'rgb(234 88 12)',
  'rgb(194 65 12)',
  'rgb(154 52 18)',
  'rgb(124 45 18)',
]

type ColorListProps = {
  callback: (index: number) => void
}

const ColorList = ({ callback }: ColorListProps) => {
  return (
    <div>
      {colors.map((color, index) => (
        <div
          onClick={() => callback(index)}
          key={index}
          className={classes.box}
          style={{
            backgroundColor: color,
          }}
        ></div>
      ))}
    </div>
  )
}

const ChangeBackground = (): JSX.Element => {
  const [index, setIndex] = useState(0)
  const updateIndex = (value: number) => {
    setIndex((previousIndex) => (previousIndex + value) % colors.length)
  }
  return (
    <section
      style={{
        backgroundColor: colors.at(index),
      }}
    >
      <h1>Test Background - {index}</h1>
      <button onClick={() => updateIndex(-1)}>Previous Color</button>
      <button onClick={() => updateIndex(1)}>Next Color</button>
      <ColorList callback={setIndex} />
    </section>
  )
}

export default ChangeBackground

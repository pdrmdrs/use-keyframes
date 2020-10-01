import * as React from 'react'
import useKeyframes from 'use-keyframes'

// Just to map the View -> div component as on the Native
function View(props: any) {
  return <div {...props}>{props.children}</div>
}

// The App component that uses the useKeyframes custom hook
function App() {
  const [opacity, timeInSeconds] = useKeyframes<number>({
    initialValue: 1,
    toValue: 0,
    timeInSeconds: 0.75
  })
  const style: React.CSSProperties = {
    width: 100,
    height: 100,
    background: 'gray',
    marginTop: '10px',
    marginLeft: '10px',
    float: 'left',
    opacity,
    position: 'relative',
    transition: `opacity ${timeInSeconds}s linear`
  }
  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'black',
        overflow: 'hidden'
      }}
    >
      <View style={style} />
      <View style={style} />
      <View style={style} />
      <View style={style} />
    </View>
  )
}

export default App

# use-keyframes

> Custom hook to simulate some basic use of the &#x60;@keyframes&#x60; on the CSS, but using only inline-style and JS

[![NPM](https://img.shields.io/npm/v/use-keyframes.svg)](https://www.npmjs.com/package/use-keyframes) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

With npm

```bash
npm install --save use-keyframes
```

or using yarn

```bash
yarn add use-keyframes
```

## Usage

```tsx
import React, { Component } from 'react'

import useKeyframes from 'use-keyframes'

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
```

## License

MIT © [pdrmdrs](https://github.com/pdrmdrs)

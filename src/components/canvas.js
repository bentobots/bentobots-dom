import React from 'react'

// jtSquare: 0,
// jtRound: 1,
// jtMiter: 2

const implementation = ({ ID } = {}) => {
}

class UI extends React.Component {
  render () {
    return <canvas id='canvas' width={300} height={300} />
  }
}

const spec = {
  name: 'HTML Canvas',
  description: 'returns a HTML canvas',
  implementation,
  ui: {
    component: UI
  },
  inputs: {
    ID: { default: 'canvas' }
  },
  outputs: {
  }
}

export default spec

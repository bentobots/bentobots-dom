import React from 'react'

// jtSquare: 0,
// jtRound: 1,
// jtMiter: 2

const implementation = ({ ID } = {}) => {
}

class UI extends React.Component {
  render () {
    return <canvas id='canvas' width={500} height={500} />
  }
}

const spec = {
  name: 'HTML Canvas',
  description: 'returns a HTML canvas',
  implementation,
  ui: {
    component: <UI state={{id: 'canvas'}} />
  },
  inputs: {
    ID: { default: 'canvas' }
  },
  outputs: {
  }
}

export default spec

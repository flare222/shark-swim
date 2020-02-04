import React from 'react'
import axios from 'axios'

import SharkCard from './SharkCard'

export default class SharkIndex extends React.Component {
  state = {
    sharks: []
  }

  async componentDidMount() {
    try {
      const res = await axios.get('/api/sharks')
      // console.log(res)
      this.setState({ sharks: res.data })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div className="index">
        <p>Here are the sharks I have been in the water with so far...</p>
        <div className="container">
          {this.state.sharks.map(shark => (
            <SharkCard key={shark._id} {...shark}/>
          ))}
        </div>
      </div>
    )
  }
}
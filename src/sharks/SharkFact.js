import React from 'react'
import axios from 'axios'

export default class SharkFact extends React.Component {
  state = {
    facts: [],
    randomFact: 'You are significantly more likely to die from heart disease than from a shark attack - in fact, go do some exercise!'
  }

  async componentDidMount() {
    try {
      const res = await axios.get('/api/facts')
      // console.log(res.data)
      this.setState({ facts: res.data })
    } catch (error) {
      console.log(error)
    }
  }

  handleClick = () => {
    const factIndex = Math.floor(Math.random() * this.state.facts.length)
    const randomize = this.state.facts[factIndex].fact
    this.setState({ randomFact: randomize })
  }

  render() {
    return (
      <div className="fact">
        <div className="random-fact">
          <p>{this.state.randomFact}</p>
        </div>
        <button
          className="button" 
          type="button"
          onClick={this.handleClick}>
          Random Fact!
        </button>
      </div>
    )
  }
}
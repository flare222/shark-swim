import React from 'react'
import axios from 'axios'

export default class SharkShow extends React.Component {
  state = {
    shark: null
  }

  async componentDidMount() {
    const sharkId = this.props.match.params.id
    try {
      const res = await axios.get(`/api/sharks/${sharkId}`)
      console.log(res.data)
      this.setState({ shark: res.data })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <h2>shark show</h2>
    )
  }
}
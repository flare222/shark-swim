import React from 'react'
import { Link } from 'react-router-dom'

const SharkCard = ({ commonName, image, location, _id }) => (
  <Link to={`sharks/${_id}`}>
    <div className="shark-card">
      <h2>{commonName}</h2>
      <h3>{location}</h3>
      <img src={image} alt={commonName}/>
    </div>
  </Link>
)

export default SharkCard
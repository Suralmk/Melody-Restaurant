import React from 'react'
import './subheading.css'
const SubHeading = ({title}) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <p className="subheading__text">{title}</p>
    </div>
  )
}

export default SubHeading

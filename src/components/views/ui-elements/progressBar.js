import React from 'react'

const ProgressBar = ({ value, max }) => (
  <progress value={value} max={max} className='progress is-small m-t-32' />
)

export default ProgressBar

import React from 'react'

function SelectedDive({ dive }) {
  return (
    <div className="card selected_dive">
      <span className="spanStyle">{`Dive Number: ${dive.num}`}</span>
      <span className="spanStyle">{`Date:${dive.date}`}</span>
      <span className="spanStyle">{`Location: ${dive.location}`}</span>
    </div>
  )
}

const spanStyle = {
  padding: '0 5px'
}

export default SelectedDive
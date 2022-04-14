import React from 'react'

function Dive({ diveInfo }) {
  return (
    <div className="dive-container">
      <div className="card">
        <p id="diveNumber">{`Dive Number: ${diveInfo.num}`}</p>
      </div>
      <div className="card">
        <p id="diveDate">{`Date: ${diveInfo.date}`}</p>
      </div>
      <div className="card">
        <p id="diveLocation">{`Location: ${diveInfo.location}`}</p>
      </div>
      <div className="card">
        <p id="psiStart">{`psi Start: ${diveInfo.psiStart}`}</p>
      </div>
      <div className="card">
        <p id="psiEnd">{`psi End: ${diveInfo.psiEnd}`}</p>
      </div>
      <div className="card">
        <p id="weight">{`Weight: ${diveInfo.weight} lb`}</p>
      </div>
      <div className="card">
        <p id="airTemp">{`Air Temperature: ${diveInfo.airTemp} Deg-f`}</p><br />
        <p id="surfaceTemp">{`Surface Temperature: ${diveInfo.surfaceTemp} Deg-f`}</p><br />
        <p id="bottomTemp">{`Bottom Temperature: ${diveInfo.bottomTemp} Deg-f`}</p>
      </div>
      <div className="card">
        <p id="depth">{`Depth: ${diveInfo.depth} ft`}</p>
      </div>
      <div className="card">
        <p id="bottomTime">{`Bottom Time: ${diveInfo.bottomTime} min`}</p><br />
        <p id="safetyStopTime">{`Safety Stop Time: ${diveInfo.safetyStopTime} min`}</p>
      </div>
    </div>
  )
}

export default Dive
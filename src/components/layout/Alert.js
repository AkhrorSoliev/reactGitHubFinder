import React from 'react'

function Alert({ alert }) {
  return (
    alert !== null && (
      <div class={`alert alert-${alert.type}`} role="alert">
        <i className="fas fa-info-circle" />
        {alert.msg}
      </div>
    )
  )
}

export default Alert

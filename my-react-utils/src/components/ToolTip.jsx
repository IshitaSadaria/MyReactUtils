import React from 'react'

const ToolTip = ({text, children}) => (
  <div className='tooltip'>{children}
  <span className='tooltip-text'>{text}</span>
  </div>
)

export default ToolTip
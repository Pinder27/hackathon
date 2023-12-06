import React from 'react'
import ReactTooltip from 'react-tooltip';

export default function ToolTip({ id, children, content }) {
  return (
    <div>
      <span data-tip data-for={id}>
      {children}
    </span>
    <ReactTooltip id={id} place="top" effect="solid">
      {content}
    </ReactTooltip>
    </div>
  )
}

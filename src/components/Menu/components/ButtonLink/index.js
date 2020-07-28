import React from 'react';

export default function ButtonLink(props) {

  const {href, className, children} = props
  
  return (
    <a href={href} className={className}>
      {children}
    </a>
  )
}
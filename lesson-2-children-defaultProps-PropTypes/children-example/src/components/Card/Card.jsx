import React from 'react'
import './card.css';

export default function Card({children}) {
    console.log('children', children);
  return children && (
    <div className='card'>{children}</div>
  )
}

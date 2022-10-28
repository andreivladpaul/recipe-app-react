import React from 'react'
import style from '../css/card-style.css'

export default function Card(props) {
  return (
    <div className='recipe'>
        <div className='gradient'></div>
        <h4 className='recipe__title'>{props.title}</h4>
        <img src={props.img} alt="" />
    </div>
  )
}

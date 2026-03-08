import React from 'react'
import RightCardContents from './RightCardContents'

const RightCard = (props) => {
  return (
    <div className='h-full w-80 rounded-4xl relative overflow-hidden shrink-0'>
        <img className='h-full w-full object-cover ' src={props.img} alt=""/>
       <RightCardContents tag={props.tag} intro={props.intro} id={props.id}/>
    </div>
   
  )
}

export default RightCard
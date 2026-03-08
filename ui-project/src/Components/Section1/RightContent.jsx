import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {

  return (
    <div id='right' className='h-full flex rounded-4xl overflow-x-auto flex-nowrap gap-10 p-6 w-2/3'>
     {props.users.map(function(elem,idx) {
      return <RightCard img = {elem.img} intro = {elem.intro} tag={elem.tag}  key={idx} id={idx}/>
     }) }
    </div>
  )
}

export default RightContent
import React from 'react'
import Section1 from './Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'

const App = () => {
  const users = [
    {img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi temporibus cupiditate cum assumenda necessitatibus quidem!', 
      tag:'Satisfied'},
    
      {img:'https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi temporibus cupiditate cum assumenda necessitatibus quidem!', 
      tag:'Underserved'},

      {img:'https://images.unsplash.com/photo-1507206130118-b5907f817163?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi temporibus cupiditate cum assumenda necessitatibus quidem!', 
      tag:'Underbanked'},
  ]
  return (
    <div>
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}

export default App
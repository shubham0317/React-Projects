import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' py-6 px-10 bg-blue-900 flex justify-between items-center'>
      <Link to='/' className='font-medium text-2xl'>Media Search</Link>
    <div className='flex gap-5 text-xl items-center'>
        <Link to='/'>Search</Link>
      <Link to='/collection'>Collection</Link>
    </div>
    </div>
  )
}

export default Navbar
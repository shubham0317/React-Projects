import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCollection, removeToast } from '../redux/Features/collectionSlice'

const Collectioncard = ({item}) => {
    const dispatch = useDispatch()

    const removeFromCollection = (item) => {
        dispatch(removeCollection(item.id))
        dispatch(removeToast());
    }

  return (
  <div className='w-[18vw] h-80 relative bg-white rounded-xl overflow-hidden'>
    <a target='_blank' href={item.url} className='h-full '>
        {item.type == 'photo' ? <img src={item.src} className='h-full w-full object-cover object-center'></img>:''}
    {item.type == 'video' ? <video autoPlay loop muted  src={item.src}  className='h-full w-full object-cover object-center'></video>:''}
    {item.type == 'gif' ? <img src={item.src} className='h-full w-full object-cover object-center'></img>:''}
    </a>

      <div id='bottom' className= 'flex justify-between items-center  w-full px-4 py-6 absolute bottom-0 text-white gap-3'>
      <h2 className='text-lg font-semibold capitalize h-14 overflow-hidden'>{item.title}</h2>
      <button onClick={() => {
        removeFromCollection(item)
      }} className='bg-indigo-600 active:scale-95 text-white rounde px-3 py-2 font-medium cursor-pointer'>Remove</button>
      </div>
    </div>
  )
}

export default Collectioncard
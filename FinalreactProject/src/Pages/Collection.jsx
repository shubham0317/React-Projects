import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Collectioncard from '../components/Collectioncard'
import { clearCollection } from '../redux/Features/collectionSlice';

const Collection = () => {
  const dispatch = useDispatch();
  const collection = useSelector(state => state.collection.items)
  const clearCollectioPg = () => {
    dispatch(clearCollection());
  }
  return (
   <div className=' overflow-auto px-5 py-6'>
  {collection.length > 0 ?  <div className='flex justify-between mb-6'>
       <h2>Your Collection</h2>
       <button onClick={() => {
        clearCollectioPg()
       }} className=' active:scale-95 transition cursor-pointer bg-red-600 px-5 py-2 text-base font-medium rounded'>Clear Collection</button>
   </div> : "Your Collection is Empty"}
     <div className="flex justify-start w-full flex-wrap gap-6 " >
     {collection.map((item,idx) => {
        return <div key={idx}>
          <Collectioncard item={item}/>
        </div>
      })}
    </div>
   </div>
  )
}

export default Collection
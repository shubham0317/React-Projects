import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../redux/Features/searchSlice'

const Tabs = () => {
const tabs = ['photos','videos','gif']

const dispatch =  useDispatch()

const activeTab = useSelector((state) => state.search.activeTab);
console.log(activeTab);

  return (
    <div className='flex gap-5 p-10'>
        {tabs.map(function(elem,idx){
            return <button 
              className= {`${(activeTab == elem? 'bg-blue-700': 'bg-gray-600')} transition px-5 py-2 rounded uppercase cursor-pointer active:scale-95`}
             key={idx}
             onClick={() => {
               dispatch(setActiveTab(elem))  //here we are clicking the element the value of these element will dispatched to state
             }}
             >{elem}
             </button>
        })}
    </div>
  )
}

export default Tabs
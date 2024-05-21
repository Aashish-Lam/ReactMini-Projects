import React from 'react'

const Friend = ({friendTips,onFriendTips}) => {
    function handleTips(e){
        onFriendTips(Number(e.target.value))
    }
  return (
    <>
    <span className='m-5'>
        Friend Review
    </span>
        <select name="" id="" value={friendTips} onChange={handleTips} className='text-center rounded-md p-3 bg-[#E5E5E5] ' >
            <option value={0}>Dissatisfied</option>
            <option value={5}>Okay</option>
            <option value={10}>Decent</option>
            <option value={20}>Amazing</option>
        </select>
    </>
   
  )
}

export default Friend
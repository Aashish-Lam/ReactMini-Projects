import React from 'react'

const Amount = ({bill,onBill}) => {
  function handleBill(e){
    const temp= Number(e.target.value)
    onBill(temp)
  }
  return (
    <div className='flex justify-center items-center p-7 m-9 '>
      <p className='my-6 mx-6'>Bill Amount </p>
      <input type="number" name="" id="" onChange={handleBill} className='text-center rounded-md py-3  bg-[#E5E5E5]'
      value={bill}

      />
     
    </div>
  )
}

export default Amount
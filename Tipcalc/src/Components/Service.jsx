import React from 'react'
const TipList=[
{
    id:1,
    title:"Dissatisfied",
    value:0
},
{
    id:2,
    title:"Okay",
    value:5
},
{
    id:3,
    title:"Decent",
    value:10
},{
    id:4,
    title:"Amazing",
    value:20
}
]

const Service = ({ServiceTips,onServiceTips}) => {
  return (
   <>
   <span className='m-5'>
    Your review
   </span>
   <select name="" id="" value={ServiceTips} onChange={(e)=>(onServiceTips(Number(e.target.value)))} 
   className='text-center rounded-md p-3  bg-[#E5E5E5] ' 
   >
    {
       TipList.map((ele,i)=>(
        <option value={ele.id} key={i}>
        {ele.value} {ele.title}
        </option>
       ))
    }
    </select>
    </>
  )
}

export default Service
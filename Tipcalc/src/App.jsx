import { useState } from 'react'
import Friend from './Components/Friend'
import './App.css'
import Amount from './Components/Amount'
import Service from './Components/Service'

function App() {
  const[bill,setbill]=useState(0)
  const[friendTips,setfriendTips]=useState(2)
  const[ServiceTips,setServiceTips]=useState(4)
  let avg;
  avg=Number((friendTips+ServiceTips)/2)
  let Total;
  Total=Number(((avg/100)*bill) +bill)
 return(
  <>
   <Friend friendTips={friendTips} onFriendTips={setfriendTips}/>
   <Service ServiceTips={ServiceTips} onServiceTips={setServiceTips}/>
    <Amount bill={bill} onBill={setbill}/>
      <Calculate bill={bill} avg={avg}  Total={Total}  setbill={setbill} setfriendTips={setfriendTips} setServiceTips={setServiceTips}/>
  </>
 )
}
function Calculate({bill,avg,Total,setbill,setfriendTips,setServiceTips}){
  return(
    <>
    {(bill!==0) ?
      <>
      <div>({bill} + {avg}%)</div>
      <div className='m-4 text-xl'>
      💵 Total Amount : ${Total}
        </div>
       <Button  setbill={setbill} setfriendTips={setfriendTips} setServiceTips={setServiceTips}/>
        </>
     :""

    }
   
   </>
  )
}
function Button({setbill,setfriendTips,setServiceTips}){
function Reset(){
  setbill(0);
  setfriendTips(0);
  setServiceTips(0);
}
return(
  <button onClick={Reset}
  className='p-5 bg-slate-400 rounded-md'>
    Reset
  </button>
)
}
export default App

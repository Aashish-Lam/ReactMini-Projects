import React, { useState } from 'react'
import Button from './Button'

export const FormAddFriend = ({onAddFriend,showAddFriend}) => {
const[name,setName]=useState("")
const[image,setImage]=useState("https://i.pravatar.cc/48")
function handleSubmit(e){
  e.preventDefault();
  console.log(name)
  if(!name ||!image) return
  const id=crypto.randomUUID();
   const newFriend ={
    id,
    name,
    image: `${image}?=${id}`,
    balance:0,
 
   };
  onAddFriend(newFriend)

  
   setImage("https://i.pravatar.cc/48?")
   setName('')
      
}
  return (
  
    <>
        <form className="form-add-friend" onSubmit={handleSubmit}>
      <label htmlFor=""> 🤵Add Friend</label>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
      <label htmlFor="">🌄 Image URL</label>
      <input type="text" value={image} onChange={(e)=>setImage(e.target.value)}/>
      <Button>Add</Button>
    </form>
    </>
  )
}

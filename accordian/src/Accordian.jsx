import React, { useState } from 'react'
const faqs = [
    {
      title: "Where are these chairs assembled?",
      text:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
    },
    {
      title: "How long do I have to return my chair?",
      text:
        "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
    },
    {
      title: "Do you ship to countries outside the EU?",
      text:
        "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
    }
  ];
const Accordian = (faq) => {
  return (
    <div className='accordion'>Accordian
    {faqs.map((el,i)=><AccordianItem title={el.title} text={el.text} num={i+1} key={i}/>)}
    </div>
   
  )
}

function AccordianItem({num,title,text})
{
    const[Toggle,setToggle]=useState(false)
function handleToggle(params) {
        setToggle(!Toggle)
        console.log(Toggle)
   
}
    return(<>
        {Toggle ?
            <div className='item open'>
          <p className='number'>0{num}</p>
       <p className='title text'>{title}</p>
       <p className='icon' onClick={handleToggle}>-</p>
       <p className='content-box'>
        <ul>
           
                {text}
        </ul>
       </p>
       
        </div>
        :
        <div className='item'>
        <p className='number'>0{num}</p>
       <p className='title'>{title}</p>
       <p className='icon' onClick={handleToggle}>+</p>
       </div>
        }
   </>
    )
}

export default Accordian
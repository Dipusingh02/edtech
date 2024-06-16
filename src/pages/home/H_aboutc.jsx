import React from 'react'
import './h_aboutc.css';

const Hfeature =({
numbertitle,
texttitle
})=>{
    return(
<div className='hfeature'>
<div>{numbertitle}</div>
<div>{texttitle}</div>
</div>
    );
};
const HfeatureData =[
    {
numbertitle:'150+',
texttitle:'STUDENTS'
    },
    {
numbertitle:'10+',
texttitle:'INSTRUCTORS'
    },
    {
numbertitle:'5+',
texttitle:'NO. OF COURSES'
    },
    {
numbertitle:'300+',
texttitle:'HOURS OF LEARNING'
    },
]
const H_aboutc = () => {
  return (
    <div className='hcabout-container'>
      {
        HfeatureData.map((item,index)=> ( 
            <Hfeature 
            key={index}
            numbertitle={item.numbertitle}
texttitle={item.texttitle}
/>
        ))
      }
    </div>
  )
}

export default H_aboutc

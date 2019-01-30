import React from 'react'

export default function Featured(props) {
    
    console.log(props);
    
    const getSlides = (props) =>{
        if(props.slides){
            return props.slides.map( slide =>{
                return(
                    <h4 key={slide.id}>{slide.topic}</h4>
                )
            })
        }
    }

  return (
    <div>
        { getSlides(props) }
    </div>
  )
}

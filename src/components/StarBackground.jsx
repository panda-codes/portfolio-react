import React, { useEffect, useState } from 'react'

const StarBackground = () => {


    //a star is an array of objects that have the following values;
    // id, size, x, y, opacity, animationDuration

    const [stars, setStars] = useState([]);

    useEffect(()=>{
        generateStars();
    }, []);//This is immediately calling the generate stars function once the component loads

    const generateStars=()=>{

        const numberOfStars = Math.floor(
            (window.innerWidth * window.innerHeight)/10000
        )

    const newStars = [];

    for(let i=0; i < numberOfStars; i++){
        newStars.push({
            id:i,
            size:Math.random() * 3 + 1,//this adds different sizes of stars between 1-4 px
            x: Math.random() * 100,
            y: Math.random() * 100,
            opacity: Math.random() * 0.5 + 0.5,
            animationDuration: Math.random() * 4 + 2,
        })
    }
    setStars(newStars);
    }


  return (
    <div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>
      {stars.map((star)=>(
        <div key={star.id} className='star animate-pulse-subtle' style={{
            width: star.size+"px",
            height: star.size+"px",
            left: star.x+"%",
            top: star.y+"%",
            opacity: star.opacity,
            animationDuration: star.animationDuration+"s",

        }}/>
      ))}
    </div>
  )
}

export default StarBackground

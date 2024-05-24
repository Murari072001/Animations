import React, { useRef, useEffect, memo } from 'react';
import { gsap } from 'gsap';
// import image1 from "./keno_balls/ball_1.png"
const ComplexAnimation = ({xVal,number,ind}) => {
  const boxRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    const animation =tl.fromTo(boxRef.current,{x:1530,y:100},{y:320,rotation:-360,duration:0.3,ease:'none'})
    .to(boxRef.current,{x:1460,y:410,rotation:-720,duration:0.1,ease:'none'})
    .to(boxRef.current,{x:xVal,rotation:-1080,duration:0.4,ease:'none'})
   return ()=>{
    animation.kill()
   }
  }, [xVal]);

  return (
    
      <img
      src={number}
      id='smallbox'
        ref={boxRef}
        style={{
          width: '45px',
          height: '45px',
          borderRadius:"50%"
        }}
      ></img>
  );
};

export default memo(ComplexAnimation);

import React, { useRef, useEffect, memo } from 'react';
import { gsap } from 'gsap';
// import image1 from "./keno_balls/ball_1.png"
const ComplexAnimation = ({xVal,number,ind}) => {
  const boxRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    const animation =tl.fromTo(boxRef.current,{x:1675,y:100},{y:400,rotation:-360,duration:0.3,ease:'none'})
    .to(boxRef.current,{x:1620,y:460,rotation:-720,duration:0.05,ease:'none'})
    .to(boxRef.current,{x:xVal,y:470,rotation:-1080,duration:0.4,ease:'none'})
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
          width: '65px',
          height: '65px',
          borderRadius:"50%"
        }}
      ></img>
  );
};

export default memo(ComplexAnimation);

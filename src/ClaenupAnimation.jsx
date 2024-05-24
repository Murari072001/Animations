import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const CleanupAnimation = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    const animation = gsap.to(boxRef.current, { rotation: 360, duration: 2 });

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div>
      <div
        ref={boxRef}
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: 'green',
        }}
      ></div>
    </div>
  );
};

export default CleanupAnimation;

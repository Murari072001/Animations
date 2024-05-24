import React, { useCallback, useEffect, useState } from "react";
import ComplexAnimation from "../ComplexAnimation";
import image from "./image.png";

const MainBoard = () => {
  let [allballs, setBalls] = useState([]);
  let [renderedBalls, setRenderedBalls] = useState([]);

  const getRandom = (temp) => {
    let ballNum = Math.ceil(Math.random() * 80);
    if (temp.includes(ballNum)) {
     return getRandom(temp);
    }
    else 
    return ballNum
  };

  const roll =()=>{
    setBalls([])
    setRenderedBalls([]);
    let temp=[]
    for (var i = 1; i <= 20; i++) {
        temp.push(getRandom(temp))
      }
      setTimeout(()=>setBalls((oldballs)=>[...temp]),1000)
  }
  useEffect(() => {
    if (allballs.length > 0) {
      let timeoutId = null;
      allballs.forEach((ele, ind) => {
        timeoutId = setTimeout(() => {
          setRenderedBalls((prevBalls) => [...prevBalls, ele]);
        }, ind * 500); // 1 second delay between each ball
      });
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [allballs]);
  const images = require.context("../keno_balls", true);
  const allImages = images.keys().map((image) => images(image));
  
  return (
    <div id="mainBoard">
      <div style={{ textAlign: "center", padding: "10%" }}>
        <img id="pipe" src={image} alt="" />
        <button
          className="rollbtn btn btn-primary"
          onClick={() => {
            roll();
          }}
        >
          Roll Balls
        </button>
      </div>
      {/* {allballs.length !== 0 &&
        allballs.map((ele, ind) => {
          return (
            <ComplexAnimation
            ind={ind}
              xVal={280 + ind * 50}
              number={allImages[ele-1]}
            ></ComplexAnimation>
          );          
        })} */}
        {renderedBalls.length !== 0 &&
        renderedBalls.map((ele, ind) => {
          return (
            <ComplexAnimation
              ind={ind}
              xVal={280 + ind * 50}
              number={allImages[ele - 1]}
            ></ComplexAnimation>
          );
        })}
    </div>
  );
};

export default MainBoard;

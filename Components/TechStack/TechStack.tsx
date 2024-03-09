import React from 'react'
import Marquee from "react-fast-marquee";
import { workData1 } from "./Data";

export const TechStack = () => {
  let speed:number = 60;
  let gradientColor:any = [34, 38, 41];
  return (
    <div id='techstack'>
      <p className='heading'>Tech Stack</p>
      <div className='tech-container'>
        <div>
          <Marquee speed={speed} direction="left" gradientColor={gradientColor} gradientWidth={200}>
            {workData1?.map((item) => (
              <div className='tech-box'>
                <img className='stack-img' src={item?.image} />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  )
}

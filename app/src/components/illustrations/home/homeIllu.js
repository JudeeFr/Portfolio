import React from "react";
import Cupcake from "./cupcake";
import Judee from "./judee"
import Bird from "./bird"
import Globe from "./globe";
import './style.css'

export default function homeIllu() {
  return (
      
        <svg className='judee-portrait' role='img' viewBox="0 0 470 530" version="1.1"
     				xmlns="http://www.w3.org/2000/svg" xmlnsXlink= "http://www.w3.org/1999/xlink"
					width="470" height="530">
						<title>Portrait illustration of Judee with a bird, a cupcake and some travel dreams</title>
                        <Judee/>                
						<g className='svg-floating'>
							<Globe/>
						</g>
						<g className='svg-floating'>
							<Bird/>
						</g>
						<g className='svg-floating'>
							<Cupcake/>
                            
						</g>						
					</svg>
          
      
  );
}

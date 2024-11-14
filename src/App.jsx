import HorizontalScrollCarousel from "./componentes/Hero";
import { useEffect, useRef, useState } from "react";
import React from "react";
import Picture from "./componentes/Picture";


const App = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const [scrollEffect, setScrollEffect] = useState(1);
  const [textPos, setTextBehind] = useState(false);
  
  const carouselRef = useRef(null);
  const nameIdRef = useRef(null);


  
  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current && nameIdRef.current) {
        const carouselTop = carouselRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
       
        if (carouselTop < windowHeight && carouselTop > windowHeight * 0.7) {
          const effectStrength = (windowHeight * 0.7 - carouselTop) / (windowHeight * 0.3);
          setScrollEffect(1 - effectStrength);
          setTextBehind(true);
        } else if (carouselTop <= windowHeight * 0.7) {
          setScrollEffect(0); 
          setTextBehind(true);
        } else {
          setScrollEffect(1);
          setTextBehind(false);
        }
      }
    };

    setTimeout(() => setFadeIn(true), 350);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

return (
    <>
    <div className="bg-neutral-100">
      <div className="grid h-[100vh] gap-5 md:justify-around lg:items-center justify-center">
        <div className="grid grid-cols-2 h-[20vh] items-center justify-evenly">

          <div className="flex gap-3 items-center">
            <svg  xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path fill="#020202" fillRule="evenodd" d="M9.206 3.182A9.25 9.25 0 0 0 2.78 11.25h4.48c.033-1.096.135-2.176.305-3.2c.207-1.254.515-2.41.91-3.4a9.3 9.3 0 0 1 .731-1.468M12 1.25a10.75 10.75 0 1 0 0 21.5a10.75 10.75 0 0 0 0-21.5m0 1.5c-.261 0-.599.126-.991.532c-.396.41-.791 1.051-1.141 1.925c-.347.869-.63 1.917-.824 3.089c-.155.94-.25 1.937-.282 2.954h6.476a22.5 22.5 0 0 0-.282-2.954c-.194-1.172-.477-2.22-.824-3.089c-.35-.874-.745-1.515-1.14-1.925c-.393-.406-.73-.532-.992-.532m4.74 8.5a24 24 0 0 0-.305-3.2c-.207-1.254-.515-2.41-.91-3.4a9.3 9.3 0 0 0-.732-1.468a9.24 9.24 0 0 1 3.748 2.277a9.25 9.25 0 0 1 2.678 5.791zm-1.502 1.5H8.762c.031 1.017.127 2.014.282 2.954c.194 1.172.477 2.22.824 3.089c.35.874.745 1.515 1.14 1.925c.393.406.73.532.992.532c.261 0 .599-.126.991-.532c.396-.41.791-1.051 1.141-1.925c.347-.869.63-1.917.824-3.089c.155-.94.25-1.937.282-2.954m-.444 8.068c.27-.434.515-.929.73-1.468c.396-.99.704-2.146.911-3.4a24 24 0 0 0 .304-3.2h4.48a9.25 9.25 0 0 1-6.426 8.068m-5.588 0a9.3 9.3 0 0 1-.73-1.468c-.396-.99-.704-2.146-.911-3.4a24 24 0 0 1-.304-3.2H2.78a9.25 9.25 0 0 0 6.425 8.068" 
            clipRule="evenodd" />
            </svg>
            <small id="timer" className="text-neutral-900"></small>
        
          </div>
        <small className="flex flex-col gap-1 justify-center h-4">
          <a href="mailto:david@davidpuigfotografía.com?subject=Presupuesto%20Proyecto" className="text-neutral-700 hover:text-black border-b-2 border-neutral-700 hover:border-black w-max">
          CONTACTO
          </a>
        </small>
      </div>
        <small className="font-bold md:text-2xl lg:mb-6 uppercase text-base text-neutral-800">FOTO
          <p className={`text-xs ${
            fadeIn ? "opacity-100 translate-y-0" : "opacity-50 translate-y-5"}`}>
            Montevideo, Madrid, Barcelona
          </p>
        </small>
        <div
          ref={nameIdRef}
          style={{
            opacity: scrollEffect,
            transform: `translateY(${(1 - scrollEffect) * 20}px)`,
            transition: "opacity 0.3s ease, transform 0.5s ease",
            position: "fixed",
            zIndex: textPos ? 10 : 70,
          }}
          className=
          "custom text-6xl w-[100vw] mt-4 mb-3 text-center md:text-8xl lg:text-9xl bottom-0 font-bold uppercase text-neutral-800 transition-all duration-1000">
          
          David Puig
        </div>
      </div>
      <div 
      ref={carouselRef}
      className="">
      
      <HorizontalScrollCarousel />
      </div>
      <div className="flex flex-col py-6 md:py-9 h-48 mx-4 lg:items-center">
        <span className="font-semibold uppercase text-xl md:text-2xl lg:text-3xl text-neutral-800">
          DAVID PUIG PÉREZ
          <p className="text-sm text-neutral-800">FOTÓGRAFO</p>
        </span>
        <p className="p-2 custom-font text-base md:text-xl lg:text-2xl text-neutral-800">De mi profesión solo puedo decir que es la más apasionante del mundo</p>
      </div>
    </div>
    <Picture>
      
    </Picture>
    <div
     style={{
      opacity: scrollEffect
     }}
     className={`text-neutral-100 w-7 animate-bounce absolute z-[779] bottom-[10%] right-0`}
     id="svg-down-arrow">
    <svg xmlns="http://www.w3.org/2000/svg" 
        width="1em" height="1em" viewBox="0 0 24 24">
        <path fill="currentColor" d="M5 19V8h2v9h9v2zm5-5V3h2v9h9v2z"/></svg>
    </div>
    </>
  );
};


export default App;

window.addEventListener('DOMContentLoaded', startTime());

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  if (document.getElementById('timer')) document.getElementById('timer').innerHTML =  h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}


import React, { useState,useEffect } from 'react'
import App from '../App';

const Presite = () => {

    const [loadingComplete, setLoadingComplete] = useState(false);
    const [startFadeOut, setStartFadeOut] = useState(false);

      useEffect(() => {
        const bar = document.getElementById('percent-bar');
        const total = document.getElementById('percent-total');
        const container = document.getElementById('cont-loader');
        function loadingBarPage() {
            for (let i = 0; i<= 100; i+= 4) {
            setTimeout (() => {
            bar.style.width = `${i}%`;
            total.innerHTML = `${i}`;
        
            if (i === 100) {
                
                setTimeout(() => {
                setStartFadeOut(true);
                    setTimeout(() => setLoadingComplete(true), 1000);
                    container.style.opacity = '0.8'
                }, 200);
            }
        }, i * 20)
        }
        return 5;
      }
      loadingBarPage();
      },[])

  return (
    <>
    <div id="cont-loader" className={`flex flex-col h-[100vh] overflow-hidden bg-slate-950 w-full justify-between transition-all duration-1000 ${
        startFadeOut ? 'opacity-0' : ''
      }`}>
        <section className={`bg-slate-50 transition-all duration-1200 w-0 h-3 ${startFadeOut ? 'translate-y-[-120px] opacity-0' : ''}`} id="percent-bar"></section>
        <section className={`text-slate-50 mb-4 text-right transition-all duration-1200 ${startFadeOut ? '-translate-y-[-200px] opacity-0' : ''}`} id="percent-total"></section>
    </div>
    <div
        className={`absolute inset-0 transition-colors duration-1000 ${
          startFadeOut ? 'bg-black' : 'bg-slate-100'
        }`}
        style={{ opacity: loadingComplete ? 1 : 0 }}
      >
        {loadingComplete && <App />}
      </div>
    </>
  )
}

export default Presite
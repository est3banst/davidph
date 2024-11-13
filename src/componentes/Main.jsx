import React from 'react'

const Main = ({ Picture }) => {
  return (
    <div 
    key = {Picture.id}
    className="">
        <div>
            <section>
                <img src={Picture.src} alt="" />
            </section>
            <div className="absolute inset-0 z-10 grid place-content-center">
          <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
            {Picture.title}
          </p>
        </div>
            
        </div>
    </div>
  )
}

export default Main
import React from 'react'

const Main = ({ Picture, customClass }) => {
  return (
    <div 
    key = {Picture.id}
    className={`relative ${customClass} p-2`}>
        <div>
            <section>
                <img src={Picture.src} alt={Picture.alt} className="object-cover w-full h-full"/>
            </section>
            
            
        </div>
    </div>
  )
}

export default Main
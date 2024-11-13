import React from 'react'

const Main = ({ Picture }) => {
  return (
    <div 
    key = {Picture.id}
    className="relative p-2">
            <section>
                <img src={Picture.src} alt={Picture.alt} className="object-contain w-full h-full md:h-auto"/>
            </section>
    </div>
  )
}

export default Main
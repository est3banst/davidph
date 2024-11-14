import React from 'react'


const Card = ({ card }) => {
    return (
      <div
        key={card.id}
        className="group relative h-[100vh] w-[100vw] overflow-hidden bg-neutral-800"
      >
        <div
          style={{
            backgroundImage: `url(${card.url})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
          className="absolute top-0 left-0 bg-[length:120%_60%] md:bg-[length:100%_80%] right-0 bottom-0 h-[calc(100vh+1rem)] w-[100vw] md:h-[calc(100vh+2rem)] md:w-[calc(120vw+2rem)] transition-transform duration-300 group-hover:scale-120"
        ></div>
        <div className="absolute inset-0 z-10 p-6 grid place-content-center">
          <p className="bg-transparent p-8 text-2xl md:text-4xl lg:text-6xl font-black uppercase text-white">
            {card.title}
          </p>
        </div>
      </div>
    );
  };

export default Card
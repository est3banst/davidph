import React from 'react'


const Card = ({ card }) => {
    return (
      <div
        key={card.id}
        className="group relative h-[100vh] w-[80vw] md:w-[140vw] overflow-hidden bg-slate-50"
      >
        <div
          style={{
            backgroundImage: `url(${card.url})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
          className="absolute top-0 left-0 right-0 bottom-0 bg-cover md:bg-[length:70%_130%] h-[100vh] w-[100vw] md:h-[calc(100vh+2rem)] md:w-[calc(100vw+2rem)] transition-transform duration-300 group-hover:scale-120"
        ></div>
        <div className="absolute inset-0 z-10 grid place-content-center">
          <p className="bg-transparent p-8 text-2xl md:text-4xl lg:text-6xl font-black uppercase text-slate-50">
            {card.title}
          </p>
        </div>
      </div>
    );
  };

export default Card
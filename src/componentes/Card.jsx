import React from 'react'


const Card = ({ card }) => {
    return (
      <div
        key={card.id}
        className="group relative h-[100vh] w-[100vw] overflow-hidden bg-neutral-200"
      >
        <div
          style={{
            backgroundImage: `url(${card.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center 70%",
          }}
          className="absolute top-0 left-0 right-0 bottom-0 p-6 h-[calc(100%+2rem)] w-[calc(100%+2rem)] transition-transform duration-300 group-hover:scale-105"
        ></div>
        <div className="absolute inset-0 z-10 grid place-content-center">
          <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
            {card.title}
          </p>
        </div>
      </div>
    );
  };

export default Card
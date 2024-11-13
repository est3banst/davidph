import React from 'react'
import Main from './Main'


const Picture = () => {
    return (
      <>
        <div>
          <h2>Fotografías</h2>
          <small>Disfrutad!</small>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {pictures.map((pic, index) => {
            console.log(index)
            const isFullWidth = index % 3 === 0; 
            return (
              <div
                key={pic.id}
                className={`${
                  isFullWidth ? 'col-span-1 md:col-span-2 h-[50vh]' : 'h-[50vh]'
                }`}
              >
                <Main Picture={pic} />
              </div>
            );
          })}
        </div>
      </>
    );
  };
  

const getAreaClass = (index) => {
    const areaClasses = [
      "area1", "area2", "area3",
      "area4", "area5", "area6"
    ];
    return areaClasses[index];
  };

export default Picture

const pictures = [
    {
        src:'/imgs/b-dancr.jpeg',
        alt: 'Ballet',
        id: 11,
    },
    {
        src:'/imgs/bo-s-m.jpeg',
        alt:'Boxeo',
        id: 22,
    },
    {
        src:'/imgs/l-raffo.jpeg',
        alt:'Laura Raffo',
        id: 33,
    },
    {
        src:'/imgs/ma-jo-siri.jpeg',
        alt:'María José Siri',
        id: 44,
    },
    {
        src:'/imgs/marian-c.jpeg',
        alt:'Mariano Arana',
        id: 55,
    },
    {
        src:'/imgs/cheff-e.jpeg',
        alt:'Cheff',
        id: 66,
    },
]
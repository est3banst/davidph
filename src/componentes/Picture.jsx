import React from 'react';
import { useState } from 'react';
import Main from './Main';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const Picture = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

    return (
      <>
        <div className="bg-slate-50">
        <div className="">
          <h2 className="mb-4 mx-4 pb-4 border-b-4 border-slate-900 w-max text-base md:text-2xl lg:text-3xl text-neutral-800">Fotografías</h2>
          
        </div>
        <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-3 gap-2">
          {pictures.map((pic, index) => {
            const isFullWidth = index % 3 === 0; 
            return (
              <div
                key={pic.id}
                onClick={() => openModal(pic)}
                className={`gap-2 custom-scale transition-all duration-100 grayscale hover:grayscale-0 cursor-pointer
                  ${isFullWidth ? 'col-span-2 row-span-2 md:col-span-1 md:row-span-1' : 'col-span-1 row-span-1 md:col-span-2 md:row-span-1'
                }`}
              >
                <Main Picture={pic} />
              </div>
            );
          })}
        </div>
        </div>
        {isModalOpen && selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 h-[100vh] flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <button
              className="absolute top-2 right-2 z-[998] text-neutral-50 text-3xl hover:cursor-pointer font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
          <div 
          onClick={(e) => e.stopPropagation()}
          className="relative p-8 bg-transparent rounded-md max-w-3xl w-full">
          <Zoom>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-[90vh] max-h-[90vh] object-contain"
            />
            </Zoom>
          </div>
        </div>
      )}
      </>
    );
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
        src:'/imgs/sa-mod.jpeg',
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
    {
      src: '/imgs/c-piaget.jpeg',
      alt: 'Modelo',
      id: 77,
    },
]
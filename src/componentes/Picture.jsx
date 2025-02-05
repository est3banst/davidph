import React, { useState, useEffect, useRef } from 'react';
import Main from './Main';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const Picture = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pictureRefs = useRef([]); 

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('slide-in');
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1, 
    });

    pictureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      pictureRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <>
      <div className="bg-slate-50 h-auto">
        <div className="">
          <h2 className="mb-4 mx-4 pb-4 border-b-4 border-slate-900 w-max text-base md:text-2xl lg:text-3xl text-neutral-800">
            Fotografías
          </h2>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-3 gap-2">
          {pictures.map((pic, index) => {
            const isFullWidth = index % 3 === 0;
            return (
              <div
                key={pic.id}
                ref={(el) => (pictureRefs.current[index] = el)}
                onClick={() => openModal(pic)}
                className={`gap-2 custom-scale transition-all duration-100 grayscale hover:grayscale-0 cursor-pointer
                  ${
                    isFullWidth
                      ? 'col-span-2 row-span-2 md:col-span-1 md:row-span-2'
                      : 'col-span-1 row-span-1 md:row-span-2'
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
            className="relative p-8 bg-transparent rounded-md max-w-3xl w-full"
          >
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

export default Picture;

const pictures = [
  {
    src: 'pexels-cottonbro-10037708.jpg',
    alt: 'Pexels Picture',
    id: 11,
  },
  {
    src: 'pexels-esrageziyor-45760220-7473287.jpg',
    alt: 'Pexels Picture',
    id: 22,
  },
  {
    src: 'pexels-iskcontvdhaka-12700042.jpg',
    alt: 'Pexels Picture',
    id: 33,
  },
  {
    src: 'pexels-npandey-2446439.jpg',
    alt: 'Pexels Picture',
    id: 44,
  },
  {
    src: 'pexels-ssteenbergenn-3621344.jpg',
    alt: 'Pexels Picture',
    id: 55,
  },
  {
    src: 'pexels-thelazyartist-1108602.jpg',
    alt: 'Pexels Picture',
    id: 66,
  },
  {
    src: 'pexels-tonive-14140136.jpg',
    alt: 'Pexels Picture',
    id: 77,
  },
];
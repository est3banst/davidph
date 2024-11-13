import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Card from "./Card";

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });
  
    const x = useTransform(scrollYProgress, [0, 1], ["10%", "-90%"]);
  
    return (
      <section ref={targetRef} className="relative h-[400vh] bg-neutral-800">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-5 w-[400vw]">
            {cards.map((card) => {
              return <Card card={card} key={card.id} />;
            })}
          </motion.div>
        </div>
  
      </section>
    );
  };

const cards = [
    {
      url: "/imgs/12.jpg",
      id: 1,
      title: "Retratos",
    },
    {
      url: "/imgs/1.jpg",
      id: 2,
      title: "Publicidad",
    },
    {
      url: "/imgs/2.jpg",
      id: 3,
      title: "Reportaje",
    },
    {
      url: "/imgs/3.jpg",
      id: 4,
      title: "Producto",
    },
    {
      url: "/imgs/5.jpg",
      id: 5,
      title: "Moda",
    },
    {
      url: "/imgs/7.jpg",
      id: 6,
      title: "Audiovisual",
    },
    {
      url: "/imgs/9.jpg",
      id: 7,
      title: "Staff",
    },
  ];

  export default HorizontalScrollCarousel;
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Card from "./Card";

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });
  
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  
    return (
      <section ref={targetRef} className="relative h-[400vh] bg-neutral-900">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-4 w-[400vw]">
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
      url: "/src/assets/12.jpg",
      id: 1,
      title: "Retratos",
    },
    {
      url: "/src/assets/1.jpg",
      id: 2,
      title: "Publicidad",
    },
    {
      url: "/src/assets/2.jpg",
      id: 3,
      title: "Reportaje",
    },
    {
      url: "/src/assets/3.jpg",
      id: 4,
      title: "Producto",
    },
    {
      url: "/src/assets/5.jpg",
      id: 5,
      title: "Moda",
    },
    {
      url: "/src/assets/7.jpg",
      id: 6,
      title: "Audiovisual",
    },
    {
      url: "/src/assets/9.jpg",
      id: 7,
      title: "Staff",
    },
  ];

  export default HorizontalScrollCarousel;
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Card from "./Card";

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });
  
    const x = useTransform(scrollYProgress, [0, 1], ["5%", "-90%"]);
  
    return (
      <section ref={targetRef} className="relative h-[400vh] bg-slate-100">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex w-[1000vw] md:w-[600vw]">
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
      url: "/imgs/ch-comu-casamance-seneg.jpeg",
      id: 1,
      title: "Retratos",
    },
    {
      url: "/imgs/belice-unfpa.jpeg",
      id: 2,
      title: "Reportaje",
    },
    {
      url: "/imgs/c-nos-p.jpeg",
      id: 3,
      title: "Publicidad",
    },
    {
      url: "/imgs/moda-sm-wd.jpeg",
      id: 5,
      title: "Moda",
    },
    {
      url: "/imgs/7.jpg",
      id: 6,
      title: "Producto",
    },
    {
      url: "/imgs/s-domingo-m.jpeg",
      id: 7,
      title: "Audiovisual",
    },
  ];

  export default HorizontalScrollCarousel;
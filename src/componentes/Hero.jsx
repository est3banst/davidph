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
      url: "dfcxpex.jpg",
      id: 1,
      title: "Lorem",
    },
    {
      url: "dlksapex.jpg",
      id: 2,
      title: "Lorem",
    },
    {
      url: "fash.jpg",
      id: 3,
      title: "Lorem",
    },
    {
      url: "dsapex.jpg",
      id: 5,
      title: "Lorem",
    },
    {
      url: "anntarazevich-5621248.jpg",
      id: 6,
      title: "Lorem",
    },
    {
      url: "pexels-iskcontvdhaka-12700042.jpg",
      id: 7,
      title: "Lorem",
    },
  ];

  export default HorizontalScrollCarousel;
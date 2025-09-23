import { ABOUT_ME_DATA } from "../../../../constants/about/about_me";
import AboutMeComponent from "../components/aboutMeComponent";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About_Feature() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="pb-16 px-12 bg-black" ref={ref}>
      <div className="max-w-6xl mx-auto">        
        {/* Título principal */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-left mb-12 px-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-8">
            My <span className="text-primary-color">Story</span>
          </h3>
        </motion.div>

        {/* Grid de cards About Me - Una por fila */}
        <div className="px-4">
          {ABOUT_ME_DATA.map((aboutItem, index) => (
            <AboutMeComponent 
              key={index}
              data={aboutItem}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

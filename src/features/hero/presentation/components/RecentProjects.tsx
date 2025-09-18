import { RECENT_PROJECTS_DATA } from "../../../../constants/hero/recent_projects";
import { Card, CardBody } from "@heroui/card";
import { Image } from "@heroui/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function RecentProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="pb-16 px-12 bg-black" ref={ref}>
      <div className="max-w-6xl mx-auto">        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-left mb-12 px-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Recent Projects
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-8">
            and <span className="text-primary-color">Achievements</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {RECENT_PROJECTS_DATA.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: isInView ? 0.4 + (index * 0.1) : 0, duration: 0.6 }}
            >
              <Card className="transition-all duration-300 group">
                <CardBody className="p-0">
                  <motion.div 
                    className="relative overflow-hidden rounded-t-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ delay: isInView ? 0.5 + (index * 0.1) : 0, duration: 0.5 }}
                  >
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </motion.div>
              
                  <motion.div 
                    className="p-6"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: isInView ? 0.6 + (index * 0.1) : 0, duration: 0.5 }}
                  >
                    <h3 className="text-2xl font-bold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-lg">
                      {project.description}
                    </p>
                  </motion.div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

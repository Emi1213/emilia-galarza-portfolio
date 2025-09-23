import { Card, CardBody } from "@heroui/card";
import { Chip, Image } from "@heroui/react";
import { motion } from "framer-motion";
import type { AboutMe } from "../../types/about.interface";

interface AboutMeComponentProps {
  data: AboutMe;
  index: number;
  isInView: boolean;
}

export default function AboutMeComponent({ data, index, isInView }: AboutMeComponentProps) {
  const isImageRight = index % 2 === 0; // Par = imagen derecha, Impar = imagen izquierda
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: isInView ? 0.4 + (index * 0.1) : 0, duration: 0.6 }}
      className="mb-8"
    >
      <Card className="transition-all duration-300 group">
        <CardBody className="p-0">
          {/* Layout con imagen */}
          {data.imageUrl ? (
            <div className={`flex flex-col ${isImageRight ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-0`}>
              {/* Imagen */}
              <motion.div 
                className="relative overflow-hidden lg:w-2/5"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: isInView ? 0.5 + (index * 0.1) : 0, duration: 0.5 }}
              >
                <Image
                  src={data.imageUrl}
                  alt={data.title}
                  className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </motion.div>
              
              {/* Contenido */}
              <motion.div 
                className="p-8 lg:w-3/5 flex flex-col justify-center"
                initial={{ opacity: 0, x: isImageRight ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isImageRight ? -20 : 20 }}
                transition={{ delay: isInView ? 0.6 + (index * 0.1) : 0, duration: 0.5 }}
              >
                <h3 className="text-3xl font-bold mb-4 text-white">
                  {data.title}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  {data.description}
                </p>
                
                {/* Tags */}
                {data.tags && data.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {data.tags.map((tag, tagIndex) => (
                      <Chip 
                        variant="faded"
                        key={tagIndex}
                        className="text-primary-color"
                      >
                        {tag}
                      </Chip>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
          ) : (
            /* Layout sin imagen - solo contenido centrado */
            <motion.div 
              className="p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: isInView ? 0.6 + (index * 0.1) : 0, duration: 0.5 }}
            >
              <h3 className="text-3xl font-bold mb-4 text-white">
                {data.title}
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                {data.description}
              </p>
              
              {/* Tags */}
              {data.tags && data.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {data.tags.map((tag, tagIndex) => (
                    <Chip 
                    
                    variant="faded"
                      key={tagIndex}
                      className="text-primary-color"
                    >
                      {tag}
                    </Chip>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </CardBody>
      </Card>
    </motion.div>
  );
}

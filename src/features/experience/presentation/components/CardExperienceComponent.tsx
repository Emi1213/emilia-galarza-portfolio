import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/react";
import { motion } from "framer-motion";
import type { Experience } from "../../types/experience.interface";

interface CardExperienceComponentProps {
  data: Experience;
  index: number;
  isInView: boolean;
}

export default function CardExperienceComponent({ data, index, isInView }: CardExperienceComponentProps) {
  // Formatear las fechas
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      year: 'numeric' 
    });
  };

  const startDate = formatDate(data.start_date);
  const endDate = data.end_date ? formatDate(data.end_date) : 'Present';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ 
        duration: 0.4, 
        delay: isInView ? index * 0.1 : 0,
        ease: "easeOut" 
      }}
    >
      <Card className="p-6 hover:bg-primary_custom-200 transition-all duration-300 cursor-pointer group h-full min-h-[200px]">
        <CardBody className="p-0">
        
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary-color transition-colors">
              {data.position}
            </h3>
            {data.company && (
              <p className="text-gray-300 font-medium">
                {data.company}
              </p>
            )}
          </div>

        
          <div className="mb-4">
            <p className="text-gray-400 text-sm mb-1">
              {startDate} - {endDate}
            </p>
            <p className="text-gray-400 text-sm">
              {data.location}
            </p>
          </div>

        
          <div className="mb-4 flex-1">
            <p className="text-gray-400 text-sm leading-relaxed">
              {data.description}
            </p>
          </div>

 
          {data.skills && data.skills.length > 0 && (
            <div className="mt-auto">
              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill, skillIndex) => (
                  <Chip 
                    variant="faded"
                    key={skillIndex}
                    className="text-primary-color"
                  >
                    {skill}
                  </Chip>
                ))}
              </div>
            </div>
          )}
        </CardBody>
      </Card>
    </motion.div>
  );
}

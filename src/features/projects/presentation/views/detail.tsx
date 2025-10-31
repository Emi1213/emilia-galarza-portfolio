import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardBody } from "@heroui/card";
import { Chip, Button, Image } from "@heroui/react";
import { ArrowLeftIcon } from "@heroui/shared-icons";
import type { DetailedProject } from "../../types/project-detail.interface";

interface ProjectDetailFeatureProps {
  project: DetailedProject;
  onBack: () => void;
}

export default function ProjectDetailFeature({ project, onBack }: ProjectDetailFeatureProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="pb-16 px-12 bg-black" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="mb-8 px-4"
        >
          <Button
            variant="ghost"
            startContent={<ArrowLeftIcon className="w-4 h-4" />}
            onClick={onBack}
            className="text-gray-400 hover:text-white"
          >
            All Projects
          </Button>
        </motion.div>

        {/* Main Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="px-4 mb-10"
        >
          <Card className="bg-gray-900/50 border border-gray-800 overflow-hidden">
            <CardBody className="p-0">
              <Image
                src={project.visualContent.mainImage}
                alt={project.title}
                className="w-full h-[340px] md:h-[420px] object-cover"
              />
            </CardBody>
          </Card>
        </motion.div>

        {/* Title + Short description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="px-4 mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {project.title}
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            {project.shortDescription}
          </p>
        </motion.div>

        {/* Technical stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="px-4 mb-10"
        >
          <Card className="bg-gray-900/50 border border-gray-800">
            <CardBody className="p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Technical Stack</h2>

              <div className="space-y-6">
                {project.technicalStack.frontend?.length ? (
                  <div>
                    <h3 className="text-white font-semibold mb-3">Frontend</h3>
                    <div className="flex flex-wrap gap-3">
                      {project.technicalStack.frontend.map((t, i) => (
                        <Chip key={`fe-${i}`} variant="faded" className="text-primary-color text-base px-4 py-2">
                          {t.name}
                        </Chip>
                      ))}
                    </div>
                  </div>
                ) : null}

                {project.technicalStack.backend?.length ? (
                  <div>
                    <h3 className="text-white font-semibold mb-3">Backend</h3>
                    <div className="flex flex-wrap gap-3">
                      {project.technicalStack.backend.map((t, i) => (
                        <Chip key={`be-${i}`} variant="bordered" className="text-gray-300 border-gray-600">
                          {t.name}
                        </Chip>
                      ))}
                    </div>
                  </div>
                ) : null}

                {project.technicalStack.devOps?.length ? (
                  <div>
                    <h3 className="text-white font-semibold mb-3">DevOps</h3>
                    <div className="flex flex-wrap gap-3">
                      {project.technicalStack.devOps.map((t, i) => (
                        <Chip key={`do-${i}`} variant="bordered" className="text-gray-300 border-gray-600">
                          {t.name}
                        </Chip>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </CardBody>
          </Card>
        </motion.div>

        {/* Links */}
        {(project.links?.demo || project.links?.github) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="px-4 mb-12 flex gap-4"
          >
            {project.links?.demo && (
              <Button
                as="a"
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                variant="bordered"
                className="text-primary-color border-primary-color hover:bg-primary-color hover:text-white"
              >
                Visit Demo
              </Button>
            )}
            {project.links?.github && (
              <Button
                as="a"
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                variant="bordered"
                className="text-primary-color border-primary-color hover:bg-primary-color hover:text-white"
              >
                View Repo
              </Button>
            )}
          </motion.div>
        )}

        {/* Gallery */}
        {project.visualContent.screenshots?.length ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="px-4"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.visualContent.screenshots.map((src, i) => (
                <Card key={`shot-${i}`} className="bg-gray-900/50 border border-gray-800 overflow-hidden">
                  <CardBody className="p-0">
                    <Image src={src} alt={`${project.title} screenshot ${i + 1}`} className="w-full h-64 object-cover" />
                  </CardBody>
                </Card>
              ))}
            </div>
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}

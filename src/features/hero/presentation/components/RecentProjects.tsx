import { RECENT_PROJECTS_DATA } from "../../../../constants/hero/recent_projects";
import { Card, CardBody } from "@heroui/card";
import { Image } from "@heroui/react";

export default function RecentProjects() {
  return (
    <section className="py-16 px-12 bg-black">
      <div className="max-w-6xl mx-auto">        
        <div className="text-left mb-12 px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Recent Projects
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-8">
            and <span className="text-purple-500">Achievements</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {RECENT_PROJECTS_DATA.map((project, index) => (
            <Card key={index} className="transition-all duration-300 group">
              <CardBody className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
            
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-lg">
                    {project.description}
                  </p>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

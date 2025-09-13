import { Card } from "@heroui/card";
import { SKILLS_DATA } from "../../../../constants/hero/skills";

export default function Skills(){
    return (
        <div className="w-full max-w-6xl mx-auto px-16">
            <div className="text-left mb-12 ">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    My <span className="text-white">Skills &</span>
                </h2>
                <h2 className="text-4xl md:text-5xl font-bold">
                    <span className="text-purple-400">Technologies</span>
                </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {SKILLS_DATA.map((skill, index) => (
                    <Card 
                        key={index}
                        className="p-6 bg-gray-800/50 border-gray-700 hover:bg-gray-700/50 transition-all duration-300 cursor-pointer group"
                    >
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-gray-700/50 rounded-xl group-hover:bg-gray-600/50 transition-colors">
                                <skill.icon className="w-8 h-8 text-white" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-white mb-1">
                                    {skill.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {skill.description}
                                </p>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}

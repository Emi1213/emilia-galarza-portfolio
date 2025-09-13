import FloatingNavbar from "../../../../components/navbar/FloatingNavbar";
import ProfileCard from "../../../../components/profile_card";
import RecentProjects from "../components/RecentProjects";
import { useRef } from "react";

export default function Hero_Feature(){
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    return <>  
    <div id="container" className="bg-black">
        <FloatingNavbar scrollContainer={scrollContainerRef} />
        <div className="max-w-6xl mx-auto">
            <div className="flex">
                <div className="w-1/3 h-screen overflow-y-auto scrollbar-hide">
                    <div className="h-32"></div>
                    <div className="sticky top-32 m-4 flex items-center justify-center">
                        <ProfileCard />
                    </div>
                    <div className="h-screen"></div> {/* Espaciado inferior para permitir scroll */}
                </div>
                
                {/* Lado derecho - Área con scroll */}
                <div ref={scrollContainerRef} className="w-2/3 overflow-y-auto h-screen scrollbar-hide">
                    <div className="pt-32"> 
                        <RecentProjects />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
}
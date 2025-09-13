import FloatingNavbar from "../../../../components/navbar/FloatingNavbar";
import ProfileCard from "../../../../components/profile_card";
import RecentProjects from "../components/RecentProjects";

export default function Hero_Feature(){

    return <>  
    <div id="container" className="bg-black">
        <FloatingNavbar />
        <div className="max-w-7xl mx-auto">
            <div className="flex h-screen">
                <div className="w-1/3 flex items-center justify-center sticky top-0 h-screen">
                    <ProfileCard />
                </div>
                
                <div className="w-2/3 overflow-y-auto h-screen scrollbar-hide">
                    <RecentProjects />
                
                </div>
            </div>
        </div>
    </div>
    </>
}
import ProfileCard from "../../../../components/profile_card";
import RecentProjects from "../components/RecentProjects";
import Skills from "../components/Skills";

export default function Hero_Feature() {
 
  return (
    <>
     <div>
            <div className="p-5 md:hidden"><ProfileCard /></div>
            <RecentProjects />
            <Skills />
          </div>
    </>
  );
}

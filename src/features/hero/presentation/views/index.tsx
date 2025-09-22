import ProfileCard from "../../../../components/profile_card";
import FrequentlyQuestions from "../../../frequently_questions/presentation/views";
import RecentProjects from "../components/RecentProjects";
import Skills from "../components/Skills";

export default function Hero_Feature() {
 
  return (
    <>
     <div>
            <div className="p-5 md:hidden"><ProfileCard /></div>
            <RecentProjects />
            <Skills />
            <FrequentlyQuestions />
          </div>
    </>
  );
}

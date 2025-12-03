import ProfileCard from "../../../../components/profile_card";
import FrequentlyQuestions from "../../../frequently_questions/presentation/views";
import RecentProjects from "../components/RecentProjects";
import Skills from "../components/Skills";

interface HeroFeatureProps {
  onRecentProjectClick?: (id: string) => void;
}

export default function Hero_Feature({ onRecentProjectClick }: HeroFeatureProps) {
 
  return (
    <>
     <div>
            <div className="p-5 md:hidden"><ProfileCard /></div>
            <RecentProjects onProjectClick={onRecentProjectClick} />
            <Skills />
            <FrequentlyQuestions />
          </div>
    </>
  );
}

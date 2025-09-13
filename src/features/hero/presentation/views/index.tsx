import FloatingNavbar from "../../../../components/navbar/FloatingNavbar";
import ProfileCard from "../../../../components/profile_card";
import RecentProjects from "../components/RecentProjects";
import { useEffect, useState } from "react";
import Skills from "../components/Skills";

export default function Hero_Feature() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const maxScroll = 128; 
  const profileTransformY = Math.min(scrollY, maxScroll);

  return (
    <>
      <div id="container" className="bg-black">
        <FloatingNavbar />
        <div className="max-w-6xl mx-auto">
          <div className="hidden md:flex">
            <div className="w-1/3">
              <div className="h-32"></div>
              <div
                className="sticky top-40"
                style={{
                  transform: `translateY(-${profileTransformY}px)`,
                }}
              >
                <ProfileCard />
              </div>
            </div>

            <div className="w-2/3">
              <div className="pt-40">
                <RecentProjects />
                <Skills />
              </div>
              <div className="h-screen bg-black"></div>
              <div className="h-screen bg-black"></div>
            </div>
          </div>
          <div className="md:hidden">
            <div className="pt-20 px-6">
              <ProfileCard />
            </div>
            
            <div className="pt-8">
              <RecentProjects />
              <Skills />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

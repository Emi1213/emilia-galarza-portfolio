import FloatingNavbar from "../../../../components/navbar/FloatingNavbar";
import ProfileCard from "../../../../components/profile_card";
import { useCallback, useEffect, useState } from "react";
import DynamicContent from "../../../../features/layout/presentation/components/DynamicContent";
import { Providers } from "../../../../components/providers/ToastProvider";

interface AppLayoutProps {
  initialSection?: string;
}

export default function AppLayout({ initialSection = "hero" }: AppLayoutProps) {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState(initialSection);
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setActiveSection(initialSection);
  }, [initialSection]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeSection, activeProjectId]);

  const maxScroll = 128; 
  const profileTransformY = Math.min(scrollY, maxScroll);

  const handleSectionChange = useCallback((sectionId: string, projectId?: string | null) => {
    // If we are already on the section, scroll to top manually since useEffect won't trigger
    if (sectionId === activeSection && projectId === activeProjectId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    setActiveSection(sectionId);
    setActiveProjectId(projectId ?? null);
    
    if (typeof window !== 'undefined') {
      const newUrl = sectionId === 'hero' ? '/' : `/${sectionId}`;
      window.history.pushState({}, '', newUrl);
    }
  }, [activeSection, activeProjectId]);

  return (
    <Providers>
        <div id="container" className="bg-black">
          <FloatingNavbar
            activeSection={activeSection}
            onSectionChange={(section) => handleSectionChange(section)}
        />
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
                <ProfileCard onNavigate={(section) => handleSectionChange(section)} />
              </div>
            </div>

            <div className="w-2/3">
              <div className="pt-40">
                <DynamicContent 
                  activeSection={activeSection} 
                  activeProjectId={activeProjectId}
                  onNavigate={handleSectionChange} 
                />
              </div>
              
            </div>
          </div>
          <div className="md:hidden">
            <div className="pt-24">
              <DynamicContent 
                activeSection={activeSection} 
                activeProjectId={activeProjectId}
                onNavigate={handleSectionChange} 
              />
            </div>
          </div>
        </div>
      </div>
    </Providers>
  );
}

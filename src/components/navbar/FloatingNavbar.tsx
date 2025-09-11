import { useState, useEffect } from 'react';
import { 
  Home, 
  User, 
  FolderOpen, 
  Briefcase, 
  Mail
} from 'lucide-react';

const FloatingNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#inicio', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Projects', href: '#projects', icon: FolderOpen },
    { name: 'Services', href: '#services', icon: Briefcase },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <>
      <nav
        className={`
          fixed top-4 left-1/2 transform -translate-x-1/2 z-50 
          flex items-center gap-2 px-4 py-3 rounded-full transition-all duration-300 ease-in-out
          ${isScrolled 
            ? 'bg-gray-950/90 backdrop-blur-xl border border-gray-800/80 shadow-2xl shadow-black/40' 
            : 'bg-gray-900/80 backdrop-blur-lg border border-gray-700/50 shadow-xl shadow-black/20'
          }
        `}
      >
        <div className="flex items-center gap-2">
          {menuItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <a
                key={index}
                href={item.href}
                className="
                  group relative flex items-center justify-center w-10 h-10 rounded-full 
                  text-gray-400 hover:text-white transition-all duration-300 ease-out
                  hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20
                  hover:shadow-lg hover:shadow-purple-500/25
                  before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r 
                  before:from-purple-500 before:to-pink-500 before:opacity-0 before:transition-opacity 
                  before:duration-300 hover:before:opacity-20
                  transform hover:scale-110 active:scale-95
                "
                title={item.name}
              >
                <IconComponent size={18} className="relative z-10" />
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default FloatingNavbar;
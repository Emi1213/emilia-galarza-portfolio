import type { profile_card } from "../../features/profile_card/types/profile.interface";
import { SiGithub, SiLinkedin } from "react-icons/si";
export const PROFILE_CARD_DATA: profile_card = 
  {
    name: "Emilia Galarza",
    bio: "Software Developer | Full Stack Developer | Building Scalable Web Experiences",
    avatar: "/images/avatar_profile.jpeg",
    location: "Ambato, Ecuador",
    socialLinks: [
      {
        platform: "GitHub",
        url: "https://github.com/Emi1213",
        icon: <SiGithub />,
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/emilia-galarza-b6b13a226/",
      icon: <SiLinkedin />,
    },
  ]
}

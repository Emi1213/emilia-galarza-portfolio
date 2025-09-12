import type { profile_card } from "../../features/profile_card/types/profile.interface";
import { SiGithub, SiLinkedin } from "react-icons/si";
export const PROFILE_CARD_DATA: profile_card = 
  {
    name: "Emilia Galarza",
    bio: "Aspiring Full Stack Developer | Passionate about crafting seamless web experiences | Eager to learn and grow in the tech world",
    avatar: "/images/avatar_profile.jpeg",
    location: "Ambato, Ecuador",
    socialLinks: [
      {
        platform: "GitHub",
        url: "https://github.com/emilia-galarza",
        icon: <SiGithub />,
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/emilia-galarza",
      icon: <SiLinkedin />,
    },
  ]
}

import { Card, CardBody, CardHeader } from "@heroui/card";
import { PROFILE_CARD_DATA } from "../../../../constants/profile/profile_card";
import { Button } from "@heroui/button";
import { Image } from "@heroui/react";

export default function Profile_Card() {
  return (
    <>
      <Card className="p-8 max-w-sm mx-auto text-center">
        <CardHeader className="flex gap-3">
          <div className="rounded-2xl p-4 mb-6">
            <Image 
            src={PROFILE_CARD_DATA.avatar}
                alt="Profile Avatar"
                className="object-cover rounded-xl"
            >
            </Image>
          </div>
        </CardHeader>
        <CardBody className="overflow-visible text-center">
            <h1 className="text-3xl font-bold mb-2">{PROFILE_CARD_DATA.name}</h1>

        <p className="text-gray-300 mb-2">{PROFILE_CARD_DATA.bio}</p>

        <p className="text-gray-400 mb-6">{PROFILE_CARD_DATA.location}</p>

        <div className="flex justify-center space-x-6 mb-8">
          {PROFILE_CARD_DATA.socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {link.icon || link.platform}
            </a>
          ))}
        </div>

        
        </CardBody>
        <Button  color="default" className="font-semibold py-3 px-8 bg-primary_custom-200!">Let's Talk</Button>

      </Card>
      
    </>
  );
}

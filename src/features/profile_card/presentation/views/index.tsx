import { PROFILE_CARD_DATA } from "../../../../constants/profile/profile_card";

export default function Profile_Card() {
    return (
        <div className="bg-gray-800 rounded-3xl p-8 max-w-sm mx-auto text-center text-white">
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-4 mb-6">
                <img 
                    src={PROFILE_CARD_DATA.avatar} 
                    alt="Profile Avatar" 
                    className="w-full h-48 object-cover rounded-xl"
                />
            </div>
            
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
            
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-xl w-full transition-colors">
                Let's Talk
            </button>
        </div>
    );
}
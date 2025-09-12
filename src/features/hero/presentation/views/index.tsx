import FloatingNavbar from "../../../../components/navbar/FloatingNavbar";
import ProfileCard from "../../../../components/profile_card";

export default function Hero_Feature(){

    return <>  
    <div id="container" className="bg-black">
    <FloatingNavbar />
    <section id="inicio" className="relative w-full h-screen mx-auto flex items-center justify-start pl-8">
    <ProfileCard />
    </section>
    </div>
    </>
}
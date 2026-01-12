import HeroSection from "@/components/HeroSection";
import InvitationText from "@/components/InvitationText";
import CouplePhoto from "@/components/CouplePhoto";
import CountdownTimer from "@/components/CountdownTimer";
import EventDetails from "@/components/EventDetails";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="font-sans antialiased">
      <HeroSection />
      <InvitationText />
      <CouplePhoto />
      <CountdownTimer />
      <EventDetails />
      <ContactSection />
    </main>
  );
};

export default Index;

import AboutSection from "./about";
import ApproachSection from "./care";
import EventsConferences from "./events";
import ExpertAdviceVideos from "./expert";
import FieldOfExpertise from "./experties";
import FooterCTA from "./footer";
import HeroPage from "./hero";
import PublicationsSection from "./research";
import PatientStories from "./story";


export default function Home() {
  return (
    <>
      <HeroPage />
      <AboutSection />
      <FieldOfExpertise />
      <ApproachSection />
      <ExpertAdviceVideos />
      <PublicationsSection />
      <PatientStories />
      <EventsConferences />
      <FooterCTA />
    </>
  );
}

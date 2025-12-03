import HeroSection from '../components/sections/HeroSection';
import VisionMission from '../components/sections/VisionMission';
import ProgramsSection from '../components/sections/ProgramsSection';
import DonationSection from '../components/sections/DonationSection';
import VolunteerSection from '../components/sections/VolunteerSection';
import ImpactSection from '../components/sections/ImpactSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import GallerySection from '../components/sections/GallerySection';
import ContactSection from '../components/sections/ContactSection';

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <VisionMission />
            <ProgramsSection />
            <DonationSection />
            <VolunteerSection />
            <ImpactSection />
            <TestimonialsSection />
            <GallerySection />
            <ContactSection />
        </>
    );
};

export default HomePage;

import Navigation from '@/components/Navigation';
import HeroIntro from '@/components/HeroIntro';
import PortfolioGallery from '@/components/PortfolioGallery';
import TrouserSection from '@/components/TrouserSection';
import ChapterSection from '@/components/ChapterSection';
import RunwaySection from '@/components/RunwaySection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="bg-background min-h-screen">
      <Navigation />
      <HeroIntro />
      <PortfolioGallery />
      <TrouserSection />
      <ChapterSection />
      <RunwaySection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

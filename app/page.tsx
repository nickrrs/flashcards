import HomeFooter from "./components/HomeFooter";
import HomeNavbar from "./components/HomeNavbar";
import FeaturesSection from "./components/FeaturesSection";
import ProblemAgitationSection from "./components/ProblemAgitationSection";
import TransformationSection from "./components/TransformationSection";
import SocialProofSection from "./components/SocialProofSection";
import FAQSection from "./components/FAQSection";
import FinalCTASection from "./components/FinalCTASection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <HomeNavbar />
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center w-full px-4 pt-28 pb-14 md:pt-32 md:pb-14 bg-white">
          <div className="w-full max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex flex-row flex-wrap items-center justify-center gap-2">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 md:mb-2">
                  Keep what
                </h1>
                <h1 className="text-5xl md:text-6xl font-bold text-[#2b33ff] mb-2">
                  can&apos;t disappear
                </h1>
              </div>
              <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                Create intelligent flashcards organized by context. Get
                AI-powered insights and never forget what matters.
              </p>
            </div>
          </div>
        </section>

        {/* Problem agitation */}
        <ProblemAgitationSection />

        {/* Customer transformation */}
        <TransformationSection />

        {/* Features / benefits */}
        <div className="bg-linear-to-b from-white to-zinc-50">
          <FeaturesSection />
        </div>

        {/* Social proof */}
        <SocialProofSection />

        {/* FAQ */}
        <FAQSection />

        {/* Final call-to-action */}
        <FinalCTASection />
      </main>
      <HomeFooter />
    </div>
  );
}

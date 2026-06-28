// app/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PredictorCard from "@/components/PredictorCard";
import MatchInsights from "@/components/MatchInsights";
import Footer from "@/components/Footer";
import ScrollToHash from "@/components/ScrollToHash";
import { PredictionProvider } from "@/context/PredictionContext";

export default function Home() {
  return (
    <PredictionProvider>
      <ScrollToHash />
      <Navbar />
      <Hero />
      <PredictorCard />
      <MatchInsights />
      <Footer />
    </PredictionProvider>
  );
}

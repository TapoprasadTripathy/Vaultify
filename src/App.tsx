import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Rewards } from './components/Rewards';
import { Progress } from './components/Progress';
import { Trust } from './components/Trust';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <Rewards />
      <Progress />
      <Trust />
      <CTA />
      <Footer />
    </div>
  );
}

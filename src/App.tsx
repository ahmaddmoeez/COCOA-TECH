import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

export default function App() {
  return (
    <div className="min-h-screen bg-chocolate-950">
      <Navbar />
      <main>
        <Hero />
      </main>
      
      {/* Additional sections could go here */}
      <section className="py-24 px-6 bg-chocolate-900/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-display italic text-chocolate-200 mb-4">The Future is Dark & Rich</h2>
          <p className="text-chocolate-400 max-w-2xl mx-auto">
            Our technology stack is built for those who appreciate the finer details. 
            From the core architecture to the final interface, every layer is refined.
          </p>
        </div>
      </section>
    </div>
  );
}


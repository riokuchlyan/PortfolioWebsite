import App from '@/components/App';
import Hero from '@/components/sections/Hero';
import Experience from '@/components/sections/Experience';
import Work from '@/components/sections/Work';
import Photography from '@/components/sections/Photography';
import Contact from '@/components/sections/Contact';

export default function Page() {
  return (
    <App>
      <Hero />
      <Experience />
      <Work />
      <Photography />
      <Contact />
    </App>
  );
}

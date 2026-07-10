import App from '@/components/App';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Work from '@/components/sections/Work';
import Photography from '@/components/sections/Photography';
import Contact from '@/components/sections/Contact';

export default function Page() {
  return (
    <App
      panels={{
        about: <About />,
        experience: <Experience />,
        projects: <Work />,
        photography: <Photography />,
        contact: <Contact />,
      }}
    />
  );
}

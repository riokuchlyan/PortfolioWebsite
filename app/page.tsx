import App from '@/components/App';
import Home from '@/components/Home';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Work from '@/components/sections/Work';
import Photography from '@/components/sections/Photography';
import Contact from '@/components/sections/Contact';

export default function Page() {
  return (
    <App
      home={<Home />}
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

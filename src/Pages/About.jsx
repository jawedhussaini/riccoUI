import HeroPages from "../components/hero-pages/HeroPages";
import WhoWeAre from "../components/about-page/who-we-are/WhoWeAre";
import History from "../components/about-page/history/History";

function About() {
  return (
    <main>
      <HeroPages page="About" />
      <WhoWeAre />
    </main>
  );
}

export default About;

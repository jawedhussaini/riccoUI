import Hero from "../components/hero/Hero";
import WhoWeAre from "../components/who-we-are/WhoWeAre";
import FeaturedClass from "../components/featured-class/FeaturedClass";
import ChooseUs from "../components/choose-us/ChooseUs";
import Trainers from "../components/trainers/Trainers";
import Testimonials from "../components/testimonials/Testimonials";
import Gallery from "../components/gallery/Gallery";
import BMI from "../components/bmi/BMI";
import PricingCards from "../components/pricing/PricingCards";
import Blog from "../components/blog/Blog";


function Home() {
  return (
    <main>
      <Hero />
      <WhoWeAre />
      <FeaturedClass />
      <ChooseUs />
      <Trainers />
      <Testimonials />
      <Gallery />
      <PricingCards />
      <Blog />
 
    </main>
  );
}

export default Home;

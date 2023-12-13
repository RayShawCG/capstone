import Header from "./Header";
import Hero from "./Hero";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import About from "./About";
import Footer from "./Footer";


const Home = ({bookingData}) => {
  console.log(bookingData);
  return (
    <>
      <Header />
      <Hero />
      <Specials />
      <Testimonials />
      <About />
      <Footer />
    </>
  );
};

export default Home;

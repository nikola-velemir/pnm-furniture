import HeroBanner from "../components/Banners/HeroBanner";
import CardContainer from "../components/Card/CardContainer";
import CategorySlide from "../components/CategorySlide";
import NavBar from "../components/Nav/NavBar";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <HeroBanner />
      <CategorySlide />
      <CardContainer />
    </>
  );
};

export default HomePage;

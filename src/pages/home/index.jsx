import Hero from "./hero";
import Overview from "./overview";
import HighlightedCourses from "./highlightedcourses";
import FeaturedTV from "./featuredtv";
import JoinUs from "./joinus";
const Home = () => {
  return (
    <div>
      <Hero />
      <Overview />
      <HighlightedCourses />
      <FeaturedTV />
      <JoinUs />
    </div>
  );
};

export default Home;

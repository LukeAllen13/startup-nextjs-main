import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import Slideshow from "./Slideshow"; // Import the slideshow component

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28 relative">
        <div className="container">
          {/* Centered Slideshow with Border */}
          <div>
            <Slideshow />
          </div>
        </div>

        {/* Small White Line Divider */}
      </section>
    </>
    
  );
};

export default Features;
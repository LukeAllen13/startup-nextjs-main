import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import '../../styles/index.css';

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story",
  description: "This is the Our Story page.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <div className="flex justify-center items-center" style={{ width: '100%' }}>
        <Breadcrumb
          pageName=""
          description={
            <>
              <span
                style={{
                  color: "black", // Black color instead of gold
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4), 0 0 25px black, 0 0 5px darkorange", // Glowing effect with black
                  fontFamily: "'Times New Roman', serif", // Fancy font family
                  letterSpacing: "1px", // Slightly increased spacing for elegance
                  fontWeight: "bold", // Bold for emphasis
                  textTransform: "uppercase", // Uppercase for a regal look
                  fontSize: "2rem", // Size of the text
                  
                }}
              >
                Our Story
              </span>
              
              <div
                style={{
                  color: "black", // Black text color
                  backgroundColor: "white", // White background color
                  border: "2px solid black", // Black border
                  padding: "20px",
                  borderRadius: "10px", // Curved edges
                  marginBottom: "20px",
                  marginLeft: "20px", // Margin left for the div
                  fontFamily: "'Times New Roman', serif", // Keeping the fancy font family
                  textAlign: "left",
                  marginTop: "50px"
                }}
              >
                <p style={{textIndent: "30px", fontSize:"1.2rem"}}>
                  At GoodMen Foundation, we are a dedicated global army of men united in the fight against gender-based violence (GBV) and femicide. Founded in 2019 in Durban, South Africa, we emerged as a heartfelt response to the urgent need for male-led advocacy and action in addressing these critical issues.
                  We believe that men have a vital role to play in dismantling the structures that perpetuate violence and discrimination against women and marginalized communities. <strong>Our mission </strong>is to create a supportive and transformative environment where men can take responsibility, engage in meaningful conversations, and actively participate in efforts to promote gender equality.
                  Through education, awareness campaigns, and community initiatives, we strive to empower men to challenge harmful norms and behaviors, fostering a culture of respect and accountability. Together, we are committed to building a safer, more equitable world for all.
                Join us in this crucial mission. Together, we can be the change we wish to see.
                </p>
              </div>
            </>
          }
        />
      </div>
    </>
  );
};

export default AboutPage;
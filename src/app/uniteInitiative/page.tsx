import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import '../../styles/index.css';

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Unite Initiative",
  description: "This is the Unite Initiative Page.",
  // other metadata
};

const Unite = () => {
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
                  marginTop: "50px"
                }}
              >
                The Unite Initiative
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
                  marginTop: "30px"
                }}
              >
                <p style={{textIndent: "30px", fontSize:"1.2rem"}}>
                The Unite Initiative Against Gender-Based Violence and Femicide (GBVF) is a collaborative effort aimed at raising awareness, fostering dialogue, and mobilizing resources to combat gender-based violence in all its forms. This initiative brings together diverse stakeholders, including community organizations, government agencies, and individuals, to promote solidarity and collective action. By addressing the root causes of GBVF and advocating for policy changes, the Unite Initiative seeks to create safer communities, empower survivors, and build a culture of respect and equality for all.
                </p>
              </div>
            </>
          }
        />
      </div>
    </>
  );
};

export default Unite;
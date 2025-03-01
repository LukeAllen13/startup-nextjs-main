import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import '../../styles/index.css';

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GBVF Response Centre",
  description: "This is the GBVF Response Centre page.",
  // other metadata
};

const GBVF = () => {
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
                <span style={{ color: "pink" }}>GBVF</span> Reponse Centre
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
                <p style={{textIndent: "30px", fontSize:"1.5rem"}}>
                The KZN GBVF Response Centre provides vital support to survivors of gender-based violence and femicide, offering comprehensive services such as counseling, legal assistance, and safe housing to empower individuals on their journey to healing and recovery.
                </p>
              </div>
            </>
          }
        />
      </div>
    </>
  );
};

export default GBVF;
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import '../../styles/index.css';

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "National Men's Day",
  description: "This is the National Men's Day page.",
  // other metadata
};

const NationalMensDay = () => {
  return (
    <>
      <div className="flex justify-center items-center" style={{ width: '100%' }}>
        <Breadcrumb
          pageName=""
          description={
            <>
              <span
                  style={{
                    color: "black",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4), 0 0 25px black, 0 0 5px darkorange",
                    fontFamily: "'Times New Roman', serif",
                    letterSpacing: "1px",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    fontSize: "2rem"
                  }}
                >
                  National <span style={{ color: "gold" }}>Men's</span> Day
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
                National Men's Day, observed every July in South Africa, is celebrated by the GoodMen Foundation to honor positive masculinity and promote male involvement in the fight against gender-based violence, encouraging men to embrace their role as advocates for change.
                </p>
              </div>
            </>
          }
        />
      </div>
    </>
  );
};

export default NationalMensDay;
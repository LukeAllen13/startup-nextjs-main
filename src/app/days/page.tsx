import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import '../../styles/index.css';

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "16 Days of Activism",
  description: "This is the 16 Days of Activism page.",
};

const Days = () => {
  return (
    <>
      <div
        className="flex justify-center items-center min-h-screen"
        style={{ width: '100%' }}
      >
        <div style={{ width: '100%' }}>
          {/* Pass style prop to set background color */}
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
                    fontSize: "2rem",
                  }}
                >
                  <span style={{ color: "gold" }}>16</span> Days of Activism
                </span>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    border: "2px solid black",
                    borderRadius: "10px",
                    background: "linear-gradient(to bottom, black, purple)",
                    padding: "20px",
                    marginTop: "70px",
                    width: "100%",
                  }}
                >
                  <div>
                    <img
                      src="/images/16days.jpg"
                      alt="Activism Campaign"
                      style={{
                        width: "470px",
                        height: "600px",
                        objectFit: "cover",
                        borderRadius: "20px",
                      }}
                    />
                  </div>

                  <div
                    style={{
                      padding: "20px",
                      fontFamily: "'Times New Roman', serif",
                      textAlign: "left",
                      flex: "1",
                      color: "white",
                    }}
                  >
                    <p style={{ textIndent: "30px", fontSize: "1.5rem" }}>
                      The GoodMen Foundation actively participates in the 16 Days of Activism against Gender-Based Violence campaign, using this vital period to raise awareness, engage communities, and mobilize men to take a stand against violence and advocate for gender equality.
                    </p>
                  </div>
                </div>
              </>
            }
            style={{ backgroundColor: 'black' }} // Apply black background here
          />
        </div>
      </div>
    </>
  );
};

export default Days;
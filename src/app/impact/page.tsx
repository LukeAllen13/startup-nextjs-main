import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import '../../styles/index.css';

export const metadata: Metadata = {
  title: "Our Impact",
  description:
    "This is the Our Impact page.",
};

const impact = () => {
  return (
    <>
      <div className="flex justify-center items-center" style={{ width: '100%' }}>
        <Breadcrumb
          pageName=""
          description={
            <>
            <div>
              <p
                style={{
                  color: "black", // Black text color for the title
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4), 0 0 25px black, 0 0 5px darkorange", // Glowing effect
                  fontFamily: "'Times New Roman', serif", // Fancy font family
                  letterSpacing: "1px", // Slightly increased spacing for elegance
                  fontWeight: "bold", // Bold for emphasis
                  textTransform: "uppercase", // Uppercase for a regal look
                  fontSize: "2rem" // Size of the text
                }}
              >
                Our <span style={{color: "turquoise"}}>Impact</span>
              </p>
              <div
                style={{
                  color: "black", // Black text color
                  backgroundColor: "white", // White background
                  border: "3px solid black", // Black border
                  padding: "20px", // Padding around the text
                  borderRadius: "8px", // Rounded corners
                  marginBottom: "20px", // Margin bottom for space
                  marginLeft: "20px", // Left margin
                  marginRight: "20px", // Right margin
                  fontSize: "1.2rem",
                  fontFamily: "'Times New Roman', serif", // Fancy font family
                  marginTop:"30px"
                }}
              >
                <p style={{ textIndent: "30px", textAlign:"left"}}>
  The GoodMen Foundation has made a significant impact in the fight against gender-based violence and femicide by mobilizing men globally to take active roles as allies and advocates for change. Through our <strong>awareness campaigns, educational programs, and community initiatives</strong>, we have fostered dialogue and challenged harmful norms, empowering men to confront and dismantle the structures that perpetuate violence. Our efforts have not only raised awareness but have also led to increased collaboration with local organizations, law enforcement, and communities, creating safer environments and promoting gender equality. By inspiring a culture of respect and accountability, the GoodMen Foundation is making strides toward a world where all individuals can live free from violence and discrimination.
</p>
              </div>
            </div>
            </>
          }
        />
      </div>
    </>
  );
};

export default impact;
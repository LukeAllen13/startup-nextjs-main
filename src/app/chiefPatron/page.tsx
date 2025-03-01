import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import '../../styles/index.css';

export const metadata: Metadata = {
  title: "Our Chief Patron",
  description:
    "This is the Chief Patron page.",
};

const chiefPatron = () => {
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
                  color: "silver", // Black text color for the title
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4), 0 0 25px silver, 0 0 5px darkorange", // Glowing effect
                  fontFamily: "'Times New Roman', serif", // Fancy font family
                  letterSpacing: "1px", // Slightly increased spacing for elegance
                  fontWeight: "bold", // Bold for emphasis
                  textTransform: "uppercase", // Uppercase for a regal look
                  fontSize: "2rem" // Size of the text
                }}
              >
                His Majesty King MisuZulu KaZwelithini
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
                  fontFamily: "'Times New Roman', serif", // Fancy font family
                  fontSize: "1.2rem",
                  marginTop: "50px"
                }}
              >
                <p style={{ textIndent: "30px" }}>
                  The GoodMen Foundation is honored to have His Majesty King MisuZulu KaZwelithini as our esteemed Chief Patron. 
                  As a leader who embodies strength, wisdom, and a deep commitment to the well-being of his people, King MisuZulu plays a pivotal role in our mission to combat gender-based violence and femicide. 
                  His Majesty’s leadership is characterized by a strong advocacy for community values and social justice. He recognizes the <strong>critical importance</strong> of engaging men in the fight against gender-based violence, and his support lends significant credibility to our initiatives. 
                  Under his guidance, we strive to inspire men to take a stand, challenge harmful norms, and promote a culture of respect and equality. 
                  King MisuZulu’s dedication to uplifting communities resonates with our foundation’s goals. His patronage not only enhances our visibility but also strengthens our efforts to foster meaningful conversations and actionable solutions within society. 
                  Together, we are committed to building a safer, more equitable future for all.
                  We are grateful for His Majesty’s support and leadership as we work towards a world free from violence and discrimination.
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

export default chiefPatron;
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import '../../styles/index.css';

export const metadata: Metadata = {
  title: "Leadership Philosophy",
  description:
"This is the Leadership Philosophy page."};

const LeadershipPage = () => {
  return (
    <>
      <div className="flex justify-center items-center" style={{ width: '100%' }}>
        <Breadcrumb
          pageName=""
          description={
            <>
              {/* Leadership Philosophy Text outside the div */}
              <span
                style={{
                  color: "black", // Black color for heading
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4), 0 0 25px black, 0 0 5px darkorange", // Glowing effect
                  fontFamily: "'Times New Roman', serif", // Fancy font family
                  letterSpacing: "1px", // Slightly increased spacing for elegance
                  fontWeight: "bold", // Bold for emphasis
                  textTransform: "uppercase", // Uppercase for a regal look
                  fontSize: "2rem" // Size of the text
                }}
              >
                Our Leadership Philosophy
              </span>

              {/* Div containing the rest of the text */}
              <div
                style={{
                  color: "black", // Black text color
                  backgroundColor: "white", // White background
                  border: "2px solid black", // Black border
                  padding: "20px", // Padding around the text
                  borderRadius: "8px", // Rounded corners
                  marginBottom: "20px", // Space at the bottom
                  marginLeft: "20px", // Margin left for the whole div
                  marginRight: "20px", // Margin right for the whole div
                  textAlign: "left", // Left-align the text inside the div
                  marginTop: "50px"
                }}
              >
                <p style={{ textIndent: "30px", paddingBottom: "20px" }}>
                  At the GoodMen Foundation, our leadership philosophy is rooted
                  in the principles of integrity, accountability, and empathy. We
                  believe that true leadership involves not just guiding others
                  but also embodying the values we stand for in our fight against
                  gender-based violence and femicide.
                </p>

                <ol style={{ paddingLeft: "30px", fontSize: "1.1rem", lineHeight: "1.8" }}>
                  <li style={{
                    marginBottom: "15px", 
                    position: "relative",
                    paddingLeft: "30px"
                  }}>
                    <span style={{
                      position: "absolute", 
                      left: "-30px", 
                      top: "0", 
                      fontSize: "1.5rem", 
                      color: "black" // Numbers are now black
                    }}>1.</span>
                    <strong>Empowerment through Inclusion:</strong> We prioritize creating spaces where diverse voices are heard and valued. Our leadership encourages collaboration and invites men from all walks of life to engage in meaningful dialogue about gender issues.
                  </li>

                  <li style={{
                    marginBottom: "15px", 
                    position: "relative",
                    paddingLeft: "30px"
                  }}>
                    <span style={{
                      position: "absolute", 
                      left: "-30px", 
                      top: "0", 
                      fontSize: "1.5rem", 
                      color: "black" // Numbers are now black
                    }}>2.</span>
                    <strong>Responsibility and Accountability:</strong> We recognize that with leadership comes responsibility. Our leaders hold themselves accountable for their actions and decisions, fostering a culture of transparency and trust within our organization and the communities we serve.
                  </li>

                  <li style={{
                    marginBottom: "15px", 
                    position: "relative",
                    paddingLeft: "30px"
                  }}>
                    <span style={{
                      position: "absolute", 
                      left: "-30px", 
                      top: "0", 
                      fontSize: "1.5rem", 
                      color: "black" // Numbers are now black
                    }}>3.</span>
                    <strong>Education and Awareness:</strong> We believe in the power of knowledge as a catalyst for change. Our leadership emphasizes continuous learning, promoting awareness of the root causes of gender-based violence, and equipping men with the tools to advocate for justice and equality.
                  </li>

                  <li style={{
                    marginBottom: "15px", 
                    position: "relative",
                    paddingLeft: "30px"
                  }}>
                    <span style={{
                      position: "absolute", 
                      left: "-30px", 
                      top: "0", 
                      fontSize: "1.5rem", 
                      color: "black" // Numbers are now black
                    }}>4.</span>
                    <strong>Compassion and Understanding:</strong> Empathy is at the heart of our approach. We strive to understand the experiences of those affected by GBV and femicide, allowing us to respond with compassion and support.
                  </li>

                  <li style={{
                    marginBottom: "15px", 
                    position: "relative",
                    paddingLeft: "30px"
                  }}>
                    <span style={{
                      position: "absolute", 
                      left: "-30px", 
                      top: "0", 
                      fontSize: "1.5rem", 
                      color: "black" // Numbers are now black
                    }}>5.</span>
                    <strong>Action-Oriented Mindset:</strong> We are committed to turning awareness into action and action that results in behavioral change. Our leadership fosters an environment where proactive measures are taken to address and combat gender-based violence, encouraging initiatives that create real, lasting change.
                  </li>

                  <li style={{
                    marginBottom: "15px", 
                    position: "relative",
                    paddingLeft: "30px"
                  }}>
                    <span style={{
                      position: "absolute", 
                      left: "-30px", 
                      top: "0", 
                      fontSize: "1.5rem", 
                      color: "black" // Numbers are now black
                    }}>6.</span>
                    <strong>Mentorship and Growth:</strong> We prioritize mentorship, recognizing the importance of guiding the next generation of leaders. By fostering personal and professional growth, we aim to inspire a new wave of advocates dedicated to ending gender-based violence.
                  </li>
                </ol>

                <p style={{ textIndent: "30px" }}>
                  Through this leadership philosophy, the GoodMen Foundation
                  seeks to create a global community of men who are not just
                  allies but active participants in the movement towards a safer
                  and more equitable world for everyone. Together, we can
                  challenge the status quo and drive meaningful change.
                </p>
              </div>
            </>
          }
        />
      </div>
    </>
  );
};

export default LeadershipPage;
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Breadcrumb from "@/components/Common/Breadcrumb";

import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Global Advisory",
  description: "This is the Global Advisory page.",
  // other metadata
};

const BlogDetailsPage = () => {
  return (
    <>
      <div className="flex justify-center items-center" style={{ width: "100%" }}>
        <Breadcrumb
          pageName=""
          description={
            <>
              <span
                style={{
                  color: "black", // Black color for the title
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4), 0 0 25px black, 0 0 5px darkorange", // Glowing effect with black
                  fontFamily: "'Times New Roman', serif", // Fancy font family
                  letterSpacing: "1px", // Slightly increased spacing for elegance
                  fontWeight: "bold", // Bold for emphasis
                  textTransform: "uppercase", // Uppercase for a regal look
                  fontSize: "2rem" // Size of the text
                }}
              >
                Global Advisory Council
              </span>

              <div
                style={{
                  color: "black", // Black text color
                  backgroundColor: "white", // White background color
                  border: "2px solid black", // Black border
                  padding: "20px",
                  borderRadius: "10px", // Curved edges
                  marginTop: "20px", // Spacing above the content div
                  marginLeft: "20px", // Margin left for the div
                  fontFamily: "'Times New Roman', serif", // Fancy font family
                  textAlign: "left",
                  fontSize: "1.2rem"
                }}
              >
                <p style={{textIndent: "30px"}}>
                  The GoodMen Foundation proudly operates with the guidance of our Global Advisory Council, 
                  a diverse group of esteemed leaders, experts, and advocates dedicated to advancing our mission 
                  to combat gender-based violence and femicide. This council plays a crucial role in shaping our 
                  strategies, providing insights, and ensuring that our initiatives are impactful and aligned 
                  with global best practices.
                </p>
                <h2 style={{ fontWeight: "bold", marginTop: "20px" }}>
                  Key Roles of the Global Advisory Council:
                </h2>
                <ul style={{ marginLeft: "20px", listStyleType: "disc" }}>
  <li>
    <strong>Strategic Guidance:</strong> Council members lend their expertise to help us navigate 
    complex social issues and develop effective strategies for outreach and engagement.
  </li>
  <li>
    <strong>Advocacy and Influence:</strong> With their extensive networks, council members amplify 
    our message and promote our mission across various platforms, fostering collaboration and support.
  </li>
  <li>
    <strong>Education and Training:</strong> The council provides valuable resources and training 
    opportunities, helping to educate our members and the broader community about gender-based 
    violence and the importance of male involvement in prevention efforts.
  </li>
  <li>
    <strong>Research and Innovation:</strong> Members contribute to the development of research 
    initiatives that inform our programs and policy recommendations, ensuring our approaches are 
    evidence-based and impactful.
  </li>
  <li>
    <strong>Cultural Sensitivity:</strong> Our council brings a wealth of knowledge about different 
    cultural contexts, helping us to tailor our initiatives to resonate with diverse communities 
    around the world.
  </li>
</ul>
                <p style={{ marginTop: "20px", textIndent: "30px" }}>
                  Through the collective wisdom and commitment of our Global Advisory Council, the GoodMen Foundation 
                  is empowered to lead meaningful change in the fight against gender-based violence. Together, we are 
                  building a more just and equitable world for all.
                </p>
              </div>
            </>
          }
        />
      </div>
    </>
  );
};

export default BlogDetailsPage;
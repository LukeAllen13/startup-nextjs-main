import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Partners from "@/components/PartnersSection/index";
import '../../styles/index.css';

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story",
  description: "This is the Our Story page.",
  // other metadata
};

const Partner = () => {
  return (
    <>

      <Partners />
      
    </>
  );
};

export default Partner;
import { motion } from "framer-motion";
import { StyledAboutSection } from "./style";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeButton from "@/components/HomeButton";
import OurGoals from "./OurGoals";
import Banner from "./Banner";
import WhoWeAre from "./WhoWeAre";
import SEO from "@/components/SEO";
import axios from "axios";
import { useEffect, useState } from "react";
import Counter from "./Counter";

const About = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API}/about.php?id=1`,
        );
        if (
          response.data.results[0].status === 200 ||
          response.data.results[0].status === 500
        ) {
          setText(response.data.results[0].text);
        }
      } catch (error) {
        error;
      }
    };

    fetchAboutData();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SEO
        title="About • YRPrey"
        description="Learn a little more about us and our purposes with YRPrey!"
      />
      <Header />
      <StyledAboutSection>
        <div className="container">
          <div className="content">
            <Banner />
            <Counter />
            <WhoWeAre />
            <OurGoals />
            <h1>{text}</h1>
          </div>
        </div>
      </StyledAboutSection>
      <Footer />
      <HomeButton />
    </motion.div>
  );
};

export default About;

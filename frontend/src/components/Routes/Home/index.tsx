import { motion } from "framer-motion";
import ShopSection from "./ShopSection";
import BlogSection from "./BlogSection";
import AboutSection from "./AboutSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InitialSection from "./InitialSection";
import ContactSection from "./ContactSection";
import HomeButton from "@/components/HomeButton";
import SEO from "@/components/SEO";
import Layout from "@/components/Layout";

const Home = () => {

  return (
    <>
      <motion.div
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SEO
          title="Welcome to YRPrey"
          description="Your Complete Vulnerability Site!"
        />
        <HomeButton />
        <Header />
        <Layout>
          <InitialSection />
          <AboutSection />
          <ShopSection />
          <BlogSection />
          <ContactSection />
        </Layout>
        <Footer />
      </motion.div>
    </>
  );
}

export default Home;

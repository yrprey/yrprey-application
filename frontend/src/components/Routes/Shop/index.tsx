import React from "react";
import Carousel from "./Carousel";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TopCollections from "./TopCollections";
import HomeButton from "@/components/HomeButton";
import SEO from "@/components/SEO";

const Shop = () => {

  return (
    <motion.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SEO
        title="Shop • YRPrey"
        description="Buy here the most sought-after collectibles in the market!"
      />
      <Header />
      <Carousel />
      <TopCollections />
      <Footer />
      <HomeButton />
    </motion.div>
  );
}

export default Shop;

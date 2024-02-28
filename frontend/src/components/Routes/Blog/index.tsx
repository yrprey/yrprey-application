import { motion } from "framer-motion";
import { StyledBlogSection } from "./style";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeButton from "@/components/HomeButton";
import CardBlogPage from "./CardBlogPage";
import SEO from "@/components/SEO";

const Blog = () => {

  return (
    <motion.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SEO
        title="Blog • YRPrey"
        description="You can find all news about security, new bugs, and new vulnerabilities here!"
      />
      <Header />
      <StyledBlogSection>
        <div className="container">
          <div className="content">
            <CardBlogPage />
          </div>
        </div>
      </StyledBlogSection>
      <Footer />
      <HomeButton />
    </motion.div>
  );
}

export default Blog;

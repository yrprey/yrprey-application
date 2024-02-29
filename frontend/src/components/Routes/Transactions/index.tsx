import React, { useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Header from "@/components/Header";
import { StyledTransactionsSection } from "./style";
import Footer from "@/components/Footer";
import HomeButton from "@/components/HomeButton";
import SEO from "@/components/SEO";
import CardTransaction from "./CardTransation";
import { Context } from "@/context/context";
import Error404Page from "@/components/ErrorPage";

const TransactionsPages = () => {
  const { tokenLocal, router } = useContext(Context);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    }
  }, []);

  const [listTransations, setListTransations] = useState([]);

  useEffect(() => {
    const fetchDataTransations = async (data: any) => {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API}/v2/status`,
          data,
        );
        setListTransations(response.data.results);
      } catch (error) {
        error;
      }
    };

    fetchDataTransations({ token: tokenLocal });
  }, [tokenLocal]);

  if (!tokenLocal) {
    return (
      <>
        <Error404Page />
      </>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SEO
        title="Transactions • YRPrey"
        description="Join us in the search for bugs and vulnerabilities!"
      />
      <Header />
      <StyledTransactionsSection>
        <div className="container">
          <h1>My transactions</h1>
          {listTransations ? (
            <>
              {listTransations
                .slice()
                .reverse()
                .map((transaction, index) => (
                  <CardTransaction key={index} transaction={transaction} />
                ))}
            </>
          ) : (
            <>
              <p>There are no transactions</p>
            </>
          )}
        </div>
      </StyledTransactionsSection>
      <Footer />
      <HomeButton />
    </motion.div>
  );
};

export default TransactionsPages;

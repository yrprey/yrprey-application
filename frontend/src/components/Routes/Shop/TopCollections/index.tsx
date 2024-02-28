import { motion } from "framer-motion";
import { ContainerTopCollections } from "./style";
import React from "react";
import TableCollection from "@/components/TableCollection";

const TopCollections = () => {

  return (
    <>
      <motion.div
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ContainerTopCollections>
          <div className="content">
            <h3 className="content-title">Top collections</h3>
            <TableCollection />
          </div>
        </ContainerTopCollections>
      </motion.div>
    </>
  );
};

export default TopCollections;

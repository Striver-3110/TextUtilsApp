import React, { useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";

export default function () {
  const [variants, setVariants] = useState("white");

  return (
    <motion.span className="d-flex gap-3">
      <a href="https://www.instagram.com/prajapati_jay._._/">
        <motion.div style={{ color: "#A92F91" }}>
          <InstagramIcon />
        </motion.div>
      </a>
      <a href="https://www.linkedin.com/in/prajapati-jay-aa131624a">
        <motion.div style={{ color: "#0A66C2" }}>
          <LinkedInIcon />
        </motion.div>
      </a>
      <a href="https://github.com/Striver-3110">
        <motion.div style={{ color: "white" }}>
          <GitHubIcon />
        </motion.div>
      </a>
    </motion.span>
  );
}

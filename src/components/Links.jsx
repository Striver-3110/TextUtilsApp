import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";



export default function () {
  // const [variants, setVariants] = useState("white");

  return (
    <motion.span className="d-flex gap-3 mx-3">
      <Link to="https://www.instagram.com/prajapati_jay._._/">
        <motion.div style={{ color: "#A92F91" }}>
          <InstagramIcon />
        </motion.div>
      </Link>
      <Link to="https://www.linkedin.com/in/prajapati-jay-aa131624a">
        <motion.div style={{ color: "#0A66C2" }}>
          <LinkedInIcon />
        </motion.div>
      </Link>
      <Link to="https://github.com/Striver-3110">
        <motion.div style={{ color: "white" }}>
          <GitHubIcon />
        </motion.div>
      </Link>
    </motion.span>
  );
}

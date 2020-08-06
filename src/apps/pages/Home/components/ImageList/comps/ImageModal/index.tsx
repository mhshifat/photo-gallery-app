import { motion } from "framer-motion";
import React from "react";

interface Props {
  src: string;
  setSelectedImg: (value: string | null) => void;
}

const ImageModal: React.FC<Props> = ({ src, setSelectedImg }) => {
  return (
    <motion.div
      className="backdrop"
      onClick={() => setSelectedImg(null)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={src}
        alt="enlarged pic"
        onClick={(e) => e.stopPropagation()}
        initial={{ y: "-100vh" }}
        animate={{ y: "0" }}
      />
    </motion.div>
  );
};

export default ImageModal;

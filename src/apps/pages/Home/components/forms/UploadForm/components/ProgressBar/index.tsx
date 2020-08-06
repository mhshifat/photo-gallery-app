import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import useStorage from "../../../../../../../common/hooks/useStorage";

interface Props {
  image: File;
  setImage: (image: File | null) => void;
}

const ProgressBar: React.FC<Props> = ({ image, setImage }) => {
  const { url, progress } = useStorage(image);
  const setImageRef = useRef(setImage);

  useEffect(() => {
    if (url) setImageRef.current(null);
  }, [url]);

  return (
    <motion.div
      className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
    />
  );
};

export default ProgressBar;

import { motion } from "framer-motion";
import React, { useState } from "react";
import useFirestore from "../../../../common/hooks/useFirestore";
import ImageModal from "./comps/ImageModal";

const ImageList = () => {
  const { docs: images } = useFirestore("images");
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <>
      <div className="img-grid">
        {!!images.length &&
          images.map((img) => (
            <motion.div
              className="img-wrap"
              key={img.id}
              onClick={() => setSelectedImg(img.url)}
              layout
              whileHover={{
                opacity: 1,
              }}
            >
              <motion.img
                src={img.url}
                alt="Uploaded Img"
                initial={{
                  opacity: 0,
                }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 1,
                }}
              />
            </motion.div>
          ))}
      </div>
      {selectedImg && (
        <ImageModal src={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </>
  );
};

export default ImageList;

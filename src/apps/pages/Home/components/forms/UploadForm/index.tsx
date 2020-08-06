import React, { ChangeEvent, useState } from "react";
import ProgressBar from "./components/ProgressBar";

const UploadForm = () => {
  const [image, setImage] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const allowedTypes = ["image/png", "image/jpeg"];

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && allowedTypes.includes(file.type)) {
      setImage(file);
      setError(null);
    } else {
      setError("Please select an image file (png or jpeg)");
      setImage(null);
    }
  };

  return (
    <form>
      <label>
        <input
          type="file"
          name="image"
          id="image"
          onChange={handleImageUpload}
        />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {image && <div>{image.name}</div>}
        {image && <ProgressBar image={image} setImage={setImage} />}
      </div>
    </form>
  );
};

export default UploadForm;

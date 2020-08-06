import { useEffect, useState } from "react";
import {
  projectFirestore,
  projectStorage,
  timestamp,
} from "../../../../firebase/index";

const useStorage = (file: File) => {
  const [url, setUrl] = useState<string | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection("images");

    storageRef.put(file).on(
      "state_changed",
      (snapshot) => {
        const percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        collectionRef.add({
          url,
          createdAt: timestamp(),
        });
        setUrl(url);
      }
    );
  }, [file]);

  const returnObj = {
    url,
    error,
    progress,
  };

  return returnObj as typeof returnObj;
};

export default useStorage;

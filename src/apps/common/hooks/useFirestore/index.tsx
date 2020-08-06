import { useEffect, useState } from "react";
import { projectFirestore } from "../../../../firebase/index";

interface IImage {
  id: string;
  url: string;
  createdAt: string;
}

const useFirestore = (collectionName: string) => {
  const [docs, setDocs] = useState<IImage[]>([]);

  useEffect(() => {
    const unsubscribe = projectFirestore
      .collection(collectionName)
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        const images = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDocs(images as IImage[]);
      });

    return () => unsubscribe();
  }, [collectionName]);

  const returnObj = { docs };
  return returnObj as typeof returnObj;
};

export default useFirestore;

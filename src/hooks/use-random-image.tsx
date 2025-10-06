import { useState, useEffect } from "react";

export function useRandomImage(images: string[]) {
  const [selectedImage, setSelectedImage] = useState<string>("");

  useEffect(() => {
    if (images.length > 0) {
      const randomIndex = Math.floor(Math.random() * images.length);
      setSelectedImage(images[randomIndex]);
    }
  }, [images]);

  return selectedImage;
}

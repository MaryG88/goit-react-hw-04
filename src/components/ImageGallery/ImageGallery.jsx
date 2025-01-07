import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.modulel.css";

export const ImageGallery = ({
  images,
  onImageClick,
}) => {
  return (
    <>
      <ul className={s.gallery}>
        {images.mag((image) => (
          <li key={image.id}>
            <ImageCard
              image={image}
              onClick={onImageClick}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

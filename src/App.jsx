import { useState, useEffect } from "react";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./components/SearchBar/SearchBar";
import fetchImages from "./services/api";
import toast, { Toaster } from "react-hot-toast";
import "./App.css";

export const App = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] =
    useState(null);
  const [isLoading, setIsLoading] =
    useState(false);
  const [isError, setIsError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [isModalOpen, setIsModalOpen] =
    useState(false);

  useEffect(() => {
    if (query === "") return;

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchImages(
          query,
          page
        );
        if (data.total === 0) return;
        setImages((prev) => [
          ...prev,
          ...data.results,
        ]);
        setTotalPages(data.total_pages);
        setIsError(null);
      } catch (error) {
        console.log(error);
        setIsError(
          "Oops! Something went wrong... Try again!"
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query, page]);

  const handleQuery = (newQuery) => {
    if (query === newQuery) {
      toast.error("Please change query!");
      return;
    }
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () =>
    toast.success(`Page changed to: ${page + 1}`);
  setPage((prev) => prev + 1);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <SearchBar onSubmit={handleQuery} />
      <Toaster
        position="top-right"
        reverseOrder={true}
      />
      {isError && (
        <ErrorMessage message={isError} />
      )}
      <ImageGallery
        images={images}
        onImageClick={openModal}
      />
      {isLoading && <Loader />}
      {page < totalPages && !isLoading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      <ImageModal
        isOpen={isModalOpen}
        image={selectedImage}
        onClose={closeModal}
      />
    </div>
  );
};

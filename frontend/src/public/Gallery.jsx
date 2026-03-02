import { useEffect, useState } from "react";
import API from "../api";

function Gallery() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchGallery = async () => {
      const res = await API.get("/gallery");
      setImages(res.data);
    };

    fetchGallery();
  }, []);

  return (
    <div className="gallery-page">

      <div className="gallery-header">
        <h1>Our Gallery</h1>
        <p>Moments of elegance captured beautifully.</p>
      </div>

      <div className="gallery-grid">
        {images.map((item) => (
          <div
            key={item._id}
            className="gallery-item"
            onClick={() =>
              setSelectedImage(
                `http://localhost:5000${item.image}`
              )
            }
          >
            <img
              src={`http://localhost:5000${item.image}`}
              alt="gallery"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="lightbox"
          onClick={() => setSelectedImage(null)}
        >
          <img src={selectedImage} alt="preview" />
        </div>
      )}
    </div>
  );
}

export default Gallery;
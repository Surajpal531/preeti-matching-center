import { useState } from "react";

function Gallery() {
  const images = [
    "https://images.pexels.com/photos/932401/pexels-photo-932401.jpeg",
    "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
    "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg",
    "https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg",
    "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg",
    "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg",
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="gallery-page">

      <div className="gallery-header">
        <h1>Our Gallery</h1>
        <p>Moments of elegance captured beautifully.</p>
      </div>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => setSelectedImage(img)}
          >
            <img src={img} alt="gallery" />
          </div>
        ))}
      </div>

      {/* Lightbox */}
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
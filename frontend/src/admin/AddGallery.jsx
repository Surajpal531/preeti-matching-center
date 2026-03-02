import { useState } from "react";
import API from "../api";

function AddGallery() {
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);

    await API.post("/gallery", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    alert("Image Uploaded!");
  };

  return (
    <div>
      <h2>Add Gallery Image</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="file"
          required
          onChange={(e) =>
            setImage(e.target.files[0])
          }
        />

        <button type="submit">
          Upload
        </button>
      </form>
    </div>
  );
}

export default AddGallery;
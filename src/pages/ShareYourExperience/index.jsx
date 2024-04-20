import { useEffect, useState } from "react";
import DateLocation from "../../components/DateLocation";
import Footer from "../../components/Footer";
import Intro from "../../components/Intro";
import Navbar from "../../components/Navbar";
import "./index.css";
import { ImCancelCircle } from "react-icons/im";
import { toast } from "react-toastify";

const url = "https://api.cloudinary.com/v1_1/ducwugynu/image/upload";

export default function ShareYourExperience() {
  const [files, setFiles] = useState([]);
  const [filePreviews, setFilePreviews] = useState([]);

  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    console.info({ event: event.target.files });
    setFiles([...files, ...Object.values(event.target.files)]);
    // setFiles([]);
  };

  const removeImg = (index) => {
    const tempFiles = [...files];
    tempFiles.splice(index, 1);
    setFiles(tempFiles);
    // setFiles([]);
  };

  useEffect(() => {
    // create the preview
    const tempFilePreviews = files.map((file) => URL.createObjectURL(file));

    setFilePreviews(tempFilePreviews);

    // free memory when ever this component is unmounted
    return () =>
      tempFilePreviews.forEach((previewUrl) => URL.revokeObjectURL(previewUrl));
  }, [files]);

  const upload = async () => {
    try {
      setLoading(true);

      const reqs = [];

      for (let i = 0; i < files.length; i++) {
        const formData = new FormData();

        let file = files[i];
        formData.append("file", file);
        formData.append("upload_preset", "xmsjmwvb");

        reqs.push(
          fetch(url, {
            method: "POST",
            body: formData,
          })
        );
      }

      const res = await Promise.all(reqs);
      setLoading(false);
      res.forEach((resItem) => {
        console.info({ resItem });

        setFiles([]);
      });
      toast("Pictures Saved!!!!");
    } catch (error) {
      console.info({ error });
    }
  };

  return (
    <div className="">
      <Navbar />
      <Intro />

      <div className="share-experice">
        <div style={{ marginTop: "20px" }}>
          Share your experinces with us, we would love to see them.
        </div>
        <div className="share-experice-content">
          {filePreviews.map((previewUrl, key) => (
            <div key={key} className="img-container">
              <div className="remove-btn" onClick={() => removeImg(key)}>
                <ImCancelCircle />
              </div>
              <img src={previewUrl} alt="" className="previewImg" />
            </div>
          ))}
        </div>

        {loading ? (
          <div>
            <div className="lds-heart">
              <div></div>
            </div>
          </div>
        ) : (
          <div className="btn-containers">
            <div className="select-btn">
              <label htmlFor="files">
                <div className="btn">Select Images</div>
              </label>
            </div>
            {files.length > 0 && (
              <div className="btn" onClick={upload}>
                Upload Images
              </div>
            )}
          </div>
        )}
      </div>
      <DateLocation />
      <Footer />
      <input
        type="file"
        name="files"
        id="files"
        multiple
        onChange={handleChange}
        accept="image/png, image/gif, image/jpeg"
        className="hiden"
      />
    </div>
  );
}

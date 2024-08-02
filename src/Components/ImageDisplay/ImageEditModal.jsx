import { useState, useEffect } from "react";
import {
  Link,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";
import ImageDirectory from "../../Admin-Section/ImageDirectory";


const ImageEditModal = ({
  isOpen,
  onClose,
  selectedImage,
  onUpdateImage,
  onTextUpdate,
  initialText,
  selectedImageIndex,
  allTexts,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [initialImage, setInitialImage] = useState(selectedImage?.src || "");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (initialText !== undefined) {
      setInputValue(initialText);
    }
    
  }, [initialText]);

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleGalleryPick = (newImage) => {
    onUpdateImage({ src: newImage, text: inputValue }, selectedImageIndex);
    navigate(-1);
  };

  useEffect(() => {
    if (selectedImage !== null && selectedImage.src !== initialImage) {
      setInitialImage(selectedImage.src);
    }
  }, [selectedImage, initialImage]);

  const handleUpdateImageModal = () => {
    if (
      inputValue !== initialText ||
      selectedImage?.src !== initialImage
    ) {
      onTextUpdate(inputValue, selectedImageIndex);
      onUpdateImage(
        { src: initialImage, text: inputValue },
        selectedImageIndex
      );
      onclose();
    }
  };

  if (!isOpen) return null;

  return (
    <Routes location={location}>
      <Route
        path="*"
        element={
          <div className="fixed inset-0 flex items-center justify-center bg-[#4f2e05] bg-opacity-50 h-full">
            <div className="bg-white p-4 rounded-[50px] shadow-lg w-[700px] h-[630px] ">
              <div className="flex justify-center space-x-3 ml-20">
                <div>
                  <img
                    src={initialImage}
                    alt="image"
                    className="w-[450px] h-[450px]"
                  />
                </div>

                <div className="flex flex-col items-center space-y-[16rem]">
                  <button onClick={onClose}>
                    <img src="/exit.svg" />
                  </button>
                  <div>
                    <Link to={"image_directory"} className="">
                      
                        <img src="/gallery.svg"/>
                      
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mx-12 my-5 z-50">
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputValue}
                  placeholder={initialText}
                  className="w-full border-2 border-[#D3D2D2] rounded-xl px-2 py-4 "
                />
               
                <div>
                  {allTexts.map((text, index) => {
                    <input
                      key={index}
                      type="text"
                      value={index === selectedImageIndex ? inputValue : text}
                      onChange={
                        index === selectedImageIndex ? inputValue : () => {}
                      }
                      placeholder={text}
                      className="w-full border-2 border-[#D3D2D2] rounded-xl px-2 py-4 mt-2"
                      disabled={index !== selectedImageIndex}
                    />;
                  })}
                </div>
              </div>

              <div className="flex items-center justify-center space-x-20">
                <div>
                  <button
                    onClick={onClose}
                    className="border-[1px] border-[#726233] px-4 rounded-full "
                  >
                    <p className="font-[600] text-center text-[#4C4122] text-[19px]">
                      Cancel Update
                    </p>
                  </button>
                </div>
                <div>
                  <button
                    onClick={handleUpdateImageModal}
                    className=" bg-[#726233] px-4 rounded-full"
                  >
                    <p className="text-[#FEFEFE] font-[600] text-[19px]">
                      Update Section
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        }
      />

      <Route
        path="image_directory"
        element={<ImageDirectory onSelectImage={handleGalleryPick} />}
      />
    </Routes>
  );
};

export default ImageEditModal;

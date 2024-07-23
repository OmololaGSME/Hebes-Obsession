import { useState } from "react";
import { Link } from "react-router-dom";
import defaultImages from "./defaultImages";
import ImageEditModal from "./ImageEditModal";

const HomeImageModal = ({ isAdmin }) => {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null)
    const [selectedImageIndex,setSelectedImageIndex] = useState(null)
    const [imageTexts,setImageTexts] = useState(defaultImages.home.map(image=>image.text))

    const handleClick = (image,index) =>{
        setSelectedImage(image)
        setSelectedImageIndex(index)
        setIsModalOpen(true)
    }

    const handlecloseModal = ()=>{
        setIsModalOpen(false)
        setSelectedImage(null)
        selectedImageIndex(null)
    }

    const handleTextUpdate = (text,index) => {
        const newImageTexts = [...imageTexts]
        newImageTexts[index] = text
        setImageTexts(newImageTexts)
    }

    const handleUpdateImageModal = (image,index) =>{
        const newImages = [...defaultImages.home]
        newImages[index].src = image.src
        newImages[index].text = image.text
        defaultImages.home= newImages
        setIsModalOpen(false)
    }

  return (
    <div className="mx-20 space-y-8">
      {defaultImages.home.length > 0 && (
        <div className="flex flex-col items-end space-y-3">
          <img 
          src={defaultImages.home[0].src} 
          alt="image" 
            className="mt-9"
          />
          {isAdmin && (
            <button
            onClick={()=>handleClick(defaultImages.home[0],0)}
            >
              Change Image
            </button>
          )}
        </div>
      )}
      <div className="flex justify-center">
        <button className="border-2 rounded-full py-[10px] px-[18px]  text-[#FEFEFE] text-[18px] bg-[#726233]">
        {!isAdmin &&  <Link to={'/service'}> Book A Session</Link>}
        {isAdmin &&  <Link to={'/admin/service'}> Book A Session</Link>}
        </button>
      </div>

      <div className="flex flex-wrap items-end justify-between space-y-11 ">
        {defaultImages.home.slice(1).map((image, index) => (
          <div
            key={index}
            className="space-y-8 border-[0.5px] border-[#E8CD80] rounded-b-lg"
          >
            {isAdmin &&(
           <>
           <Link to={image.link2}>
            <img src={image.src} alt={image.text} />
            </Link>
            <div className="flex justify-between items-center pb-2 px-2">
            
               <p className=" text-center font-[400] text-[#0A0A06]">
                {image.text}
              </p>
                <button
                  onClick={()=>handleClick(image.src)}
                  className="px-7 font-[600]"
                >
                  Edit Section
                </button>
               
            </div>
           </>
            )}
            {!isAdmin &&(
            <>
            <Link to={image.link}>
            <img src={image.src} alt={image.text} />
            </Link>
            <div className="flex justify-between items-center pb-2 px-2">
            
                <p className=" flex-1 text-center text-[20px] font-[400] text-[#0A0A06]">
                {image.text}
              </p>
            
            </div>
            </>
            )}
            
            
          </div>
        ))}
      </div>

      <ImageEditModal 
      isOpen={isModalOpen} 
      onClose={handlecloseModal}
        selectedImage={selectedImage}
        onUpdateImage={handleUpdateImageModal}
        onTextUpdate={handleTextUpdate}
        initialText={imageTexts[selectedImageIndex]}
        allTexts={imageTexts}
        selectedImageIndex={selectedImageIndex}
      />

      

    </div>
  );
};

export default HomeImageModal;

import { useState } from "react";
import { Link } from "react-router-dom";
import defaultImages from "./defaultImages";
import ImageEditModal from "./ImageEditModal";



const HomeImageModal = ({ isAdmin }) => {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null)
    const [selectedImageIndex,setSelectedImageIndex] = useState(null)
    const [imageTexts, setImageTexts] = useState(defaultImages.home.map(image => image.text));

    const handleClick = (image,index) =>{
        setSelectedImage(image)
        setSelectedImageIndex(index)
        setIsModalOpen(true)
    }

    const handlecloseModal = ()=>{
        setIsModalOpen(false)
        setSelectedImage(null)
        setSelectedImageIndex(null)
    }

    const handleTextUpdate = (text, index) => {
      const newImageTexts = [...imageTexts];
      newImageTexts[index] = text;
      setImageTexts(newImageTexts);
    };
  
    const handleUpdateImageModal = (image, index) => {
      const newImages = [...defaultImages.home];
      newImages[index] = image;
      defaultImages.home = newImages;
      setIsModalOpen(false);
    };

  return (
    <div className="md:mx-20 mx-8 space-y-8 flex flex-col items-center justify-center">
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
            className="hover:bg-[#FAF3E0] p-1"
            >
              Change Image
            </button>
          )}
        </div>
      )}
      <div className="flex justify-center">
        <button className="border-2 rounded-full py-[10px] px-[18px]  text-[#FEFEFE] text-[18px] bg-[#726233]">
        {!isAdmin ?
        (<Link to={'/service'}> Book A Session</Link>)
         :
        (<Link to={'/admin/service'}> Book A Session</Link>) 
         }
        </button>
      </div>

      <div className="grid grid-cols-2 gap-[3rem] lg:gap-x-[17rem] xlg:gap-x-[13rem]">
        {defaultImages.home.slice(1).map((image, index) => (
          <div
            key={index}
            className="space-y-8 "
          >
            {isAdmin ?(
           <>
           <Link to={image.link_admin}>
            <img 
            src={image.src} 
            alt={image.text}
            className=""
             />
            </Link>
            <div className="flex justify-between items-center pb-2 px-2">
            
               <p className=" text-center font-[400] text-[#0A0A06]">
                {image.text}
              </p>
                <button
                  onClick={()=>handleClick(image, index + 1)}
                  className="p-1 font-[600] hover:bg-[#FAF3E0] "
                >
                  Edit Section
                </button>
               
            </div>
           </>
            )
            :
            (
            <>
            <Link to={image.link}>
            <img 
            src={image.src} 
            alt={image.text} 
              className=""
            />
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

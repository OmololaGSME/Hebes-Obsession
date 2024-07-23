import { useState,useEffect } from "react"
import { Link } from "react-router-dom"

const ImageEditModal = ({isOpen,onClose,selectedImage,onUpdateImage,onTextUpdate,initialText,selectedImageIndex,allTexts}) => {

  const [inputValue,setInputValue] = useState('')
  const [initialImage,setInitialImage] = useState(selectedImage)
  // const [isEditingText, setIsEditingText] = useState(false)

  const handleInputValue=(e)=>{
    setInputValue(e.target.value)
  }

  const handleUpdatetext = () =>{
    onTextUpdate(inputValue,selectedImageIndex)
    onClose()
  }

  const handleGalleryPick = ()=>{
    onUpdateImage({src:selectedImage, text:inputValue},selectedImageIndex)
    onClose()
  }

  useEffect(()=>{
    if(selectedImage !== initialImage){
      setInitialImage(selectedImage)
    }
  },[selectedImage,initialImage])

  useEffect(()=>{
    setInputValue(initialText)
  },[initialText])

  const handleUpdateImageModal = ()=>{
    if(inputValue!==initialText || selectedImage !== initialImage){
      onTextUpdate(inputValue)
      onUpdateImage({src:selectedImage, text:inputValue},selectedImageIndex)
      onclose()
    }
  }
   
  if(!isOpen)return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#4f2e05] bg-opacity-50 h-full">

    <div className="bg-white p-4 rounded-[50px] shadow-lg w-[700px] h-[630px] ">
       
    <div className="flex justify-center space-x-3 ml-20">
        <div>
            <img 
            src={selectedImage} 
            alt="image"
            className="w-[450px] h-[450px]"
             />
        </div>

            <div className="flex flex-col items-center space-y-[16rem]">
            <button
            onClick={onClose}>
                <img
                    src="/exit.svg"
                />
            </button>
            <div>
               <Link to='/admin/image_directory'>
               <button 
               onClick={handleGalleryPick}
               className="border-2 rounded-full p-2 drop-shadow-xl">
                    <img
                        src="/gallery.svg"
                    />
                </button>
               </Link>
            </div>
            </div>
        </div>


            <div className="mx-12 my-5">
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputValue}
                    placeholder={initialText}
                    className="w-full border-2 border-[#D3D2D2] rounded-xl px-2 py-4 "
                />
                {/* <button
                onClick={handleUpdatetext}
                >
                  <p>Click to edit subject</p>
                </button> */}
               <div>
               {allTexts.map((text,index)=>{
                  <input
                    key={index}
                    type="text"
                    value={index === selectedImageIndex?inputValue:text}
                    onChange={(e)=>handleInputValue(e)}
                    placeholder={text}
                    className="w-full border-2 border-[#D3D2D2] rounded-xl px-2 py-4 mt-2"
                    disabled={index !== selectedImageIndex}
                  />
                })}
               </div>
            </div>


            <div className="flex items-center justify-center space-x-20">
                <div>
                    <button
                    onClick={onClose}
                    className="border-[1px] border-[#726233] px-4 rounded-full "
                    >
                    <p className="font-[600] text-center text-[#4C4122] text-[19px]">Cancel Update</p>
                    </button>
                </div>
                <div>
                    <button
                    onClick={handleUpdateImageModal}
                    className=" bg-[#726233] px-4 rounded-full"
                    >
                        <p className="text-[#FEFEFE] font-[600] text-[19px]">Update Section</p>
                    </button>
                </div>
            </div>
    </div>

    </div>
  )}

export default ImageEditModal
import { useState } from "react"
import defaultImages from "./defaultImages"
import ServiceEditModal from "./ServiceEditModal"

const ServiceImageModal = ({isAdmin}) => {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedImage,setSelectedImage] = useState(null)
    const[selectedImageIndex,setSelectedImageIndex] = useState(null)
    const [images,setImages] = useState({
        beauty_services:defaultImages.beauty_services,
        wig_services:defaultImages.wig_services
    })

    const handleClick = (image,index,category) =>{
        setSelectedImage({...image,category}),
        setSelectedImageIndex(index),
        setIsModalOpen(true)
    }

    const handleCloseModal = () =>{
        setIsModalOpen(false)
        setSelectedImage(null)
        setSelectedImageIndex(null)
    }

    // const handleTextUpdate = (text,index) =>{
    //     const newImageTexts = [...imageTexts]
    //     newImageTexts[index] = text
    //     setImageTexts(newImageTexts)
    // }

    const handleImageupdate = (updatedImages,index,category)=>{
        const newImage = {...images}
        newImage[category][index] = {...newImage[category][index],...updatedImages}
        setImages(newImage)
    }

    const handleAmountUpdate= (newAmount,index,category)=>{
        const newImages = {...images}
        newImages[category][index] = {...newImages[category][index],amount:newAmount}
        setImages(newImages)
    }

    const handleTimeUpdate= (newTime,index,category)=>{
        const newImages = {...images}
        newImages[category][index] = {...newImages[category][index],time:newTime}
        setImages(newImages)
    }

    const handleItemUpdate= (newItem,index,category)=>{
        const newImages = {...images}
        newImages[category][index] = {...newImages[category][index],item:newItem}
        setImages(newImages)
    }

  return (
    <div className="md:px-20 px-9 py-5">

    <div >
       <div className="border-b-[1px] border-[#4C4122]">
       <h2 className="font-[600] text-[20px] text-[#2E2714] shadow-2xl">Beauty Services</h2>
       </div>

        <div className="grid grid-cols-2 gap-9  justify-items-center lg:mx-24 xlg:mx-[40rem]">
        {images.beauty_services.map((image,index)=>{
            return(
                <div key={index} className="py-8">
                    <img
                        src={image.src}
                        alt={`image${index}`}
                        className="min-w-[140px] min-h-[136px]"
                    />
                    <div className="mx-3 space-y-1 pt-2">
                        <div className="flex justify-between">
                        <p>{image.item}</p>
                        <p>{image.amount}</p>
                        </div>
                        <div className="flex justify-between">
                        <p>Duration </p>
                        <p>{image.time}</p>
                        
                        </div>
                    </div>
                   <div className="flex justify-center items-center pt-4 border-b-2">
                   {isAdmin &&(
                        <button
                        onClick={()=>handleClick(image, index, 'beauty_services')}
                        className="rounded-full bg-[#726233] px-4 "
                        >
                       <p className="text-center text-[#FEFEFE]"> Edit Section</p>
                        </button>
                    )}
                   </div>
                </div>
            )
        })}
        </div>
    </div>

    <div>
       <div className="border-b-[1px] border-[#4C4122]">
       <h2 className="font-[600] text-[20px] text-[#2E2714] shadow-2xl">Wig Service</h2>
       </div>

        <div className="grid grid-cols-2 gap-4 justify-items-center lg:mx-24 xlg:mx-[40rem]">
            {images.wig_services.map((image,index)=>{
                return(
                    <div key={index} className="py-8">
                        <img
                            src={image.src}
                            alt={`image${index}`}
                        />
                        <div className="flex justify-between mx-3 space-y-1 pt-2">
                            <p>{image.item}</p>
                            <p>{image.amount}</p>
                        </div>
                        <div className="flex justify-center items-center pt-4 border-b-2">
                   {isAdmin &&(
                        <button
                        onClick={()=>handleClick(image, index, 'wig_services')}
                        className="rounded-full bg-[#726233] px-4 "
                        >
                       <p className="text-center text-[#FEFEFE]"> Edit Section</p>
                        </button>
                    )}
                   </div>
                    </div>
                )
            })}
        </div>
    </div>

    <ServiceEditModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        selectedImage={selectedImage}
        onUpdateImage={(updatedImage)=>handleImageupdate(updatedImage,selectedImageIndex,selectedImage.category)}
        initialText={selectedImage?.item}
        allTexts={images[selectedImage?.category]?.map(service => service.item)||[]}
        selectedImageIndex={selectedImageIndex}
        amount={selectedImage?.amount}
        time={selectedImage?.time}
        item={selectedImage?.item}
        onUpdateAmount={(newAmount)=>handleAmountUpdate(selectedImageIndex, newAmount, selectedImage.category)}
        onUpdateTime={(newTime)=>handleTimeUpdate(selectedImageIndex,newTime,selectedImage.category)}
        onUpdateItem={(newItem)=>handleItemUpdate(selectedImageIndex,newItem,selectedImage.category)}
    />

    </div>
  )
}

export default ServiceImageModal
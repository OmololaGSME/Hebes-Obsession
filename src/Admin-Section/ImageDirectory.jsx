import { useState } from "react"
import { Footer, Header } from "../Components"

const defaultImages = [
    '/dir.svg',
    '/home_image2.png',
    '/home_image3.png',
    '/home_image4.png',
    '/home_image5.png',
    '/dir2.svg'
]


const ImageDirectory = () => {

    const [images,setImages] = useState(defaultImages)

    const handleUpload = () =>{
        document.getElementById('fileInput').click()
    }

    const handleImageUpload = (e) =>{
        const files = e.target.files
        const newImages = []

        for (let i =0; i<files.length; i++){
            const reader = new FileReader()

            reader.onload=(e)=>{
                newImages.push(e.target.result)
                if(newImages.length === files.length){
                    setImages((prevImages)=>[...prevImages,...newImages])
                }
            }
            reader.readAsDataURL(files[i])
        }
    }

  return (
    <div>
    <Header
        isAdmin={true}
    />
        <div className="flex flex-col justify-center items-center space-y-20 py-11">
            <h1 className="text-[#070606] font-[500] text-[32px]">Image Directory</h1>

            <button 
            className="flex space-x-3 border-[1px] border-[#726233] rounded-full px-3 py-1"
            onClick={handleUpload}
            >
            <p className="font-[600] text-[18px] text-[#4C4122]">Upload Image</p> 

            <img 
                src="/upload.svg"
                alt="upload_icon"
                className=""
            />
            </button>
            <input
                type="file"
                id="fileInput"
                accept="image/*"
                multiple
                className="hidden"
                onChange={handleImageUpload}
            />
        </div>

        <div className="grid grid-cols-3 gap-3 px-20 space-x-3">

        {images.map((image,index)=>(
            <div key={index}>
                <img 
                src={image}
                alt={`image${index}`}
                className="rounded-[20px] w-[441px] h-[538px]"
                />
            </div>
        ))}    

        </div>

        <Footer/>
    </div>
  )
}

export default ImageDirectory
// import {useState,createContext,useContext} from 'react'
import propTypes from 'prop-types'

// const ImageContext = createContext();

// export const useImageContext = () =>  useContext(ImageContext)
    

// export const ImageProvider=({children,defaultImages}) =>{

//     const [images, setImages] = useState(()=>{
//         const storedImages = localStorage.getItem('images')
//         return storedImages ? JSON.parse(storedImages): defaultImages
//     })

//     const addImage = (image) =>{
//         const newImages = [...images,{url:image, text:''}]
//         setImages(newImages);
//         localStorage.setItems('images',JSON.stringify(newImages))
//     }

//     const updateImage = (index,image) =>{
//         const newImages = [...images]
//         newImages[index].url = image
//         setImages(newImages)
//         localStorage.setItems('images', JSON.stringify(newImages))
//     }

//     const updateImageText = (index,text)=>{
//         const newImages = [...images]
//         newImages[index].text=text
//         setImages(newImages)
//         localStorage.setItem('images', JSON.stringify(newImages))
//     }

//     return(
//         <ImageContext.Provider value={{images,addImage,updateImage,updateImageText}}>
//             {children}
//         </ImageContext.Provider>
//     )
// }

// ImageProvider.propsTypes = {
//     children:propTypes.node.isRequired,
//     defaultImages:propTypes.array.isRequired
// }



const  ImageContext = ({images,isAdmin,onEdit}) => {

    if (images.length == 0) return null

    const [firstImage, ...restImages] = images


  return (
    <div className='mx-20 space-y-8'>

    <div className='flex flex-col items-end space-y-3'>
        <img
            src={firstImage.src}
            alt='image'
            className=""
        />
       
        {isAdmin && 
        <button
        onClick={()=>onEdit(firstImage.id)}
        >Change Image</button>
        }
    </div>
    <div className='flex justify-center'>
    <button className='border-2 rounded-full py-[10px] px-[18px]  text-[#FEFEFE] text-[18px] bg-[#726233]'>Book A Session</button>
    </div>

    <h2>Product and Services</h2>

    <div className='flex flex-wrap items-end justify-between space-y-11'>
        {restImages.map((image,index)=>(
            <div key={index}className='space-y-8 border-[0.5px] border-[#E8CD80] rounded-b-lg'>
                <img
                    src={image.src}
                    alt={`Image ${index}`}
                />
               <div className='flex justify-between items-center pb-2 px-2'>
               <p className=' text-center font-[400] text-[#0A0A06]'>{image.text}</p>
                {isAdmin &&
                <button 
                onClick={()=>onEdit(image.id)}
                className='px-7 font-[600]'>Edit Section</button>
                }
               </div>
            </div>
        ))}
    </div>

    </div>
  )
}


ImageContext.propsTypes ={
    images:propTypes.arrayOf(
        propTypes.shape({
            id:propTypes.number.isRequired,
            src:propTypes.string.isRequired,
            text:propTypes.string.isRequired,
        })
    ).isRequired,
    isAdmin:propTypes.bool,
    onEdit:propTypes.func,
}
export default ImageContext
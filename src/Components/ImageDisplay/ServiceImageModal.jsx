import defaultImages from "./defaultImages"

const ServiceImageModal = ({isAdmin}) => {
  return (
    <div className="px-20 py-5">

    <div >
       <div className="border-b-[1px] border-[#4C4122]">
       <h2 className="font-[600] text-[20px] text-[#2E2714] shadow-2xl">Beauty Services</h2>
       </div>

        <div className="grid grid-cols-2 justify-items-center mx-24">
        {defaultImages.beauty_services.map((image,index)=>{
            return(
                <div key={index} className="py-8">
                    <img
                        src={image.src}
                        alt={`image${index}`}
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

        <div className="grid grid-cols-2 gap-4 justify-items-center mx-24">
            {defaultImages.wig_services.map((image,index)=>{
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

    </div>
  )
}

export default ServiceImageModal
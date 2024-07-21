import defaultImages from "./defaultImages"

const HomeImageModal = () => {
  return (
    <div>
        {defaultImages.home.length > 0 &&(
            <div>
            <img
                src={defaultImages.home[0].src}
                alt="image"
            />
            </div>
        )}

        <div className="flex flex-wrap">
            {defaultImages.home.slice(1).map((image,index)=>(
                <div key={index}>
                    <img
                        src={image.src}
                        alt={image.text}
                    />
                    <p>{image.text}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default HomeImageModal
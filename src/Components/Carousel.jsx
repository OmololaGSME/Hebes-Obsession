import { useState } from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../index.css'


const Carousel = () => {

    const [currentIndex,setCurrentIndex] = useState(0)

    const carouselImages = [
    '/carousel.svg',
    '/carousel2.svg',
    '/carousel3.svg',
    '/carousel4.svg',
    '/carousel5.svg',
    '/carousel6.svg',
    '/carousel7.svg',
    ]

    const settings = {
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:3000,
        centerMode:true,
        centerPadding:'0',
        beforeChange:(current,next) =>setCurrentIndex(next)
    }

  return (
    <div className="mx-auto py-20 ">
    <h2 className="font-[600] text-[24px] text-[#1C1B1F] px-9 pb-9">Testimonials</h2>
        <Slider {...settings}>

        {carouselImages.map((image,index)=>(
            <div key={index} className={`px-3 pb-4 relative transition-transform-duration-500 ${index === currentIndex ? "transform scale-105":"transform scale-95"}`}>
                <img
                    src={image}
                    alt={`slide ${index}`}
                
                />
            </div>
        ))}

        </Slider>
    </div>
  )
}

export default Carousel
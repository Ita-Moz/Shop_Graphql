import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper"
function Carousel({ images }) {
    return (
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            {images.map((image, index) => {
                return (
                    <SwiperSlide key={index}>
                        <a href="#">
                            <img src={image} alt="images slide" />
                        </a>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default Carousel

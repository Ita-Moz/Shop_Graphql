import "swiper/css"
import { Swiper, SwiperSlide } from "swiper/react"
import Carousel from "../components/carousel"
import Category from "../components/Category"
import Countdown from "../components/Countdown"
import Product from "../components/Product"
import { bgCategory, products, slider } from "../config/images"
function Home() {
	const arraySlider = [slider.slider1]
	const arrayCategory = [
		"Rau xanh, Rau tươi",
		"Củ, quả, măng tươi",
		"Hành, tỏi, ớt, rau thơm",
		"Nấm các loại",
		"Combo rau củ quả"
	]
	const arrayImgProduct = [
		products.daucahoi,
		products.trungcut,
		products.thitheo,
		products.tieuphuquoc,
		products.tieuden
	]

	return (
		<div className="w-full">
			<div className="mt-5 overflow-hidden rounded-lg">
				<Carousel images={arraySlider} />
			</div>
			<div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 xl:gap-7">
				<Category
					bg={bgCategory.bgPink}
					title={"Rau, củ, trái cây"}
					arraySub={arrayCategory}
				/>
				<Category
					bg={bgCategory.bgBlue}
					title={"Rau, củ, trái cây"}
					arraySub={arrayCategory}
				/>
				<Category
					bg={bgCategory.bgPupper}
					title={"Rau, củ, trái cây"}
					arraySub={arrayCategory}
				/>
				<Category
					bg={bgCategory.bgGreen}
					title={"Rau, củ, trái cây"}
					arraySub={arrayCategory}
				/>
			</div>

			<div className="bg-red p-5 rounded-lg mt-10">
				<div className="text-white md:flex md:justify-between md:items-center">
					<div className="text-center md:text-left">
						<div className=" text-[22px] font-medium">Săn Sale đón lễ</div>
						<p className="text-[15px]">
							Hàng ngàn sản phẩm giảm giá diễn ra từ ngày 30/4 đến 30/6
						</p>
					</div>
					<div>
						<p className="text-[15px] font-medium md:hidden">Kết thúc sau:</p>
						<Countdown time={"1/22/2023"} />
					</div>
				</div>
				<div className="mt-5">
					<Swiper
						slidesPerView={2}
						spaceBetween={10}
						breakpoints={{
							768: {
								slidesPerView: 3,
								spaceBetween: 20
							},
							1024: {
								slidesPerView: 5,
								spaceBetween: 10
							}
						}}
						className="mySwiper"
					>
						{arrayImgProduct.map((image, index) => {
							return (
								<SwiperSlide key={index}>
									<div className="w-full">
										<Product
											img={image}
											category={"Sản phẩm"}
											title={"Hộp 30 trứng cút tươi V.Farm"}
											price={"26.000"}
											sale={"Giảm 10%"}
											amount={44}
										/>
									</div>
								</SwiperSlide>
							)
						})}
					</Swiper>
				</div>
			</div>
		</div>
	)
}

export default Home

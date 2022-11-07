import "swiper/css"
import { Swiper, SwiperSlide } from "swiper/react"
import bandImage from "../assets/images/brand/wolf_brand_image.webp"
import Card from "../components/Card"
import Carousel from "../components/carousel"
import Category from "../components/Category"
import Countdown from "../components/Countdown"
import Product from "../components/Product"
import { bgCategory, brand, products, slider } from "../config/images"
import Tag from "../components/Tag"
function Home() {
	const arrayCategory = [
		"Rau xanh, Rau tươi",
		"Củ, quả, măng tươi",
		"Hành, tỏi, ớt, rau thơm",
		"Nấm các loại",
		"Combo rau củ quả"
	]
	const arraySlider = Object.values(slider)
	const arrayImgProduct = Object.values(products)
	const arrayBgCategory = Object.values(bgCategory)
	const arrayBrand = Object.values(brand)
	return (
		<div className="w-full">
			<div className="mt-5 overflow-hidden rounded-lg">
				<Carousel images={arraySlider} />
			</div>
			{/* Category */}
			<section className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 xl:gap-7">
				{arrayBgCategory.map((item, index) => (
					<Category
						key={index}
						bg={item}
						title={"Rau, củ, trái cây"}
						arraySub={arrayCategory}
					/>
				))}
			</section>

			<section id="sales" className="bg-red p-5 rounded-lg mt-10">
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
				{/* Slider */}
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
			</section>
			{/* Brand */}
			<section id="brand" className="mt-10">
				<h1 className="text-[22px] font-medium">Thương hiệu nổi bật</h1>
				<div className="mt-3 sm:flex sm:gap-5">
					<img src={bandImage} className={"mx-auto sm:max-w-[40%]"} alt="image" />
					<div className="grid grid-cols-3 gap-2 lg:gap-4 my-4">
						{arrayBrand.map((item, index) => {
							return <Card key={index} img={item} />
						})}
					</div>
				</div>
			</section>
			{/* Products list */}
			<section>
				<h1 className="text-[22px] font-medium">Thịt, cá, Trứng rau</h1>
				<div>
					<Tag className={'rounded-2xl'}>Thịt, cá,trứng, rau</Tag>
				</div>
			</section>
		</div>
	)
}

export default Home

import { BiPhoneCall } from "react-icons/bi"
import { RiShoppingCartFill } from "react-icons/ri"
import { MdAccountCircle } from "react-icons/md"
import logo from "/src/assets/images/logo.webp"
import Search from "./Search"
function Header() {
	return (
		<div>
			<div className="hidden md:flex justify-between items-center font-light py-3 border-b border-gray-300">
				<div className="centered">
					<a href="#">Tìm cửa hàng</a>
					<span className="mx-3">|</span>
					<a href="#">Hỗ trợ mua hàng</a>
				</div>
				<div className="centered">
					<a href="#">Sản phẩm đã xem</a>
					<span className="mx-3">|</span>
					<a href="#">Yêu thích</a>
				</div>
			</div>
			<div className="flex items-center justify-between py-5 ">
				<div className="w-[25%]">
					<a href="#"><img src={logo} alt="logo" className="max-h-[45px] max-w-[190px]" /></a>
				</div>
				<Search className={"hidden lg:flex w-[35%]"}></Search>
				<div className="flex items-center gap-3 w-[40%] justify-end ">
					<div className="flex items-center gap-1">
						<BiPhoneCall className="text-2xl md:text-4xl" />
						<div className="text-[13px] md:text-[15px]">
							<p>Hotline</p>
							<strong>1900 0000</strong>
						</div>
					</div>
					<div className="hidden lg:flex justify-center items-center gap-2">
						<MdAccountCircle className="cursor-pointer text-3xl" />
						<strong>Tài khoản</strong>
					</div>
					<div className="centered gap-2">
						<div className="relative">
							<RiShoppingCartFill className="cursor-pointer text-2xl md:text-3xl" />
                        <p className="absolute -top-4 left-5 w-5 h-5 centered bg-yellow rounded-full text-[13px]">2</p>
						</div>
						<strong className="hidden lg:inline-block">Giỏ hàng</strong>
					</div>
				</div>
			</div>
			<Search className={"flex lg:hidden"} />
		</div>
	)
}

export default Header

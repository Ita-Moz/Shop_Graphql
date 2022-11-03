import { BiPhoneCall } from "react-icons/bi"
import { RiShoppingCartFill } from "react-icons/ri"
import { MdAccountCircle } from "react-icons/md"
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
                    <img
                        src="./src/assets/images/logo.webp"
                        alt="logo"
                        className="max-h-[45px] max-w-[190px]"
                    />
                </div>
                <Search className={'hidden lg:flex w-[35%]'}></Search>
                <div className="flex items-center gap-3 w-[40%] justify-end ">
                    <div className="flex items-center gap-1">
                        <BiPhoneCall className="text-2xl md:text-4xl" />
                        <div className="text-[13px] md:text-[15px]">
                            <p>Hotline</p>
                            <strong>1900 0000</strong>
                        </div>
                    </div>
                    <div className="hidden lg:flex justify-center items-center gap-2">
                        <MdAccountCircle className="text-3xl" />
                        <strong>Tài khoản</strong>
                    </div>
                    <div className="centered gap-2">
                        <div className="relative">
                            <RiShoppingCartFill className=" text-2xl md:text-3xl" />
                            <span className="absolute bg-yellow-400 -top-1 -right-1 w-2 h-2 rounded-full"></span>
                        </div>
                        <strong className="hidden lg:inline-block">Giỏ hàng</strong>
                    </div>
                </div>
            </div>
            <Search className={'flex lg:hidden'}/>
        </div>
    )
}

export default Header
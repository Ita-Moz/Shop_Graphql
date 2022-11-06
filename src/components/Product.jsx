import { MdOutlineShoppingCart } from "react-icons/md"
import fireIcon from "../assets/images/fire_icon.svg"

function Product({ img, category, title, price,sale, amount }) {
    return (
        <div className="bg-white p-2 lg:p-5 rounded-2xl">
            <div className="w-full flex justify-center">
                <img className="rounded-md" src={img} alt="images" />
            </div>
            <p className="text-[12px] text-[#90908E]">{category}</p>
            <div>
                <a className="text-[13px] font-medium lg:text-[15px]" href="#">
                    {title}
                </a>
            </div>
            <div className="flex justify-between items-center py-2">
                <div>
                    <p className="text-primary font-medium">{price}đ</p>
                    <p className="text-[13px] text-red font-medium">{sale?sale:""}</p>
                </div>
                <button className="hidden sm:flex rounded-full w-10 h-10 bg-[#cce7d0] centered">
                    <MdOutlineShoppingCart color="#3bb77e" />
                </button>
            </div>
            <div className="bg-[#ffaaaf] z-10 relative w-full rounded-full">
                <span className="relative top-0 left-[40%] z-20 text-white text-[11px] lg:text-[13px]">
                    Đã bán {amount}
                </span>
                <img className="absolute -top-1 left-0 z-30" src={fireIcon} width={20} alt="fire icon" />
                <div className="bg-red rounded-full absolute top-0 left-0 h-full w-1/2 text-center text-white"></div>
            </div>
        </div>
    )
}

export default Product

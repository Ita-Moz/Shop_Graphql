import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined"
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined"
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined"
import { Tooltip, tooltipClasses } from "@mui/material"
import Badge from "@mui/material/Badge"
import { styled } from "@mui/material/styles"
import { useState } from "react"
import { Link } from "react-router-dom"
import Cart from "./Cart"
import Search from "./Search"
import logo from "/src/assets/images/logo.webp"

const MyTooltip = styled(({ className, ...props }) => (
	<Tooltip {...props} classes={{ popper: className }} />
))(() => ({
	[`& .${tooltipClasses.tooltip}`]: {
		backgroundColor: "white",
		color: "rgba(0, 0, 0, 0.87)",
		minWidth: 320,
		boxShadow: "0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 4px 8px rgba(0, 0, 0, 0.1)",
		padding: "8px 16px"
	}
}))

function Header() {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false)
	const handleOpenCart = () => {
		setIsDrawerOpen(true)
	}

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
					<Link to={"/"}>
						<img src={logo} alt="logo" className="max-h-[45px] max-w-[190px]" />
					</Link>
				</div>
				<Search className={"hidden lg:flex w-[35%]"}></Search>
				<div className="flex items-center gap-3 w-[40%] justify-end ">
					<div className="flex items-center gap-1">
						<PhoneInTalkOutlinedIcon className="text-2xl md:text-4xl" />
						<div className="text-[13px] md:text-[15px]">
							<p>Hotline</p>
							<strong>1900 0000</strong>
						</div>
					</div>
					<div className="hidden lg:flex justify-center items-center gap-2">
						<AccountCircleOutlinedIcon className="cursor-pointer text-3xl" />
						<strong>Tài khoản</strong>
					</div>
					<div className="centered gap-2" onClick={handleOpenCart}>
						<Badge badgeContent={5} color="warning">
							<LocalMallOutlinedIcon className="cursor-pointer text-2xl md:text-3xl" />
						</Badge>
						<strong className="hidden lg:inline-block">Giỏ hàng</strong>
					</div>
				</div>
			</div>
			<Search className={"flex lg:hidden"} />
			<NavMenu />
			<Cart isOpen={isDrawerOpen} handleClose={setIsDrawerOpen} />
		</div>
	)
}

function NavMenu() {
	const categoryProduct = <div>san pham</div>
	const categoryNews = <div>tin tuc</div>
	return (
		<div className="hidden lg:flex  items-center py-3 border-b border-gray-300">
			<div className="flex gap-5 font-medium">
				<a href="#">Trang chủ</a>
				<MyTooltip title={categoryProduct}>
					<a href="#">Sản phẩm</a>
				</MyTooltip>
				<MyTooltip title={categoryNews}>
					<a href="#">Tin tức</a>
				</MyTooltip>
				<a href="#">Giới thiệu</a>
				<a href="#">Liên hệ</a>
			</div>
		</div>
	)
}
export default Header

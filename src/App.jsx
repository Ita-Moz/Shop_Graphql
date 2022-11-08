import { BrowserRouter, Routes, Route } from "react-router-dom"
import publicRoutes from "./routes/routes"
import Header from "./components/Header"
import Footer from "./components/Footer"
import FooterMobile from "./components/FooterMobile"
export default function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<div className="px-5 md:px-10 xl:px-20 2xl:px-32">
					<Header />
					<Routes>
						{publicRoutes.map((route, index) => {
							return (
								<Route key={index} path={route.path} element={<route.component />}>
									{route.children &&
										route.children.map((child, index) => {
											return (
												<Route
													key={index}
													path={child.path}
													element={<child.component />}
												/>
											)
										})}
								</Route>
							)
						})}
					</Routes>
					<FooterMobile />
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	)
}
// Home
// Trang tìm kiếm
// Trang danh sách sản phẩm

// Trang checkout
// Trang thanh toán
// Trang đăng nhập
// Trang đăng ký
// Trang quên mật khẩu
// Trang giỏ hàng

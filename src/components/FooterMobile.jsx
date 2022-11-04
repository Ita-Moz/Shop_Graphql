import {footer} from '@/config/images'
function FooterMobile() {
    return (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 border-t border-gray-200">
            <div className="flex justify-evenly items-center">
                <a href="#" className="text-center cursor-pointer">
                    <img
                        className="w-7 py-2 mx-auto"
                        src={footer.menu}
                        alt="logo menu"
                    />
                    Menu
                </a>
                <a href="#" className="relative text-center cursor-pointer">
                    <img
                        className="w-7 py-2 mx-auto"
                        src={footer.cart}
                        alt="logo cart"
                    />
                    Giỏ hàng
                    <span className="absolute -right-2 top-1 bg-primary rounded-full w-6 h-6 flex justify-center items-center">
                        2
                    </span>
                </a>
                <a href="#" className="relative text-center cursor-pointer">
                    <img
                        className="w-7 py-2 mx-auto"
                        src={footer.love}
                        alt="logo love"
                    />
                    Yêu thích
                    <span className="absolute -right-2 top-1 bg-primary rounded-full w-6 h-6 flex justify-center items-center">
                        2
                    </span>
                </a>
                <a href="#" className="text-center cursor-pointer">
                    <img
                        className="w-7 py-2 mx-auto"
                        src={footer.account}
                        alt="logo account"
                    />
                    Tài khoản
                </a>
            </div>
        </div>
    )
}

export default FooterMobile

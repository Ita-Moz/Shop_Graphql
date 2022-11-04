import { AiOutlineFire } from "react-icons/ai"
import Tag from "./Tag"
function SuggestSearch() {
    return (
        <div className="z-50 absolute px-3 top-10 left-0 w-full bg-white shadow-md min-h-[100px]">
            <div className="pt-2 border-b border-gray-300">
                <h1 className="uppercase font-medium flex items-center">
                    <AiOutlineFire color="red" />
                    tìm kiếm phổ biến
                </h1>
            </div>
            <div className="flex flex-wrap my-2 gap-2">
                <Tag>Trái cây</Tag>
                <Tag>Sữa tươi</Tag>
                <Tag>Sữa chua</Tag>
                <Tag>Thịt xông khói</Tag>
                <Tag>Mì ăn liền</Tag>
                <Tag>Nước ngọt</Tag>
            </div>
            <div className="text-center font-medium text-[15px] tracking-wide py-2">
                Không tìm thấy kết quả
            </div>
        </div>
    )
}

export default SuggestSearch

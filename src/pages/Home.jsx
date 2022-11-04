import Carousel from "../components/carousel"
import Category from "../components/Category"
import { slider } from "../config/images"
import { bgCategory } from "../config/images"
function Home() {
    const arraySlider = [slider.slider1]
    const arrayCategory = [
        "Rau xanh, Rau tươi",
        "Củ, quả, măng tươi",
        "Hành, tỏi, ớt, rau thơm",
        "Nấm các loại",
        "Combo rau củ quả"
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
        </div>
    )
}

export default Home

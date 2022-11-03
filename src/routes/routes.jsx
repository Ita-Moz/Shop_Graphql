import config from "../config/routes"
import Home from "../pages/Home"
import Search from "../pages/Search"
import Product from "../pages/Product"
import NotFound from "../pages/NotFound"
const publicRoutes = [
    {
        path: config.home,
        component: Home,
        children: null
    },
    {
        path: config.search,
        component: Search,
        
    },
    {
        path: config.product,
        component: Product,
    },
    {
        path: config.notfound,
        component: NotFound,
    },
]
export default publicRoutes

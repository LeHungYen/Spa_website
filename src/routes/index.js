import { routes } from "../config/routes"

import { Home } from "../pages/Home"
import { NullLayout } from "../layouts/NullLayout"

const publicRoutes = [
    { path: routes.home, component: Home, layout: NullLayout },
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }
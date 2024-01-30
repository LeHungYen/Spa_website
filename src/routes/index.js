import { routes } from "../config/routes"

import { Home } from "../pages/Home"
import { NullLayout } from "../layouts/NullLayout"
import {DefaultLayout} from "../layouts/DefaultLayout";

const publicRoutes = [
    { path: routes.home, component: Home},
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }
import style from './index.module.scss'
import "./index.css"
import NavigationBar from "./header/navigation-bar";


import { Footer } from './Footer'
export function DefaultLayout({ children }) {

    return (
        <div className={style.container}>
            <div className={style.header}>
                <NavigationBar/>
            </div>

            <div className={style.body}>
                {children}
            </div>

            <div className={style.footer}>
                <Footer />
            </div>
        </div>
    )
}
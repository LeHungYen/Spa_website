import style from './index.module.scss'
import "./index.css"
import NavigationBar from "./headder/navigation-bar";

export function DefaultLayout({ children }) {

    return (
        <div className={style.container}>
            <div className={style.header}>
                <NavigationBar/>
            </div>

            <div className={style.body} style={{height: 5000}}>
                {children}
            </div>

            <div className={style.footer}>
                    
            </div>
        </div>
    )
}
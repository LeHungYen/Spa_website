import style from './index.module.scss'

export function NullLayout({ children }) {

    return (
        <div className={style.container}>
            <div className={style.header}>

            </div>

            <div className={style.body}>
                {children}
            </div>

            <div className={style.footer}>

            </div>
        </div>
    )
}
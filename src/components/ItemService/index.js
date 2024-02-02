import style from './index.module.scss'

export function ItemService({ infor }) {


    return (
        <div className={style.container}>
            <div className={style.img}>
                <img src={infor.img}></img>
            </div>

            <div className={style.text}>
                <p>{infor.text}</p>
            </div>
        </div>
    )
}
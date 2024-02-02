import style from './index.module.scss'

export function ItemProduct({ infor }) {

    return (
        <div className={style.container}>
            <div className={style.img}>
                <img src={infor.img}></img>
            </div>

            <div className={style.title}>
                <p>{infor.title}</p>
            </div>

            <div className={style.text}>
                <p>{infor.text}</p>
            </div>

            <div className={style.button}>
                <button>XEM THÊM</button>
            </div>
        </div>
    )
}
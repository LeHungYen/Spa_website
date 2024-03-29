import style from './index.module.scss'

import { Introduce } from './Introduce'
import { Product } from './Product'
import { Service } from './Service'
import CarouselBanner from "../../components/carousel-banner";
export function Home() {

    return <div className={style.container}>
        <div className={style.banner}>
            <CarouselBanner />
        </div>

        <div className={style.introduce}>
            <Introduce />
        </div>

        <div className={style.doctor}>

        </div>

        <div className={style.service}>
            <Service />
        </div>

        <div className={style.product}>
            <Product />
        </div>

        <div className={style.videoAndImg}>

        </div>

        <div className={style.customerReview}>

        </div>
    </div>
}
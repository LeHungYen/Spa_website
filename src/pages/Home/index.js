import style from './index.module.scss'
import CarouselBanner from "../../components/carousel-banner";

export function Home() {

    return <div className={style.container}>
        <CarouselBanner />
    </div>
}
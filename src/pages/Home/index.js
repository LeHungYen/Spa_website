import style from './index.module.scss'
import CarouselBanner from "../../components/carousel-banner";
import ItemDisplayContainer from "../../components/item-display-container";
import ServiceItem from "../../components/service-item";
import {getDict} from "../../services/dict";

export function Home() {
    const {carouselBanner, products} = getData();
    return <div className={style.container}>
        <CarouselBanner {...carouselBanner} />
        <ItemDisplayContainer {...products} />
    </div>
}

// có thể thay bằng api call
function getData() {
    return {
        products: {
            itemComponent: ServiceItem,
            title: getDict("service_title"),
            items: [
                {
                    src: "loading.gif",
                    caption: "service-1"
                },
                {
                    src: "loading.gif",
                    caption: "service-2"
                },
                {
                    src: "loading.gif",
                    caption: "service-3"
                },
                {
                    src: "loading.gif",
                    caption: "service-1"
                },
                {
                    src: "loading.gif",
                    caption: "service-2"
                },
                {
                    src: "loading.gif",
                    caption: "service-3"
                },
                {
                    src: "loading.gif",
                    caption: "service-1"
                },
                {
                    src: "loading.gif",
                    caption: "service-2"
                },
                {
                    src: "loading.gif",
                    caption: "service-3"
                },
            ]
        }
    }
}
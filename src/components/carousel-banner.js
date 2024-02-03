import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
export default function CarouselBanner(props) {
    const {carousels, properties} = props;
    const appendCaption = function (caption) {
        if(caption && caption !== "") {
            return <p className="legend">{caption}</p>
        }
        return <></>
    }
    return (
        <Carousel {...properties} >
            {carousels.map((carousel, index) =>
                <div key={index}>
                    <img src={carousel.path}  alt={require("../assests/loading.gif")}/>
                    {appendCaption(carousel.caption)}
                </div>
            )}
        </Carousel>
    )
}

CarouselBanner.defaultProps = {
    properties: {
        infiniteLoop: true,
        interval: 3000,
        autoPlay: true,
        showThumbs: false,
        showStatus: false,
        showArrows: false,
        emulateTouch: true,
    },
    carousels: [
        {
            path: "https://rohtoaohalclinic.com.vn/vnt_upload/weblink/Tham_nam_CNC_jp.png",
            caption: ""
        },
        {
            path: "https://rohtoaohalclinic.com.vn/vnt_upload/weblink/banner_web-03_1.png",
            caption: ""
        }
    ]
}
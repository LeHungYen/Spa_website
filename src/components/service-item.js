import {useEffect, useState} from "react";
import {getResourceImage} from "../services/import-resource";

export default function ServiceItem(props) {
    const {src, caption, description} = props;
    const [image, setImage] = useState(undefined);
    useEffect( ()=>{
        const loadImage = async function() {
            const img = await getResourceImage(src);
            setImage(img);
        }
        loadImage()
    }, [])
    return (
        <div className="service-item-container">
            <img src={image? image : require("../assests/loading.gif")} alt={require("../assests/loading.gif")} />
            <span className="service-item-caption">{caption}</span>
            <span className="service-item-description">{description}</span>
        </div>
    )
}
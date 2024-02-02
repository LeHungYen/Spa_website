export default function ServiceItem(props) {
    const {serviceInfo} = props;
    return (
        <div className="service-item-container">
            <img src={serviceInfo.src} alt={require("../assests/loading.gif")} />
            <span className="service-item-caption">{serviceInfo.caption}</span>
            <span className="service-item-description">{serviceInfo.description}</span>
        </div>
    )
}
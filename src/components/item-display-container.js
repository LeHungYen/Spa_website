export default function ItemDisplayContainer (props) {
    const {itemComponent, items, title, description} = props;
    const Component = itemComponent;
    return (
        <div className="item-display-container">
            <div className="item-display-introduction">
                <span className="title">{title}</span>
                <span className="description">{description}</span>
            </div>
            <div className="item-display-body">
                {items.map((item, index)=>
                    <Component {...item} />
                )}
            </div>
        </div>
    )
}
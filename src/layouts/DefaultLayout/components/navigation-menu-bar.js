import NavItem from "../../../components/nav-item";
import {NavigationItem} from "../../../model/navigation-item"
export default function NavigationMenuBar(props) {
    const {navigations, pos} = props;
    const additionalClassName = pos > 69 ? "fixed" : ""
    return (
        <div className={"navigation-menu-bar-container top-navigation-menu " + additionalClassName}>
            <div className="navigation-menu-bar">
                {navigations.map((item, index) =>
                    <NavItem {...item} />
                )}
            </div>
        </div>
    )
}


NavigationMenuBar.defaultProps = {
    navigations: [
        new NavigationItem("Home", "/"),
        new NavigationItem("Services", "/service", getServiceItem()),
        new NavigationItem("Products", "/product", getProductItem()),
        new NavigationItem("About us", "/about"),
        new NavigationItem("Contact us", "/contact")
    ],
}

function getServiceItem(){
    return [
        {
            groupName: "group1",
            items:[
                new NavigationItem("service1", "/service-detail/1"),
                new NavigationItem("service1", "/service-detail/1"),
                new NavigationItem("service1", "/service-detail/1"),
                new NavigationItem("service1", "/service-detail/1"),
            ],
        },
        {
            groupName: "group2",
            items:[
                new NavigationItem("service1", "/service-detail/1"),
                new NavigationItem("service1", "/service-detail/1"),
                new NavigationItem("service1", "/service-detail/1"),
                new NavigationItem("service1", "/service-detail/1"),
            ],
        },
    ]
}

function getProductItem(){
    return [
        {
            groupName: "group1",
            items:[
                new NavigationItem("product1", "/product-detail/1"),
                new NavigationItem("product1", "/product-detail/1"),
                new NavigationItem("product1", "/product-detail/1"),
                new NavigationItem("product1", "/product-detail/1"),
            ],
        },
        {
            groupName: "group2",
            items:[
                new NavigationItem("product1", "/product-detail/1"),
                new NavigationItem("product1", "/product-detail/1"),
                new NavigationItem("product1", "/product-detail/1"),
                new NavigationItem("product1", "/product-detail/1"),
            ],
        },
        {
            groupName: "group3",
            items:[
                new NavigationItem("product1", "/product-detail/1"),
                new NavigationItem("product1", "/product-detail/1"),
                new NavigationItem("product1", "/product-detail/1"),
                new NavigationItem("product1", "/product-detail/1"),
            ],
        },
    ]
}

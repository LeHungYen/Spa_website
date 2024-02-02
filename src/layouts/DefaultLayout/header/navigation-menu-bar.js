import NavItem from "../../../components/nav-item";
import {NavigationItem} from "../../../model/navigation-item"
import {getDict} from "../../../services/dict";

export default function NavigationMenuBar(props) {
    let {navigations, pos} = props;
    if(!navigations) {
        navigations = getDefaultNav();
    }
    const additionalClassName = pos > 69 ? "fixed" : "";
    return (
        <div className={"navigation-menu-bar-container top-navigation-menu " + additionalClassName}>
            <div className="navigation-menu-bar">
                {navigations.map((item, index) =>
                    <NavItem {...item} key={index} />
                )}
            </div>
        </div>
    )
}

const getDefaultNav = ()=> {
    return [
        new NavigationItem(getDict("nav_home"), "/"),
        new NavigationItem(getDict("nav_introduce"), "/"),
        new NavigationItem(getDict("nav_doctor"), "/doctor"),
        new NavigationItem(getDict("nav_service_1"), "/service-group/1", getServiceItem()),
        new NavigationItem(getDict("nav_service_2"), "/service-group/1"),
        new NavigationItem(getDict("nav_product"), "/product", getProductItem()),
        new NavigationItem(getDict("nav_news"), "/news"),
        new NavigationItem(getDict("nav_contact"), "/contact")
    ]
}

function getServiceItem(){
    return [
        {
            items:[
                new NavigationItem("service1", "/service-detail/1"),
                new NavigationItem("service1", "/service-detail/1"),
                new NavigationItem("service1", "/service-detail/1"),
                new NavigationItem("service1", "/service-detail/1"),
            ],
        }
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

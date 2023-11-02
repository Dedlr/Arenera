import { Button, Nav, NavItem } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import "../assets/css/main.css"
import logo from "../assets/images/logos/logo.png";
import probg from "../assets/images/bg/download.jpg";

const navigation = [
  {
    title: "Home",
    href: "/starter",
    icon: "bi bi-house-door",
  },
  {
    title: "Ventas",
    href: "/sales",
    icon: "bi bi-shop",
  },
  {
    title: "Productos",
    href: "/products",
    icon: "bi bi-box-seam",
  },
  {
    title: "Clientes",
    href: "/clients",
    icon: "bi bi-people",
  },
  {
    title: "Suministros",
    href: "/cards",
    icon: "bi bi-wrench-adjustable-circle",
  }
];

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  return (
    <div>
      <div className="d-flex align-items-center"></div>
      <div className="image-logo">
        <img src={logo}/>
      </div>
      <div className="fields-nav">
      <div className="p-3 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "active nav-link py-3"
                    : "nav-link text-secondary py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
        </Nav>
      </div>
        
      </div>
     
    </div>
  );
};

export default Sidebar;

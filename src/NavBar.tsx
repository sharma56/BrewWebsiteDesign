import logo from "./img/Logo.svg" 
import "./NavBar.css"
function NavBar(){
    return(
        <>
        <div className="mainDiv">
            <ul className="Navbar-ul">
                <li><h2>BREW TEA CO</h2></li>
                {/* <li><img src="https://cdn.shopify.com/s/files/1/0259/2369/t/148/…MainSiteLogo.svg?v=142332015674068713721677677512" alt="loading..." /></li> */}
                <li className="Navbar-li" >SHOP</li>
                <li className="Navbar-li">THE GIFT SHOP</li>
                <li className="Navbar-li">SUBSCRIBE</li>
                <li className="Navbar-li">BREW COINS</li>
                <li className="Navbar-li">ABOUT</li>
            </ul>
        </div>
        </>
    );
}
export default NavBar;
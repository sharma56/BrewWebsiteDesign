import "./Footer.css"
function Footer(){
    const backgroundUrl="//cdn.shopify.com/s/files/1/0259/2369/files/Footer_Icon.svg?v=280856518527625950"
    return(
        <>
              <div className="mainFooterDiv">
                <div className="pre-footer">
                    <h1 style={{fontFamily: "CooperBTBold"}}>Get with the brew times.</h1>
                </div>
                <div style={{backgroundImage: `url(${backgroundUrl})`}}></div>
              
              <form>
                <input className="Footer-input" type="email" placeholder="Put your email address here" />
                <button className="Footer-button">SIGN UP</button>
              </form>
              <span>The Brew Times comes out every week or so. It's brimming with news, launches, ways to earn Brew Coins and is the only way to get access to any of our sales.</span>
              <hr className="Footer-hr" />
              <div className="linked-List1">
                <h1 className="linked-list-heading">SHOP</h1>
                <ul>
                    <li className="linked-list-li">Gift Shop</li>
                    <li className="linked-list-li">Gifts & Sets</li>
                    <li className="linked-list-li">Teapots & kit</li>
                    <li className="linked-list-li">All Tea</li>
                    <li className="linked-list-li">Subscriptions</li>
                </ul>
              </div>
              <div className="linked-list2">
                <h1 className="linked-list-heading">USEFUL THINGS</h1>
                <ul>
                    <li className="linked-list-li">Your Account</li>
                    <li className="linked-list-li">Brew Coins</li>
                    <li className="linked-list-li">About Us</li>
                    <li className="linked-list-li">FAQs</li>
                    <li className="linked-list-li">Stockists This Way</li>
                </ul>
              </div>
              <div className="linked-List3">
                <h1 className="linked-list-heading">OTHERS</h1>
                <ul>
                    <li className="linked-list-li">Blog</li>
                    <li className="linked-list-li">Privacy Policy</li>
                    <li className="linked-list-li">Talk to Us</li>
                    <li className="linked-list-li">Sitemap</li>
                </ul>
              </div>
              <div className="linked-List4">
                <h1 className="linked-list-heading">GET IN TOUCH</h1>
                <ul>
                    <li className="linked-list-li">hello@brewteacompany.co.uk</li>
                </ul>
              </div>
              <div className="linked-List5">
                <h1 className="linked-list-heading">CALL US</h1>
                <ul>
                    <li className="linked-list-li">0987654321</li>
                    <li className="linked-list-li">1234567890</li>
                    <li className="linked-list-li">4936502648</li>
                </ul>
              </div>
              </div>
        </>
    );
}

export default Footer;

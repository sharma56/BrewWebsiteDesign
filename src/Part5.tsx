import "./Part5.css"
import tea from "./img/Tea.jpeg";
import kit from "./img/kit.jpeg";
import gift from "./img/Gifts.jpeg";
import sub from "./img/Subscription.jpeg";
function Part5(){
    return(
        <>
            <div className="main-part5">
                <div className="box">
                    <img src={tea} alt="loading..." />
                    {/* <h3>Tea</h3> */}
                </div>
                <div className="box">
                <img src={kit} alt="loading..." />
                {/* <h3>Kit</h3> */}
                </div>
                <div className="box">
                <img src={gift} alt="loading..." />
                {/* <h3>Gift</h3> */}
                </div>
                <div className="box">
                <img src={sub} alt="loading..." />
                {/* <h3>Subscription</h3> */}
                </div>
            </div>
        </>
    );
}
export default Part5;
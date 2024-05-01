import "../style/OrderMain.css";
import img1 from "../assets/food.jpg";
import img2 from "../assets/greek salad.jpg"
import img3 from "../assets/bruchetta.jpg"
import img4 from "../assets/lemon dessert.jpg"
import { NavLink } from "react-router-dom";

function OrderMain(){
    return(
        <>
        <main>
        <section className="img-order-layer">
            <img className="order-img" src={img1} alt="img-food" />
            <section>

                <h2 className="order-heading">Are you Hungry?</h2>
                <p className="order-p-img">Don't Wait!!! </p>
                <p className="order-p1-img">Let Start to order food now!</p>
                <NavLink className="hover-btn" to="/menu"><button  className="button-a button-a1 button-order">online  menu</button></NavLink>
            </section>
            </section>

            <section >
            <h2 className="food-heading">favorite food </h2>

            </section>

            <article className="order-layer">
            <div className="order-card">
                <section className="center-img">
                <img className="order-card-img" src={img2} alt="Logo" />

                </section>
                <section className="card-heading">

                    <h3 className="card-h">Greek salad<span className="card-span">$12.99</span></h3>
                    <div className="card-btn-layer">
                    <a href="#" className="cart-btn">ADD TO CART  </a>
                    </div>

                </section>
            </div>
            <div className="order-card">
                <section className="center-img">
                <img className="order-card-img" src={img3} alt="Logo" />

                </section>
                <section className="card-heading">
                    <h3 className="card-h">Bruchetta <span className="card-span">$5.99</span></h3>
                    <div className="card-btn-layer">
                    <a href="#" className="cart-btn">ADD TO CART  </a>
                    </div>
                 </section>
            </div>
            <div className="order-card">
                <section className="center-img">
                <img className="order-card-img" src={img4} alt="Logo" />

                </section>
                <section className="card-heading">
                    <h3 className="card-h"> Dessert <span className="card-span">$5.00</span></h3>
                    <div className="card-btn-layer">
                    <a href="#" className="cart-btn">ADD TO CART  </a>
                    </div>
                </section>
            </div>
            </article>
        </main>
        </>
    );
}
export default OrderMain;
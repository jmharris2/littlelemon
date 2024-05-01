import React from "react";
import"../style/Main.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import img2 from "../assets/greek salad.jpg";
import img1 from "../assets/restauranfood.jpg";
import img3 from "../assets/bruchetta.jpg";
import img4 from "../assets/lemon dessert.jpg";
import img5 from "../assets/man1.jpg";
import img6 from "../assets/woman.jpg";
import img7 from "../assets/man2.jpg";
import img8 from "../assets/woman2.jpg";
import img9 from "../assets/Mario and Adrian A.jpg";
import { NavLink } from "react-router-dom";

function Main(){

    return(
        <main>
            <article className="article-1">
                <section className="section1-a1">
                    <h1 className="head-a head-a1">Little Lemon <span className="span-a1">Chicago</span></h1>
                    <p className="p-a1">Little Lemon is a family-owned Mediterranean
                    restaurant, focused on traditional recipes served
                    with a modern twist.</p>
                    <NavLink className="hover-btn" to="/reservation"><button type="submit" className="button-a button-a1">Reserve a Table</button></NavLink>
                </section>
                <section className="section2-a1">
                <img className="img-a1" src={img1} alt="Logo" />

                </section>
            </article>

            <article className="article-2">
                <h2  className="head-a head-a2" >This Weeks Specials !</h2>
                <div className="center-btn">
                <NavLink className="hover-btn" to="/order"><button type="submit" className="button-a button-a2">Online Menu</button></NavLink>
                </div>
            </article>

            <article className="article-a3">
            <div className="div-a3">
                <section>
                <img className="img-a3" src={img2} alt="Logo" />

                </section>
                <section className="section2-a3">
                    <div className="div2-a3">
                    <h3 className="head-a3">Greek salad</h3>
                    <span className="span-a3">$12.99</span>
                    </div>

                    <p className="p-a3">The famous greek salad of crispy lettuce, peppers,
                         olives and our Chicago style feta cheese, garnished
                         with crunchy garlic and rosemary croutons. </p>
                    <a href="#" className="a-a3">Order a delivery   </a>
                  <FontAwesomeIcon className="icon-car"  icon={faTruck} style={{ color: '#333333', padding:"0 15px" }} />
                </section>
            </div>
            <div className="div-a3">
                <section>
                <img className="img-a3" src={img3} alt="Logo" />

                </section>
                <section className="section2-a3">
                    <div className="div2-a3">
                    <h3 className="head-a3">Bruchetta</h3>
                    <span className="span-a3">$ 5.99</span>
                    </div>

                    <p className="p-a3">Our Bruschetta is made from grilled bread that has
                    been smeared with garlic and seasoned with salt and
                    olive oil.  </p>
                    <a href="#" className="a-a3">Order a delivery   </a>
                  <FontAwesomeIcon className="icon-car"  icon={faTruck} style={{ color: '#333333', padding:"0 15px" }} />
                </section>
            </div>
            <div className="div-a3">
                <section>
                <img className="img-a3" src={img4} alt="Logo" />

                </section>
                <section className="section2-a3">
                    <div className="div2-a3">
                    <h3 className="head-a3">Lemon Dessert</h3>
                    <span className="span-a3">$5.00</span>
                    </div>

                    <p className="p-a3">This comes straight from grandma’s recipe book,
                     every last ingredient has been sourced and is as authentic as
                     can be imagined. </p>
                    <a href="#" className="a-a3">Order a delivery   </a>
                  <FontAwesomeIcon className="icon-car"  icon={faTruck} style={{ color: '#333333', padding:"0 15px" }} />
                </section>
            </div>
            </article>

            <article className="says-underline">
                <h2  className="head-a head-a4" >What Our Customers Say</h2>
            </article>

            <article className="article-a5 ">
            <section className="section-a5 section-a51" >
            <h3 className="head-a5">Nick Parse</h3>
            <p className="p-a5">
            The food was fantastic, flavorful, and well-presented.
            </p>
            <div className="div-a5">
            <img className="img-a5 img-a51" src={img5} alt="Logo" />

            </div>

            </section>
            <section className="section-a5 section-a52" >
            <h3 className="head-a5">Celia Almeda</h3>
            <p className="p-a5">
            The food was simply divine and the service was exceptional.

            </p>
            <div className="div-a5">
            <img className="img-a5 img-a52" src={img6} alt="Logo" />

            </div>

            </section>
            <section className="section-a5 section-a53" >
            <h3 className="head-a5">Nat Reynolds</h3>
            <p className="p-a5">
            The restaurant has a cozy atmosphere and the dishes are bursting
             with flavor.
            </p>
            <div className="div-a5">
            <img className="img-a5 img-a53" src={img7} alt="Logo" />

            </div>

            </section>
            <section className="section-a5 section-a54" >
            <h3 className="head-a5">Nina Scavo</h3>
            <p className="p-a5">
            The staff was friendly and attentive, and the food was absolutely delicious.

            </p>
            <div className="div-a5">
            <img className="img-a5 img-a54" src={img8} alt="Logo" />

            </div>

            </section>

            </article>
            <article className="article-a7">
                <section>
                <h1 className="head-a head-a7">Little Lemon <span className="span-a7">Chicago</span></h1>
                <div className="div-a7">
                <p className="p-a7">
                Based in Chicago, Illinois, Little Lemon is a family owned
                Mediterranean restaurant, focused on traditional recipes served with a
                modern twist.
                </p>
                <p className="p-a7">
                The chefs draw inspiration from Italian, Greek, and Turkish culture
                and have a menu of 12-15 items that they rotate seasonally.
                </p>

                <p className="p-a7">
                The restaurant has a rustic and relaxed atmosphere with moderate
                prices, making it a popular place for a meal any time of the day.
                </p>

                <p className="p-a7">
                Little Lemon is owned by two Italian brothers, Mario and Adrian, who
                moved to the United States to pursue their shared dream of owning a
                restaurant.
                </p>

                <p className="p-a7">
                To craft the menu, Mario relies on family recipes and his experience
                as a chef in Italy.
                </p>

                <p className="p-a7">
                Adrian does all the marketing for the restaurant and led the effort to
                expand the menu beyond classic Italian to incorporate additional
                cuisines from the mediterranean region.
                </p>
                </div>
                </section>
                <section className="section2-a7">
                <div className="div-media">
                    <img className="img-a71" src={img9} alt="Logo" />
                </div>
                {/* <img className="img-a72" src="./Mario and Adrian B.jpg" alt="Logo" /> */}
                <div className="img-a72"></div>

                </section>
            </article>

        </main>
    );
}
export default Main;
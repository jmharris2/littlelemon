import"../style/MenuMain.css";
import img1 from "../assets/bruchetta.jpg";
import img2 from "../assets/soup.jpg";
import img3 from "../assets/Desserts.jpg";
import img4 from "../assets/SeaFood.jpg";
import img5 from "../assets/Salads.jpg";
import img6 from "../assets/Drinks.jpg";
import img7 from "../assets/Meat.jpg";
function MenuMain(){
    return(
        <>
        <section className="menu-layer">
        <img className="menu-img" src={img1} alt="img-food" />

            <h2 className="menu-heading">It's Not Just Food, It's An Experience...</h2>

        </section>
        <section>
            <h3 className="sub-menu-heading">Our Menu</h3>
        </section>

         <article className="sub-menu-article">
        <article className="sub-menu-layer">
            <section  className="sub-menu">
            <img className="sub-menu-img" src={img2} alt="img-food" />
            <h4 className="sub-menu-img-h">Soup</h4>
            </section>

            <section  className="sub-menu" id="desserts-img">
            <img className="sub-menu-img desserts-img"  src={img3} alt="img-food" />
            <h4 className="sub-menu-img-h">Desserts</h4>
            </section>

            <section  className="sub-menu" id="seafood-img" >
            <img className="sub-menu-img seafood-img" src={img4} alt="img-food" />
            <h4 className="sub-menu-img-h">SeaFood</h4>
            </section>



        </article>

        <article className="sub-menu-layer" >
            <section  className="sub-menu" id="salads-img">
            <img className="sub-menu-img salads-img" src={img5} alt="img-food" />
            <h4 className="sub-menu-img-h">Salads</h4>
            </section>

            <section  className="sub-menu"id="drink-img">
            <img className="sub-menu-img drink-img"  src={img6} alt="img-food" />
            <h4 className="sub-menu-img-h">Drinks</h4>
            </section>

            <section  className="sub-menu " id="meat-img">
            <img className="sub-menu-img meat-img" src={img7} alt="img-food" />
            <h4 className="sub-menu-img-h">Meat</h4>
            </section>



        </article>
        </article>
        </>
    );
}
export default MenuMain;
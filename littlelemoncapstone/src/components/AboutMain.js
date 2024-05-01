import "../style/AboutMain.css";
import img1 from "../assets/Mario and Adrian A.jpg"

function AboutMain(){
    return(
        <>
        <section className="about-layer">

            <img src={img1} alt="img-chef" className="about-img-chef" />

            <h2 className="about-heading-chef">our chefs</h2>
        </section>
        <section className="about-layer-p">
            <p className="about-p">
                Little Lemon is owned by two Italian brothers, Mario and Adrian, who
                moved to the United States to pursue their shared dream of owning a
                restaurant.
            </p>

            <p className="about-p">
                To craft the menu, Mario relies on family recipes and his experience
                as a chef in Italy.
            </p>

            <p className="about-p">
                Adrian does all the marketing for the restaurant and led the effort to
                expand the menu beyond classic Italian to incorporate additional
                cuisines from the mediterranean region.
            </p>
        </section>


        </>
    );
}
export default AboutMain;